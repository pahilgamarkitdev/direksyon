import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { TriangleAlertIcon } from 'lucide-react'
import React, { Suspense } from 'react'
import ReportCard from './_component/reportCard'

export default async function ReportPage() {
    return (
        <div className='w-full h-full flex flex-col gap-4 py-10 pr-10 pl-5 justify-center'>
            <div className='flex flex-row gap-2'>
                <TriangleAlertIcon />
                <h1 className='font-bold text-xl'>Report a Problem</h1>
            </div>

            <Suspense fallback={<p>loading...</p>}>
                <ReportCard />
            </Suspense>
        </div>
    )
}
