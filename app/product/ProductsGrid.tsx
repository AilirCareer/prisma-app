import PaginationControls from "../component/PaginationControls";
import { ProductCard } from "../component/ProductCard";
import { delay } from "../lib/delay";
import prisma from "../lib/prisma";
    const PAGE_SIZE = 9;
export default async function ProductsGrid({
    page,
}:
{
    page?: number;
}) {
    const skip = ((page || 1) - 1) * PAGE_SIZE;
    const[products,total] = await Promise.all([
        prisma.product.findMany({
            skip,
            take: PAGE_SIZE,
        }),
        prisma.product.count(),
    ]);
    const totalPages = Math.ceil(total / PAGE_SIZE);

     await delay(500);

    return (
        <>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <ProductCard key={product.id} products={product} />
            ))}
        </div>
        <PaginationControls
            currentPage={page || 1}
            totalPages={totalPages}
        />
        </>
    );
}