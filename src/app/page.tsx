import Banner from "@/components/Banner/Banner"
import Delivery from "@/components/Delivery/Delivery"
import Navbar from "@/components/Navbar/Navbar"

export default function Home() {
  return (
    <main className="text-3xl font-bold">
           <Navbar></Navbar>
           <Banner></Banner>
           <Delivery></Delivery>
            <p>Hello Next.js</p>
    </main>
  )
}
