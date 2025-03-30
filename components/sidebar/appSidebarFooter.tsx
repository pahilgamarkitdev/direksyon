import { getUserData } from '@/service/queries'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ChevronsUpDownIcon } from 'lucide-react';

export default async function AppSidebarFooter() {
  const user = await getUserData();

  return (
    <>
      {user && (
        <div className='flex flex-row gap-2 items-center justify-between w-full h-full'>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className='flex flex-col'>
            <h3 className='font-bold text-base'>{user.username ?? "test"}</h3>
            <h3 className='font-semibold text-sm'>{user.email}</h3>
          </div>

          <div>
            <ChevronsUpDownIcon className='w-4 h-4 text-gray-500' />
          </div>

        </div>
      )}
    </>
  )
}
