import Banner from "@/Sections/Banner/Banner";
import Heading from "@/Sections/Heading/Heading";
import Navbar from "@/Sections/Navbar/Navbar";
import Shipping from "@/Sections/Shipping/Shipping";

export default function Home() {
  return (
    <main className="w-screen">
         <Heading></Heading>
         <Navbar></Navbar>
         <Banner></Banner>
         <Shipping></Shipping>
    </main>
  )
}
