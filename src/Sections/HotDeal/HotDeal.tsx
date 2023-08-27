"use client";

import Image from 'next/image';
import React from 'react';


const HotDeal = () => {
    return (
        <div className='mx-10 my-32 h-[500px]'>
            <div className='grid grid-cols-3 gap-2'>
                <div className='grid grid-rows-2 gap-2'>
                    <div className=''>
                        <Image
                            src='https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=740&t=st=1693158636~exp=1693159236~hmac=602bd806b8a56569039fe762fd814a3a074f7e275d084749bc63c8c5422b3969'
                            className='rounded-none'
                            alt="Image"
                            width={420}
                            height={200}
                        />
                    </div>
                    <div>
                        <div className="card w-[420px] h-[270px] bg-sky-100 rounded-none ">
                            <div className="card-body">
                                <h2 className="card-title text-center">NEW ARRIVALS</h2>
                                <p className='text-2xl text-orange-600'>SALE OFF 30%</p>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <video
                        width="560"
                        height="315"
                        src="static/videos/video.mp4"
                    ></video>
                </div>
                <div className='grid grid-rows-2 gap-2'>
                    <div>
                    <div className="card w-[420px] h-[270px] bg-sky-100 rounded-none ">
                            <div className="card-body">
                                <h2 className="card-title text-center">NEW ARRIVALS</h2>
                                <p className='text-2xl text-orange-600'>SALE OFF 30%</p>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src='https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?w=740&t=st=1693158841~exp=1693159441~hmac=c3a7447a5470708389feb3725632d0174889e672b3c027de35af47fce1adc976'
                            className='rounded-none'
                            alt="Image"
                            width={400}
                            height={120}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotDeal;