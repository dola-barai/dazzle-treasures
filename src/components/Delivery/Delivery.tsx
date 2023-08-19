import Shipping from '../../.././public/shipping.png'
import Image from "next/image"

export default function Delivery() {
    return (
        <div>
            <div className="stats w-full bg-[#ECCDB4] rounded-none px-20">

                <div className="stat">

                    <div className="stat-figure text-secondary">
                        <Image
                            src={Shipping}
                            className="inline-block w-8 h-8 stroke-current"
                            alt="Picture of Iphone"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="stat-title text-xl text-black">FREE SHIPPING</div>
                    <div className="stat-desc">For orders over $50</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-xl text-black">OFFICIAL DISCOUNTS</div>
                    <div className="stat-desc">Save Big on next product</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-xl text-black">24/7 HELPLINE</div>
                    <div className="stat-desc">Care till the end</div>
                </div>

            </div>
        </div>
    )
}