"use client";
import { Skeleton } from "@/components/ui/skeleton"
import { InfoIcon, PhoneIcon, RocketIcon, LightbulbIcon } from "lucide-react"

export default function AboutPageSkeleton() {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* About Us Card Skeleton */}
                <div className="border rounded-lg p-6 shadow-sm">
                    <div className="flex justify-center mb-4">
                        <div className="flex items-center gap-2">
                            <InfoIcon className="h-5 w-5 text-muted-foreground" />
                            <Skeleton className="h-6 w-24" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-3/4" />
                    </div>
                </div>

                {/* Contact Card Skeleton */}
                <div className="border rounded-lg p-6 shadow-sm">
                    <div className="flex justify-center mb-4">
                        <div className="flex items-center gap-2">
                            <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                            <Skeleton className="h-6 w-24" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <Skeleton className="h-5 w-3/4 mb-1" />
                            <Skeleton className="h-5 w-1/3" />
                        </div>

                        <div>
                            <Skeleton className="h-5 w-1/2 mb-1" />
                            <Skeleton className="h-5 w-2/3" />
                        </div>

                        <div>
                            <Skeleton className="h-5 w-1/2 mb-1" />
                            <Skeleton className="h-5 w-2/3" />
                        </div>

                        <div className="flex justify-between">
                            <div>
                                <Skeleton className="h-5 w-40 mb-1" />
                                <Skeleton className="h-5 w-32" />
                            </div>

                            <div>
                                <Skeleton className="h-5 w-40 mb-1" />
                                <Skeleton className="h-5 w-32" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Card Skeleton */}
                <div className="border rounded-lg p-6 shadow-sm">
                    <div className="flex justify-center mb-4">
                        <div className="flex items-center gap-2">
                            <RocketIcon className="h-5 w-5 text-muted-foreground" />
                            <Skeleton className="h-6 w-24" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-3/4" />
                    </div>
                </div>

                {/* Vision Card Skeleton */}
                <div className="border rounded-lg p-6 shadow-sm">
                    <div className="flex justify-center mb-4">
                        <div className="flex items-center gap-2">
                            <LightbulbIcon className="h-5 w-5 text-muted-foreground" />
                            <Skeleton className="h-6 w-24" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-3/4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

