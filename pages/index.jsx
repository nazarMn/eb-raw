import Image from "next/image";
import { Jost } from "next/font/google";
const jost = Jost({ subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
 });


export default function Home() {
  return (
  <div>
    <h2 className={jost.className}></h2>
  </div>
  );
}
