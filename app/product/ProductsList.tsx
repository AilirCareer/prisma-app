import prisma from "../lib/prisma"
import { ProductCard } from "../component/ProductCard"

type Props = {
  page: number
  pageSize: number
}

export default async function ProductsList({ page, pageSize }: Props) {
  const skip = (page - 1) * pageSize

  const products = await prisma.product.findMany({
    skip,
    take: pageSize,
  })

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} products={product} />
      ))}
    </div>
  )
}
