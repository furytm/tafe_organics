import Header from "@/components/header"
import PromoBanner from "@/components/promo-banner"
import HeroSection from "@/components/hero-section"
import BrandIntro from "@/components/brand-intro"
import ShopByCategory from "@/components/shop-by-category"
import ProductsShowcase from "@/components/products-showcase"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <PromoBanner />
      <HeroSection />
      <BrandIntro />
      <ShopByCategory />
      <ProductsShowcase />
      <Footer />
    </main>
  )
}
