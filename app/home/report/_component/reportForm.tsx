"use client";

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast';
import { reportProblemSchema, reportProblemType } from '@/model/reportModel'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { submitReportAction } from '../_service/action';

export default function ReportForm({ userId }: { userId: string }) {
    const { toast } = useToast();

    const form = useForm<reportProblemType>({
        resolver: zodResolver(reportProblemSchema),
        defaultValues: {
            userId: userId,
            problem: ""
        }
    })

    async function onSubmit(data: reportProblemType) {
        try {
            await submitReportAction(data);

            toast({
                title: "Report submitted succesfully"
            })

            form.reset();
        } catch (error) {
            console.error(error)

            if (error instanceof Error) {
                form.setError(
                    "root", {
                    message: error.message
                }
                )
            }
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                <FormField
                    control={form.control}
                    name="problem"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-lg'>Describe your problem: </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder='Type your problem here'
                                    {...field}
                                    className='h-[20rem] text-lg'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type='submit' className='ml-auto' disabled={form.formState.isSubmitting}>
                    {
                        form.formState.isSubmitting ? "submitting" : "submit"
                    }
                </Button>
            </form>
        </Form>
    )
}
