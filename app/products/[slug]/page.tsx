import ProductPageContent from "../../../components/product-detail-page";

// export default function ProductPage({ params }: { params: { slug: string } }) {
//   return <ProductPageContent params={params} />;
// }
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  return <ProductPageContent params={resolvedParams} />
}
