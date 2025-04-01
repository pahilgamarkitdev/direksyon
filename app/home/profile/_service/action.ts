"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function changeProfileAvatar(
    {
        avatar,
        userId,
    }: {
        avatar: File
        userId: string;
    }
) {
    try {
        const supabase = await createClient();

        const { data, error } = await supabase.storage
            .from("avatars")
            .upload(`${userId}`, avatar);

        if (error) {
            if (error.message === "The resource already exists") {
                const { data: updateData, error: updateError } = await supabase.storage
                    .from("avatars")
                    .update(`${userId}`, avatar);

                if (updateError) {
                    throw new Error(updateError.message);
                }

                //revalidate the user data
                revalidatePath("/home/profile");

            } else {
                throw new Error(error.message);
            }
        } else {
            const { data: userData, error: userError } = await supabase
                .from("users")
                .update({
                    avatar: data?.path,
                })
                .eq("id", userId);
            if (userError) {
                throw new Error(userError.message);
            }

            //revalidate the user data
            revalidatePath("/home/profile");
        }

    } catch (error) {
        console.error(error);

        throw error;
    }
}

export async function deleteProfileAvatar(
    {
        userId,
    }: {
        userId: string;
    }
) {
    try {
        const supabase = await createClient();

        const { error } = await supabase.storage
            .from("avatars")
            .remove([`${userId}`]);

        if (error) {
            throw new Error(error.message);
        }

        //revalidate the user data
        revalidatePath("/home/profile");

    } catch (error) {
        console.error(error);

        throw error;
    }
}

export async function updateProfile(
    {
        email,
        username,
        userId,
    }: {
        email?: string;
        username?: string;
        userId: string;
    }
) {
    try {
        const supabase = await createClient();

        // update auth user email
        const { error: authError } = await supabase.auth.updateUser({
            email,
        });

        if (authError) {
            throw new Error(authError.message);
        }

        const { error } = await supabase
            .from("users")
            .update({
                email,
                username,
            })
            .eq("id", userId);

        if (error) {
            throw new Error(error.message);
        }

        //revalidate the user data
        revalidatePath("/home/profile");
    } catch (error) {
        console.error(error);

        throw error;
    }
}