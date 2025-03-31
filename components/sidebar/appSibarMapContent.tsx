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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import {
  ChevronDownIcon,
  MapIcon,
  SlidersVerticalIcon,
  UserRoundIcon,
} from "lucide-react";
import Link from "next/link";

export default function AppSibarMapContent() {
  return (
    <>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full h-full px-4">
              <Link
                href="/home"
                className="w-full h-full flex flex-row items-center gap-2"
              >
                <MapIcon />
                <p className="font-bold text-xl">Map</p>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
