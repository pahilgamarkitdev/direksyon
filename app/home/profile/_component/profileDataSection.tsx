import FieldText from '@/components/fieldText';
import { Button } from '@/components/ui/button';
import { EditIcon } from 'lucide-react';
import React from 'react'

export default function ProfileDataSection({
    email,
    username,
}: {
    email: string;
    username: string;
}) {
    const [editMode, setEditMode] = React.useState(false);

    return (
        <div className='w-full h-full flex flex-col gap-4'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-xl font-bold'>Profile Information</h1>

                <Button>
                    <EditIcon className='mr-2' />
                    Edit
                </Button>
            </div>


            <FieldText title='Email' label={email} classname='text-lg w-1/2' variant='vertical' />
            <FieldText title='Username' label={username} classname='text-lg w-1/2' variant='vertical' />
        </div>
    )
}
