"use server";
import { createClient } from "@/utils/supabase/server";


import { encodedRedirect } from "@/utils/utils";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignInType, SignUpType } from "@/model/authModel";

export const signUpAction = async (data: SignUpType) => {

    try {
        const { email, password } = data;

        const supabase = await createClient();
        const origin = (await headers()).get("origin");

        if (!email || !password) {
            throw new Error("Email and password are required");
        }

        const { error, data: userData } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${origin}/auth/callback`,
            },
        })

        if (error) {
            throw new Error(error.message);
        }

        if (!userData.user) {
            throw new Error("User data is missing");
        }

        // insert user data into database
        const { error: userError } = await supabase
            .from("users")
            .insert({
                id: userData.user?.id,
                email: data.email,
                username: data.username,
            });

        if (userError) {
            throw new Error(userError.message);
        }

    } catch (error) {
        console.error(error);

        throw error;
    }
};

export const signInAction = async (data: SignInType) => {
    try {
        const { email, password } = data;

        const supabase = await createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            throw new Error(error.message);
        }

    } catch (error) {
        console.error(error);
        throw error;
    }

};

export const forgotPasswordAction = async (formData: FormData) => {
    const email = formData.get("email")?.toString();
    const supabase = await createClient();
    const origin = (await headers()).get("origin");
    const callbackUrl = formData.get("callbackUrl")?.toString();

    if (!email) {
        return encodedRedirect("error", "/forgot-password", "Email is required");
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
    });

    if (error) {
        console.error(error.message);
        return encodedRedirect(
            "error",
            "/forgot-password",
            "Could not reset password",
        );
    }

    if (callbackUrl) {
        return redirect(callbackUrl);
    }

    return encodedRedirect(
        "success",
        "/forgot-password",
        "Check your email for a link to reset your password.",
    );
};

export const resetPasswordAction = async (formData: FormData) => {
    const supabase = await createClient();

    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!password || !confirmPassword) {
        encodedRedirect(
            "error",
            "/protected/reset-password",
            "Password and confirm password are required",
        );
    }

    if (password !== confirmPassword) {
        encodedRedirect(
            "error",
            "/protected/reset-password",
            "Passwords do not match",
        );
    }

    const { error } = await supabase.auth.updateUser({
        password: password,
    });

    if (error) {
        encodedRedirect(
            "error",
            "/protected/reset-password",
            "Password update failed",
        );
    }

    encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
    try {
        const supabase = await createClient();
        await supabase.auth.signOut();

        redirect("/sign-in");
    } catch (error) {
        console.error("Error signing out:", error);
    }

};


export async function signInWithGoogleAction() {
    try {

        const supabase = await createClient();

        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
            },
        })

        // if new user, insert into users table
        const { data, error } = await supabase.auth.getSession();

        if (error) {
            throw new Error(error.message);
        }

        if (data.session) {
            const user = data.session.user;

            const { error: userError } = await supabase
                .from("users")
                .insert({
                    id: user.id,
                    email: user.email,
                    username: user.user_metadata.full_name,
                });

            if (userError) {
                throw new Error(userError.message);
            }
        }

    } catch (error) {
        console.error('Error signing in with Google:', error);
    }
}