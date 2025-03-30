import { cn } from '@/lib/utils';
import React from 'react'

export default function FieldText({
    title,
    label,
    classname,
    variant
}: {
    title: string;
    label: string;
    variant: "vertical" | "horizontal";
    classname: string;
}) {
    return (
        <div className={cn(
            "flex gap-2",
            variant === "vertical" ? "flex-col" : "flex-row",
            classname
        )}>
            <p className='font-semibold'>{title}</p>
            <p className='border-slate-700 border-[1.5px] p-3 rounded-lg w-full'>{label}</p>
        </div>
    )
}
