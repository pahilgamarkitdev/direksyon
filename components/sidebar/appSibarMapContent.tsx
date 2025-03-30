import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import {
  ChevronDownIcon,
  SlidersVerticalIcon,
  UserRoundIcon,
} from "lucide-react";
import Link from "next/link";

export default function AppSibarMapContent() {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel className="flex flex-row items-center gap-2">
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className="w-full h-full flex flex-row items-center justify-between text-primary">
              <div className="flex flex-row items-center gap-2">
                <SlidersVerticalIcon className="w-5 h-5" />
                <p className="font-bold text-lg">Main Campus</p>
              </div>
              <ChevronDownIcon className="w-4 h-4 group-data-[state=open]/collapsible:rotate-180 transition-transform" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
        </SidebarGroupLabel>

        <CollapsibleContent>
          <SidebarContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link
                    href="/home/"
                    className="w-full h-full flex flex-row items-center gap-2"
                  >
                    <UserRoundIcon className="w-5 h-5" />
                    <p className="font-semibold text-base">1st Floor</p>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}
