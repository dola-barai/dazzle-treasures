import Banner from "@/Sections/Banner/Banner";
import FeatureItems from "@/Sections/FeatureItems/FeatureItems";
import Heading from "@/Sections/Heading/Heading";
import Navbar from "@/Sections/Navbar/Navbar";
import Sponsor from "@/Sections/Sponsor/Sponsor";


export default function Home() {
  return (
    <main className="w-screen">
         <Heading></Heading>
         <Navbar></Navbar>
         <Banner></Banner>
         <Sponsor></Sponsor>
         <FeatureItems></FeatureItems>
    </main>
  )
}
