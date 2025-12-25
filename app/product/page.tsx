// src/app/product/page.tsx
import ProductsGridSkeleton from "../component/loading-grid";
import { Suspense } from "react";
import ProductsGrid from "./ProductsGrid";


type SearchParams = Promise<{[key: string]: string | string[] | undefined}>;

export default async function ProductPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
   
  const page = Number(searchParams.page) || 1;


  return (
  <div className="container mx-auto p-4">


    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
      Our Products
        </h1>
        <p className="mt-2 text-gray-600">
          Discover the latest and greatest products
        </p>
      </div>
    </header>

    
    <main className="my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense key={page} fallback={<ProductsGridSkeleton />}>
          <ProductsGrid page={page} />
        </Suspense>
      </div>
    </main>
  </div>
);

}
