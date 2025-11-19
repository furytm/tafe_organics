import ProductPageContent from "@/src/product-detail-page"

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <ProductPageContent params={params} />
}
