import { AppSidebar } from '@/components/sidebar/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                <div className='flex flex-row gap-2 w-full'>
                    <SidebarTrigger />
                    {children}
                </div>
            </SidebarProvider>
        </div>
    )
}
