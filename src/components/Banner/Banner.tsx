import Image from "next/image"
import Iphone from '../../.././public/iin.gif'

export default function Banner() {
    return (
        <div>
            <div className="hero min-h-screen bg-slate-50"  >
                <div className="hero-content flex-col lg:flex-row-reverse gap-9">
                    <Image
                        src={Iphone}
                        className="mt-8"
                        alt="Picture of Iphone"
                        width={500}
                        height={500}
                    />
                    <div className="">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold"></h1>
                            <p className="mb-7 font-serif text-7xl">Photo modern <br /> smartphone with <br /> a smoke in <br /> perspective view</p>
                            <button className="btn btn-error text-black px-12 hover:bg-blue-800 hover:text-white lowercase text-xl rounded-full">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

;