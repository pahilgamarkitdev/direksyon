"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileSkeleton() {
    return (
        <div className="space-y-8 max-w-2xl mx-auto p-4">
            {/* Profile Picture Section */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold">
                    <Skeleton className="h-7 w-40" />
                </h2>

                <div className="flex items-center gap-4">
                    {/* Profile Picture Skeleton */}
                    <Skeleton className="h-20 w-20 rounded-full" />

                    <div className="flex gap-2">
                        {/* Button Skeletons */}
                        <Skeleton className="h-10 w-32" />
                        <Skeleton className="h-10 w-32" />
                    </div>
                </div>
            </div>

            {/* Profile Information Section */}
            <div className="space-y-6">
                <h2 className="text-xl font-bold">
                    <Skeleton className="h-7 w-48" />
                </h2>

                {/* Email Field */}
                <div className="space-y-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-12 w-full rounded-md" />
                </div>

                {/* Username Field */}
                <div className="space-y-2">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-12 w-full rounded-md" />
                </div>
            </div>
        </div>
    )
}
