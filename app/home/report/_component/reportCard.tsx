import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { createClient } from '@/utils/supabase/server'
import React from 'react'
import ReportForm from './reportForm';

export default async function ReportCard() {
    const supabase = await createClient();
    const userId = (await supabase.auth.getUser()).data.user?.id

    return (
        <div className='w-full h-full'>
            {userId && (
                <Card className='text-lg font-medium'>
                    <CardHeader>
                        Help Us Improve Your Experience
                    </CardHeader>

                    <CardContent className='flex flex-col gap-4'>
                        <div>
                            <p>We’re always working to make Direksiyon the best campus navigation tool for you! If you’ve encountered an issue, please let us know so we can fix it as soon as possible.</p>
                        </div>

                        {/* form */}
                        <ReportForm userId={userId} />
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
