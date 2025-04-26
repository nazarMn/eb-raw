import { Jost } from "next/font/google";
import Header from "../components/Header/Header";
import MenuBar from "../components/MenuBar/MenuBar";
import Hero from "../components/Hero/Hero";
import ShopPolicy from "../components/ShopPolicy/ShopPolicy";
import NewArrival from "../components/NewArrival/NewArrival";
import OurFeaturedProducts from "@/components/OurFeaturedProducts/OurFeaturedProducts";
import Discount from "@/components/Discount/Discount";
import Blog from "@/components/Blog/Blog";
import Review from "@/components/Review/Review";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div className={jost.className}>
      <Header />
      <div className="h-[1px] bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.2)]"></div>
      <MenuBar />
      <Hero />
      <ShopPolicy />
      <NewArrival />
      <OurFeaturedProducts />
      <Discount />
      <Blog />
      <Review />
    </div>
  );
}
