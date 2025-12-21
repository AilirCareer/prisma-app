// src/app/product/page.tsx
import { ProductCard } from "../component/ProductCard";
import { mockProducts } from "../lib/mocks";
import prisma from "../lib/prisma";

export default async function ProductPage() {
  const products = await prisma.product.findMany();
  console.log(products);

  return (
    <div className="min-h-screen ">
      <header>
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} products={product} />
          ))}
        </div>
      </main>
    </div>
  );
}