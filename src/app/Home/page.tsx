import Banner from "@/Sections/Banner/Banner";
import FeatureItems from "@/Sections/FeatureItems/FeatureItems";
import Footer from "@/Sections/Footer/Footer";
import Heading from "@/Sections/Heading/Heading";
import HotDeal from "@/Sections/HotDeal/HotDeal";
import Navbar from "@/Sections/Navbar/Navbar";
import Reviews from "@/Sections/Reviews/Reviews";
import Sponsor from "@/Sections/Sponsor/Sponsor";
import Subscribe from "@/Sections/Subscribe/Subscribe";
import WhyDazzle from "@/Sections/WhyDazzle/WhyDazzle";



export default function Home() {
  return (
    <main className="">
         <Heading></Heading>
         <Navbar></Navbar>
         <Banner></Banner>
         <Sponsor></Sponsor>
         <FeatureItems></FeatureItems>
         <HotDeal></HotDeal>
         <WhyDazzle></WhyDazzle>
         <Reviews></Reviews>
         <Subscribe></Subscribe>
         <Footer></Footer>
    </main>
  )
}
