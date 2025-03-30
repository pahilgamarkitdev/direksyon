
import logo from "@/assets/logo/logo.png"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,

  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import AppSidebarFooter from "./appSidebarFooter"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { ThemeSwitcher } from "../theme-switcher"
import AppSidebarSettingsContent from "./appSidebarSettingsContent"
import SignOutButton from "../signoutButton"



export function AppSidebar() {
  return (
    <Sidebar className="">
      <SidebarHeader >
        <div className="flex flex-row items-center gap-2 p-2">
          <Image
            src={logo}
            alt="logo"
            width={24}
            height={24}
          />

          <h1 className="text-xl font-bold">DIREKSYON</h1>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <AppSidebarSettingsContent />
      </SidebarContent>

      <SidebarFooter className="">
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
                className="w-[--radix-popper-anchor-width]">

                <DropdownMenuItem>
                  <SignOutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>

        </SidebarMenu>

      </SidebarFooter>
    </Sidebar>
  )
}
