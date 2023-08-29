"use client";

import Image from 'next/image';

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const HotDeal = () => {
    const [flip, setFlip] = useState(false);
    return (
        <div className='mx-10 my-32' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/modern-office-desk-composition-with-technological-device_23-2147916715.jpg?w=740&t=st=1693332292~exp=1693332892~hmac=7d785dc73d722b5f7ee78c10f7f717e35d7c5785d51ac5b331b4c7f2c5402e9f)' }}>
            <div className='grid grid-cols-3 gap-2'>
                <div className='grid grid-rows-2 gap-2'>
                    <ReactCardFlip isFlipped={flip}
                        flipDirection="horizontal">
                        <div className='' onMouseEnter={() => setFlip(!flip)}>
                            <Image
                                src='https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=740&t=st=1693158636~exp=1693159236~hmac=602bd806b8a56569039fe762fd814a3a074f7e275d084749bc63c8c5422b3969'
                                className='rounded-none'
                                alt="Image"
                                width={420}
                                height={200}
                            />
                        </div>
                        <div className='' onMouseEnter={() => setFlip(!flip)}>
                            <Image
                                src='https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309649.jpg?w=740&t=st=1693331856~exp=1693332456~hmac=2f90b4754d8842633ac175afa9a4aea4ffaff8d263b247b0bb7ee7d9da988db7'
                                className='rounded-none'
                                alt="Image"
                                width={420}
                                height={200}
                            />
                        </div>
                    </ReactCardFlip>

                    <div>
                        <div className="card w-[420px] h-[280px] rounded-none " style={{
                            backgroundImage: `url('https://img.freepik.com/free-photo/modern-home-office-with-illuminated-computer-monitor-generative-ai_188544-19441.jpg?w=826&t=st=1693288936~exp=1693289536~hmac=06017a118a14f8f752f0f5899682e44833daa90a74fb7eee53f978e8056b6fbd')`,
                            backgroundSize: 'cover',
                        }}>
                            <div className="card-body text-left">
                                <h2 className="card-title text-orange-400">ELECTRONICS</h2>
                                <p className='text-base text-white mb-3'>Hot devices, Latest trending</p>
                                <button className="btn bg-orange-500 hover:text-orange-700 border-0 rounded-md text-white normal-case w-[120px] btn-sm">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-12'>
                    <video width="319" controls>
                        <source src="/video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='grid grid-rows-2 gap-2'>
                    <div>
                        <div className="card w-[420px] h-[280px]  rounded-none " style={{
                            backgroundImage: `url('https://img.freepik.com/premium-photo/glass-smartphone-modern-mobile-device-3d-illustration-render_113524-390.jpg?w=826')`,
                            backgroundSize: 'cover',
                        }}>
                            <div className="card-body text-left my-16">
                                <h2 className="card-title text-white text-center normal-case">NEW ARRIVALS</h2>
                                <p className='text-base text-orange-400 mb-3'>Super discount for your first purchase</p>
                                <button className="btn bg-orange-500 rounded-md hover:text-orange-700 border-0 text-white normal-case w-[120px] btn-sm">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ReactCardFlip isFlipped={flip}
                        flipDirection="horizontal"> 
                            <Image
                                src='https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?w=740&t=st=1693158841~exp=1693159441~hmac=c3a7447a5470708389feb3725632d0174889e672b3c027de35af47fce1adc976'
                                className='rounded-none'
                                alt="Image"
                                width={420}
                                height={70}
                                onMouseEnter={() => setFlip(!flip)}
                            />
                            <Image
                                src='https://img.freepik.com/free-photo/high-angle-controller-vr-glasses_23-2149829130.jpg?w=740&t=st=1693332983~exp=1693333583~hmac=c47d49f4ae1968f9c06adf709062ba00838e555e6b7932f0b18abb7a3480b09a'
                                className='rounded-none'
                                alt="Image"
                                width={420}
                                height={70}
                                onMouseEnter={() => setFlip(!flip)}
                            />
                        </ReactCardFlip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotDeal;