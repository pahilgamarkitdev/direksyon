import React, { Suspense } from 'react'
import ProfileAvatarSection from './_component/profileAvatarSection'
import ProfileDataSection from './_component/profileDataSection'
import { getUserData } from '@/service/queries'
import ProfileComponent from './_component/profileComponent';
import ProfileSkeleton from './loading';

export default async function ProfilePage() {
    const user = await getUserData();

    return (
        <div className='w-full h-full'>
            <Suspense fallback={<ProfileSkeleton />}>
                <ProfileComponent user={user} />
            </Suspense>
        </div>
    )
}
