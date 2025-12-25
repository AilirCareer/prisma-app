// app/loading.tsx
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <Skeleton className="h-10 w-56 mx-auto rounded-md" />

        <Skeleton className="mt-3 h-6 w-72 mx-auto rounded-md" />


        <div className="mt-6">
          <Skeleton className="h-10 w-40 mx-auto rounded-md" />
        </div>
      </div>
    </main>
  );
}
