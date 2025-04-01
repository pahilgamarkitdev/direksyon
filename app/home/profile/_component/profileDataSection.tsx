import FieldText from "@/components/fieldText";
import { Button } from "@/components/ui/button";
import { UserType } from "@/model/userModel";
import { EditIcon } from "lucide-react";
import React from "react";
import ProfileDataEditSection from "./profileDataEditSection";

export default function ProfileDataSection({ user }: { user: UserType }) {
  const [editMode, setEditMode] = React.useState(false);

  return (
    <>
      {editMode ? (
        <ProfileDataEditSection user={user} setEditMode={setEditMode} />
      ) : (
        <div className="w-full h-full flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-xl font-bold">Profile Information</h1>

            <Button
              onClick={() => {
                setEditMode(true);
              }}
              type="button"
            >
              <EditIcon className="mr-2" />
              Edit
            </Button>
          </div>

          <FieldText
            title="Email"
            label={user.email}
            classname="text-lg w-1/2"
            variant="vertical"
          />
          <FieldText
            title="Username"
            label={user.username}
            classname="text-lg w-1/2"
            variant="vertical"
          />
        </div>
      )}
    </>
  );
}
