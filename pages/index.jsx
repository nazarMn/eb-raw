import Image from "next/image";
import { Jost } from "next/font/google";
import Header from "../components/Header/Header";
const jost = Jost({ subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
 });


export default function Home() {
  return (
<body className={jost.className} сlassName="w-screen h-full bg-[#f5f5f5]">

<Header />
 
</body>
  );
}
