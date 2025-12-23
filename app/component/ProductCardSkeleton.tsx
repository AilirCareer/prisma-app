import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
    return (
        <Card className="pt-0 overflow-hidden">
            <div className="relative aspect-video hover:scale-101 transition-transform duration-300">
                <Skeleton className="w-full h-full" />             
            </div>
        <CardHeader>
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full" />

        </CardHeader>
        <CardFooter className="flex justify-between">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-8 w-1/2 mt-2" />
        </CardFooter>
        </Card>
    );
}