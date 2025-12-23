import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center space-y-4">
        <Skeleton className="h-10 w-40 mx-auto" />
        <Skeleton className="h-4 w-56 mx-auto" />
        <Skeleton className="h-10 w-32 mx-auto" />
      </div>
    </main>
  )
}