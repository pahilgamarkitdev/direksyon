import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function ProfileAvatarSection() {
    return (

        <div className='w-full h-full flex flex-col gap-4'>
            <p className='text-xl font-bold'>Profile Picture</p>

            <div className='flex flex-row items-center gap-10'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <Avatar className='w-24 h-24'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className='flex flex-row gap-5 justify-end items-center'>
                    <Button>
                        Change Picture
                    </Button>

                    <Button variant={"outline"}>
                        Delete Picture
                    </Button>
                </div>


            </div>
        </div>
    )
}
