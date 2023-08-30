"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

interface Device {
    id: number;
    device_name: string;
    image: string;
}

const BestSeller = () => {
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
        <div className="my-10 px-6">
            <div>
                <h3 className="text-4xl font-semibold text-sky-900 mb-3">Best Seller</h3>
                <p className="text-base text-sky-700">Choose your necessary products</p>
            </div>
            <div className="grid grid-cols-4 gap-3 my-6 ">
                {devices.map(device => (
                    <div key={device.id} className="">
                        <div className="card h-[300px] bg-cyan-50 hover:bg-rose-100 border border-sky-100 rounded-none transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <figure className="px-3 py-3 ">
                                <Image
                                    src={device.image}
                                    className='rounded-xl'
                                    alt="Image"
                                    width={100}
                                    height={100}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-lg font-semibold">{device.device_name}</h2>
                                <p>$300.00</p>
                                <Rating className="mb-2 pt-2" style={{ maxWidth: 80 }} value={5}  readOnly />
                                <div className="card-actions">
                                    <button className="btn btn-sm rounded-none bg-rose-300 hover:bg-sky-400 hover:text-sky-950 text-black normal-case">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSeller;