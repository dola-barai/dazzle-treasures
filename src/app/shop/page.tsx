"use client";
"use";
import Navbar from '@/Sections/Navbar/Navbar';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Footer from '@/Sections/Footer/Footer';

const page = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const [devices, setDevices] = useState<Device[] | null>(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('featuredData.json')
            .then((res) => res.json())
            .then((devices) => {
                setDevices(devices)
                setLoading(false)
                console.log(devices);
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!devices) return <p>No profile data</p>

    return (
        <div>
            <Navbar></Navbar>
            <div className="my-10 px-6">
                <div className='grid grid-cols-3 gap-4 mx-20 '>
                    <div>
                        <h3 className="text-4xl font-semibold text-sky-900 mb-3">Shop</h3>
                        <p className="text-base text-sky-700">Find Your Perfect Purchase</p>
                    </div>
                    <div className=''>
                        <input
                            type="text"
                            placeholder="Search your products..."
                            value={inputValue}
                            onChange={handleChange}
                            className='input input-bordered h-[52px] w-full'
                        />
                    </div>
                    <div className='flex justify-end gap-4'>
                        <div className="indicator">
                            <span className="indicator-item badge badge-secondary"></span>
                            <AiOutlineShoppingCart className='h-16 w-16'></AiOutlineShoppingCart>
                        </div>
                        <div>
                            <p className='text-xl font-medium'>Your Cart</p>
                            <p className='text-xl font-medium'>$0.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-5 mx-20 '>
                <div>
                    <div className='border border-sky-100 mt-6 rounded-lg'>
                        <h2 className='text-xl font-semibold text-sky-900 mb-3 px-6 rounded-tl-lg rounded-tr-lg py-3 bg-sky-300'>PRODUCTS</h2>
                        <div className="grid grid-cols-1 gap-10 mb-20 mx-10">
                            {devices.map(device => (
                                <div key={device.id} className="">
                                    <div className="card h-[100px] ">
                                        <div className='flex gap-3'>
                                            <figure className="px-3 py-3 ">
                                                <Image
                                                    src={device.image}
                                                    className='rounded-xl'
                                                    alt="Image"
                                                    width={120}
                                                    height={80}
                                                />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="text-xl font-semibold">{device.device_name}</h2>
                                                <Rating className="" style={{ maxWidth: 80 }} value={5} readOnly />
                                                <p className=''>$300.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 col-span-2 gap-4 mt-6 mb-12">
                    {devices.map(device => (
                        <div key={device.id} className="">
                            <div className="card h-[400px] border border-sky-100 hover:border-sky-600 rounded-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                <figure className="px-3 py-3 ">
                                    <Image
                                        src={device.image}
                                        className='rounded-xl'
                                        alt="Image"
                                        width={200}
                                        height={200}
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <Rating className="mb-2 pt-2" style={{ maxWidth: 80 }} value={5} readOnly />
                                    <h2 className="text-2xl font-semibold">{device.device_name}</h2>
                                    <p className='text-lg'>$300.00</p>

                                    <div className="card-actions">
                                        <button className="btn btn-sm rounded-xl p-2 bg-sky-400 hover:text-sky-950 text-white normal-case">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default page;