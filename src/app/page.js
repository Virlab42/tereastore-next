import Image from "next/image";
import './main.scss'
import Hero from "../../components/Home/Hero/Hero";
import Poster from "../../components/Home/Poster/Poster";
import Preview from "../../components/Home/Preview/Preview";
import About from "../../components/Home/About/About";
import New from "../../components/Home/New/New";  
import Exclusive from "../../components/Home/Exclusive/Exclusive";  
import Reviews from "../../components/Home/Reviews/Reviews";

export const metadata = {
  title: "IQOS ILUMA и TEREA в Москве - IqosIluma",
  description: "IQOS Iluma и стики Terea недорого и с доставкой по всей России. Стики Terea для IQOS Iluma — попробуйте и откройте для себя новый уровень наслаждения!",
  alternates: {
    canonical: `https://iqos-iluma.com`
  },
  openGraph: {
      title: `IQOS ILUMA и TEREA в Москве - IqosIluma`,
      description: `IQOS Iluma и стики Terea недорого и с доставкой по всей России. Стики Terea для IQOS Iluma — попробуйте и откройте для себя новый уровень наслаждения!`,
      url: `https://iqos-iluma.com`,
      images: [
          {
              url: `/favicon/web-app-manifest-512x512`,
              alt: `IqosIluma`,
          },
      ],
  },
};

export default function Home() {
  return (
    <>
      <h1 className="hidden-h1">IQOS Iluma и стики Terea недорого и с доставкой по всей России</h1>
      <Hero />
      <Poster />
      <Preview />
      <Exclusive/>  
      <New/>
      <About />
      <Reviews />
    </>
  );
}
