import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();

  if (user.data) {
    return redirect("/home");
  } else {
    return redirect("/sign-in");
  }
}
