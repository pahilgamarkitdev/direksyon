import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { UserType, UserUpdateType } from "@/model/userModel";
import { EditIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { updateProfile } from "../_service/action";

export default function ProfileDataEditSection({
  user,
  setEditMode,
}: {
  user: UserType;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const form = useForm<UserUpdateType>({
    defaultValues: {
      email: user.email,
      username: user.username,
    },
  });

  const { toast } = useToast();

  const onSubmit = async (data: UserUpdateType) => {
    try {
      await updateProfile({
        userId: user.id,
        email: data.email,
        username: data.username,
      });

      toast({
        title: "Success",
        description: "Profile updated successfully.",
        variant: "default",
      });

      setEditMode(false);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-xl font-bold">Profile Information</h1>

            <div className="flex flex-row gap-2">
              <Button
                onClick={() => {
                  setEditMode(false);
                }}
                type="button"
                variant="outline"
              >
                <EditIcon className="mr-2" />
                Cancel
              </Button>

              <Button
                type="submit"
                variant={"default"}
                disabled={form.formState.isSubmitting}
              >
                <EditIcon className="mr-2" />
                {form.formState.isSubmitting ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-2/4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <Input
                type="email"
                id="email"
                className="border-slate-700 border-[1.5px] p-3 py-6 rounded-lg text-xl "
                {...form.register("email")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-lg font-semibold">
                Username
              </label>
              <Input
                type="text"
                id="username"
                className="border-slate-700 border-[1.5px] p-3 py-6 rounded-lg text-xl "
                {...form.register("username")}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
