import React from "react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  ChevronDownIcon,
  InfoIcon,
  SlidersVerticalIcon,
  TriangleAlertIcon,
  User,
  UserRoundIcon,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import Link from "next/link";

export default function AppSidebarSettingsContent() {
  return (
    <div className="text-white hover:text-primary">
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup className="">
        <SidebarGroupLabel className="flex flex-row items-center gap-2">
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className="w-full h-full flex flex-row items-center justify-between text-white hover:text-primary">
              <div className="flex flex-row items-center gap-2 text-white hover:text-primary">
                <SlidersVerticalIcon className="w-5 h-5" />
                <p className="font-bold text-lg">Settings</p>
              </div>
              <ChevronDownIcon className="w-4 h-4 group-data-[state=open]/collapsible:rotate-180 transition-transform" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
        </SidebarGroupLabel>

        <CollapsibleContent className="text-white">
          <SidebarContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link
                    href="/home/profile"
                    className="w-full h-full flex flex-row items-center gap-2 text-white hover:text-primary"
                  >
                    <UserRoundIcon className="w-5 h-5 stroke-white hover:stroke-black" />
                    <p className="font-semibold text-base">Profile</p>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>

              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link
                    className="w-full h-full flex flex-row items-center gap-2 text-white hover:text-primary"
                    href="/home/about"
                  >
                    <TriangleAlertIcon className="w-5 h-5 stroke-white hover:stroke-black" />
                    <p className="font-semibold text-base">About Us</p>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>

              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link
                    className="w-full h-full flex flex-row items-center gap-2 text-white hover:text-primary"
                    href={"/home/report"}
                  >
                    <InfoIcon className="w-5 h-5 stroke-white hover:stroke-black" />
                    <p className="font-semibold text-base">Report a Problem</p>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
    </div>
  );
}
