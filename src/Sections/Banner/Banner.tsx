import Image from 'next/image'
import logo from './../../../public/logo1.png'

const Banner = () => {
    return (
        <div>
            <main>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/laptop-with-blank-paper-headphones_23-2148036930.jpg?w=740&t=st=1693063166~exp=1693063766~hmac=264e19f4873f3a3d0cd26832b35300f8e1da4d81a859c92b43b4ceab5988a490")` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-left text-neutral-content">
                                <div className="">
                                    <h1 className="mb-5 md:text-6xl font-semibold font-serif">Enhance, Protect, and Personalize: <br /> Welcome to <span className="text-orange-700 text-7xl">Dazzle Treasures</span></h1>
                                    <p className="md:text-xl">Personalize Your Smartphone with Our Stylish Accessories Collection</p>
                                    <div className="mt-4">
                                        <button className="btn bg-orange-700 text-white hover:bg-purple-600 me-3 hover:border-purple-600">Shop Now</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle border-0">❮</a>
                            <a href="#slide2" className="btn btn-circle border-0">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/usb-charging-cables-smartphone_35712-505.jpg?w=740")` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-left text-neutral-content">
                                <div className="">
                                    <h1 className="mb-5 md:text-6xl font-semibold font-serif">Elevate Your <span className="text-orange-700">Mobile Experience: </span> <br /> Discover our Accessory Collection</h1>
                                    <p className="md:text-xl">Experience Enhanced Convenience with Our Cutting-edge Additions</p>
                                    <div className="mt-4">
                                        <button className="btn bg-orange-700 text-white hover:bg-purple-600 me-3 hover:border-purple-600">Shop Now</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle border-0">❮</a>
                            <a href="#slide3" className="btn btn-circle border-0">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/top-view-set-gadgets-purple-neon-light-blue-background-smartphone-smartwatch-wireless-headphones-wooden-table-copyspace-your-advertising-tech-modern-gadgets_155003-25552.jpg?w=740&t=st=1693063291~exp=1693063891~hmac=50e88e5d8ec02d4e26b459a8226bd97795f1568b279e766d42978a8329a74fea")` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-left text-neutral-content">
                                <div className="">
                                    <h1 className="mb-5 md:text-6xl font-semibold font-serif">Gadgets Enhanced: Unveiling <br /> the Best  <span className="text-orange-700">Mobile Accessories</span></h1>
                                    <p className="md:text-xl">Experience Enhanced Convenience with Our Cutting-edge Additions</p>
                                    <div className="mt-4">
                                        <button className="btn bg-orange-700 text-white hover:bg-purple-600 me-3 hover:border-purple-600">Shop Now</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle border-0">❮</a>
                            <a href="#slide1" className="btn btn-circle border-0">❯</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Banner;