"use server";

import { UserType } from "@/model/userModel";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function getUserData(): Promise<UserType> {
    try {
        const supabase = await createClient();

        const { data, error } = await supabase.auth.getUser();

        if (error) {
            console.error("Error fetching user:", error);
            throw error;
        }

        const { data: userData, error: userError } = await supabase
            .from("users")
            .select("*")
            .eq("id", data.user?.id)
            .single();

        if (userError) {
            console.error("Error fetching user data:", userError);
            throw userError;
        }

        if (!userData) {
            console.error("User data not found");
            redirect("/sign-in");
        }

        // get user avatar in supabase storage
        const { data: avatarData } = await supabase.storage
            .from("avatars")
            .getPublicUrl(userData.avatar || "");

        return {
            id: userData.id,
            email: userData.email,
            username: userData.username,
            created_at: userData.created_at,
            avatar: avatarData.publicUrl,
        };
    } catch (error) {
        console.error("Error fetching user:", error);
        redirect("/sign-in");
    }
}