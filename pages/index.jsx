import { Jost } from "next/font/google";
import Header from "@/components/componentsHome/Header/Header";
import MenuBar from "@/components/componentsHome/MenuBar/MenuBar";
import Hero from "@/components/componentsHome/Hero/Hero";
import ShopPolicy from "@/components/componentsHome/ShopPolicy/ShopPolicy";
import NewArrival from "@/components/componentsHome/NewArrival/NewArrival";
import OurFeaturedProducts from "@/components/componentsHome/OurFeaturedProducts/OurFeaturedProducts";
import Discount from "@/components/componentsHome/Discount/Discount";
import Blog from "@/components/componentsHome/Blog/Blog";
import Review from "@/components/componentsHome/Review/Review";
import Instagram from "@/components/componentsHome/Instagram/Instagram";
import OfferNewslatter from "@/components/componentsHome/OfferNewslatter/OfferNewslatter";
import Futter from "@/components/componentsHome/Futter/Futter";
import Copyright from "@/components/componentsHome/Copyright/Copyright";
import CartModal from "@/components/Modal/CartModal/CartModal";

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
      <Instagram />
      <OfferNewslatter />
      <Futter />
      <Copyright />


      <CartModal />
    </div>
  );
}
