"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import React from "react";
import { changeProfileAvatar, deleteProfileAvatar } from "../_service/action";
import { UserType } from "@/model/userModel";
import { useToast } from "@/hooks/use-toast";

export default function ProfileAvatarSection({ user }: { user: UserType }) {
  const [avatarUrl, setAvatarUrl] = React.useState<string | null | undefined>(
    user.avatar
  );

  const { toast } = useToast();

  const handleChangeAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      const fileType = file.type.split("/")[0];

      if (fileType !== "image") {
        alert("Please select an image file.");
        return;
      }

      await changeProfileAvatar({
        avatar: file,
        userId: user.id,
      });

      toast({
        title: "Success",
        description: "Profile picture updated successfully.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error uploading image:", error);

      toast({
        title: "Error",
        description: "Failed to upload image.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteAvatar = async () => {
    try {
      await deleteProfileAvatar({
        userId: user.id,
      });

      setAvatarUrl(null);

      toast({
        title: "Success",
        description: "Profile picture deleted successfully.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error deleting image:", error);

      toast({
        title: "Error",
        description: "Failed to delete image.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <p className="text-xl font-bold">Profile Picture</p>

      <div className="flex flex-row items-center gap-10">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src={avatarUrl ?? "https://github.com/shadcn.png"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-row gap-5 justify-end items-center">
          <Button asChild>
            <label className="cursor-pointer">
              Change Picture
              <input
                type="file"
                accept="image/*"
                onChange={handleChangeAvatar}
                className="hidden"
              />
            </label>
          </Button>

          <Button variant={"outline"} onClick={handleDeleteAvatar}>
            Delete Picture
          </Button>
        </div>
      </div>
    </div>
  );
}
