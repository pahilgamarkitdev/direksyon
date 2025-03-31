"use client";

import React from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { redirect } from "next/navigation";
import { signOutAction } from "@/app/(auth-pages)/service/action";

export default function SignOutButton({ className }: { className?: string }) {
  const { toast } = useToast();

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            className={`w-full h-full ${className}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Sign Out
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent className="w-[--radix-popper-anchor-width] md:w-[400px]">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to sign out?
            </AlertDialogTitle>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction
              onClick={async () => {
                try {
                  ("use server");

                  await signOutAction();

                  toast({
                    title: "Success",
                    description: "Successfully signed out",
                    variant: "default",
                  });

                  redirect("/sign-in");
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
