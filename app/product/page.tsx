// src/app/product/page.tsx
import { ProductCard } from "../component/ProductCard";
import prisma from "../lib/prisma";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import ProductsGridSkeleton from "../component/loading-grid";
import { Suspense } from "react";
import ProductsList from "./ProductsList";


type SearchParams = Promise<{[key: string]: string | string[] | undefined}>;

export default async function ProductPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
   
  const page = Number(searchParams.page) || 1;
  const pageSize = 3;
  const skip = (page - 1) * pageSize;
  const [products, totals] = await Promise.all([
    prisma.product.findMany({
      skip: skip,
      take: pageSize,
    }),
    prisma.product.count(),
  ]);

  const totalPages = Math.ceil(totals / pageSize);

  return (
  <div className="min-h-screen bg-gray-50" dir="rtl">
    {/* رأس الصفحة */}
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          منتجاتنا
        </h1>
        <p className="mt-2 text-gray-600">
          اكتشف أحدث وأفضل منتجاتنا
        </p>
      </div>
    </header>

    {/* المحتوى الرئيسي */}
    <main className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      {/* شبكة المنتجات */}
      {/* <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div> */}

      {/* ✅ Suspense here */}
        <Suspense fallback={<ProductsGridSkeleton />}>
          <ProductsList page={page} pageSize={pageSize} />
        </Suspense>


      {/* ترقيم الصفحات */}
      <div className="mt-12 flex justify-center">
        <Pagination>
          <PaginationContent className="rounded-lg border bg-white shadow-sm flex-row-reverse">
            <PaginationItem>
              <PaginationPrevious
                href={`/product?page=${page - 1}`}
                className="hover:bg-gray-100"
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href={`/product?page=${i + 1}`}
                  className={page === i + 1 ? "bg-blue-500 text-white" : "hover:bg-gray-100"}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href={`/product?page=${page + 1}`}
                className="hover:bg-gray-100"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  </div>
);

}
