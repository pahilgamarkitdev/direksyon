import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function AboutCard({
    title,
    icon,
    children,
}: {
    title: string
    icon: React.ReactNode
    children: React.ReactNode
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='flex flex-row gap-2 items-center justify-center'>
                    {icon}
                    <h1 className='text-xl font-bold'>{title}</h1>
                </CardTitle>
            </CardHeader>

            <CardContent className='text-lg font-semibold'>
                {children}
            </CardContent>
        </Card>
    )
}
