import Header from "../components/Header/Header";
import MenuBar from "../components/MenuBar/MenuBar";
import Hero from "../components/Hero/Hero";


export default function Home() {
  return (
<>

<Header />
<div className="h-[1px] bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.2)]"></div>


<MenuBar />

<Hero />

</>
 

  );
}
