"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <main className="relative h-screen inset-0">
            <Skeleton className="hidden sm:block fixed inset-y-0 left-0 w-[224px] bg-[#1E2640] px-[10px] py-[16px]" />
            <section>
                <Skeleton className="w-full h-full" />
            </section>
        </main>
    )
}