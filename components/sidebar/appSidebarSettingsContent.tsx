import React from 'react'
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '../ui/sidebar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { ChevronDownIcon, InfoIcon, SlidersVerticalIcon, TriangleAlertIcon, User, UserRoundIcon } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'

export default function AppSidebarSettingsContent() {
    return (
        <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
                <SidebarGroupLabel className='flex flex-row items-center gap-2'>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton className='w-full h-full flex flex-row items-center justify-between text-primary'>
                            <div className='flex flex-row items-center gap-2'>
                                <SlidersVerticalIcon className='w-5 h-5' />
                                <p className='font-bold text-lg'>Settings</p>
                            </div>
                            <ChevronDownIcon className='w-4 h-4 group-data-[state=open]/collapsible:rotate-180 transition-transform' />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                </SidebarGroupLabel>

                <CollapsibleContent>
                    <SidebarContent>
                        <SidebarMenuSub>
                            <SidebarMenuSubItem>
                                <SidebarMenuSubButton className='w-full h-full flex flex-row items-center gap-2'>
                                    <UserRoundIcon className='w-5 h-5' />
                                    <p className='font-semibold text-base'>Profile</p>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>


                            <SidebarMenuSubItem>
                                <SidebarMenuSubButton className='w-full h-full flex flex-row items-center gap-2'>
                                    <TriangleAlertIcon className='w-5 h-5' />
                                    <p className='font-semibold text-base'>About Us</p>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>

                            <SidebarMenuSubItem>
                                <SidebarMenuSubButton className='w-full h-full flex flex-row items-center gap-2'>
                                    <InfoIcon className='w-5 h-5' />
                                    <p className='font-semibold text-base'>Report a Problem</p>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </SidebarContent>

                </CollapsibleContent>
            </SidebarGroup>
        </Collapsible>
    )
}
