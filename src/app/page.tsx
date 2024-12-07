import FlashSales from "@/components/FlashSale";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Category from "@/components/Category";
import BestProduct from "@/components/BestProduct";
import OurProduct from "@/components/OurProduct";
import Services from "@/components/Services";
import Speaker from "@/components/Speaker";

export default function Home() {
  return (
    
    <div>
      <Hero />
      <Category />
      <BestProduct />
      <FlashSales />
      <Speaker />
      <OurProduct />
      <Featured />
      <Services />
      
    </div>
  );
}
