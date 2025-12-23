import { ProductCardSkeleton } from "./component/ProductCardSkeleton";

export default function Loading() {
    return (
        <div className="min-h-screen ">
              <header>
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
                </div>
              </header>
              <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 2 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                  ))}
                </div>
              </main>
        </div>
    );
}