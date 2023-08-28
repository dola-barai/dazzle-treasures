"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react'

interface Device {
    id: number;
    device_name: string;
    image: string;
    specifications: {
      
      display: string;
      processor: string;
      memory: string;
      camera: string;
      battery: string;
      operating_system: string;
      graphics: string;
      connectivity: string;
      battery_life: string;
      charging_case: string;
      water_resistance: string;
      sound_quality: string;
      special_features: string;
      storage: string;
      max_resolution: string;
      ray_tracing: string;
      backward_compatibility: string;
      compatibility: string;
      cooling_system: string;
      energy_star: string;
      flight_time: string;
      max_speed: string;
      range: string;
      features: string;
      remote_control: string;
      format_support: string;
      smart_features: string;
      capacity: string;
    };
}

const FeatureItems = () => {
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
        <div className="my-10 mx-6">
            <div>
                <h3 className="text-4xl font-semibold text-sky-900 mb-3">Featured Categories</h3>
                <p className="text-base text-sky-700">Choose your necessary products from this feature categories.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-6 ">
                {devices.map(device => (
                    <div key={device.id} className="">
                        <div className="card h-[500px] bg-slate-50 hover:bg-cyan-100 border border-sky-100 rounded-none transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <figure className="px-3 py-3 ">
                                <Image
                                    src={device.image}
                                    className='rounded-none'
                                    alt="Image"
                                    width={280}
                                    height={100}
                                />
                            </figure>
                            <div className="card-body items-left text-left">
                                <h2 className="card-title">{device.device_name}</h2>
                                <h2 className="text-base font-semibold text-gray-700">Specifications</h2>
                                <ol className='ms-4 text-slate-600'>
                                    <li>{device.specifications.display}</li>
                                    <li>{device.specifications.processor}</li>
                                    <li>{device.specifications.memory}</li>
                                    <li>{device.specifications.camera}</li>
                                    <li>{device.specifications.battery}</li>
                                    <li>{device.specifications.operating_system}</li>
                                    <li>{device.specifications.graphics}</li>
                                    <li>{device.specifications.connectivity}</li>
                                    <li>{device.specifications.battery_life}</li>
                                    <li>{device.specifications.charging_case}</li>
                                    <li>{device.specifications.water_resistance}</li>
                                    <li>{device.specifications.sound_quality}</li>
                                    <li>{device.specifications.special_features}</li>
                                    <li>{device.specifications.storage}</li>
                                    <li>{device.specifications.max_resolution}</li>
                                    <li>{device.specifications.ray_tracing}</li>
                                    <li>{device.specifications.backward_compatibility}</li>
                                    <li>{device.specifications.compatibility}</li>
                                    <li>{device.specifications.cooling_system}</li>
                                    <li>{device.specifications.energy_star}</li>
                                    <li>{device.specifications.flight_time}</li>
                                    <li>{device.specifications.max_speed}</li>
                                    <li>{device.specifications.range}</li>
                                    <li>{device.specifications.features}</li>
                                    <li>{device.specifications.remote_control}</li>
                                    <li>{device.specifications.format_support}</li>
                                    <li>{device.specifications.smart_features}</li>
                                    <li>{device.specifications.capacity}</li>
                                </ol>
                                <div className="card-actions absolute right-0 bottom-0 ">
                                    <button className="btn btn-sm rounded-none bg-sky-700 hover:bg-sky-400 hover:text-sky-950 text-white normal-case">View All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureItems;