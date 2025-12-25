import ProductsGridSkeleton from "../component/loading-grid";

export default function Loading() {
    return (

      <div className="container mx-auto p-4">
          {/* رأس الصفحة */}
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
          {/* محتوى الصفحة */}
          <main className="my-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ProductsGridSkeleton/>
            </div>
          </main>
        </div>
    );
}