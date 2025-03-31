import logo from "@/assets/logo/logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import AppSidebarFooter from "./appSidebarFooter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "../theme-switcher";
import AppSidebarSettingsContent from "./appSidebarSettingsContent";
import SignOutButton from "../signoutButton";
import AppSibarMapContent from "./appSibarMapContent";
import { Separator } from "../ui/separator";

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#252A34] dark:bg-[#252A34]">
      <SidebarHeader className="bg-[#252A34] dark:bg-[#252A34] text-white">
        <div className="flex flex-row items-center gap-2 p-2">
          <Image src={logo} alt="logo" width={24} height={24} />

          <h1 className="text-xl font-bold">DIREKSYON</h1>
        </div>

        <Separator className="mb-2" />
      </SidebarHeader>

      <SidebarContent className="bg-[#252A34] dark:bg-[#252A34] text-white">
        <AppSibarMapContent />
        <AppSidebarSettingsContent />
      </SidebarContent>

      <SidebarFooter className="bg-[#252A34] dark:bg-[#252A34] text-white">
        <ThemeSwitcher />
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="w-full h-full">
                  <AppSidebarFooter />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <SignOutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
