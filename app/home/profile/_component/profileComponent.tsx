"use client"
import { UserType } from '@/model/userModel'
import React from 'react'
import ProfileAvatarSection from './profileAvatarSection'
import ProfileDataSection from './profileDataSection'
import { Button } from '@/components/ui/button'
import { EditIcon } from 'lucide-react'

export default function ProfileComponent({
    user
}: {
    user: UserType
}) {
    return (
        <div className='w-full h-full flex flex-col gap-4 p-10'>
 
            <div>
                <ProfileAvatarSection />
            </div>

            <div className='w-full'>
                <ProfileDataSection
                    email={user.email}
                    username={user.username ?? "test"}
                />
            </div>

        </div>
    )
}
