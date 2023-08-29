"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Reviews = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    const reviews = [
        {
            "author_name": "John Doe",
            "image": "https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-holding-gesture_1298-110.jpg?w=740&t=st=1693155150~exp=1693155750~hmac=5a7f064990e11f58d70b552dd5407d33299f3395e688feb473e19533697ddffe",
            "review": "I purchased a smartphone from Dazzle Treasures, and I'm amazed by the quality and features. The customer service was exceptional too!",
            "rating": 5
        },
        {
            "author_name": "Jane Smith",
            "image": "https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?w=740&t=st=1693155189~exp=1693155789~hmac=83c1ded8e2d5f99d197eca38a1aaf435d32723f3580f533d8f657efc42aca702",
            "review": "Dazzle Treasures offers a wide range of electronic devices. I got a great deal on a smartwatch, and it works perfectly.",
            "rating": 4.5
        },
        {
            "author_name": "Meheroon Johnson",
            "image": "https://img.freepik.com/premium-photo/dreaming-big-trip-top-view-beautiful-young-woman-eyewear-lying-hardwood-floor-smiling-while-suitcase-camera-laying-near-her_425904-22929.jpg?size=626&ext=jpg&ga=GA1.2.1810501517.1673795518&semt=ais",
            "review": "As a tech enthusiast, I'm impressed by the variety of gadgets at Dazzle Treasures. The staff is knowledgeable and helped me find the right product.",
            "rating": 4
        },
        {
            "author_name": "Emily Brown",
            "image": "https://img.freepik.com/free-photo/blonde-young-writing-notebook-with-pencil_23-2147862877.jpg?size=626&ext=jpg&ga=GA1.2.1810501517.1673795518&semt=ais",
            "review": "I had an amazing shopping experience at Dazzle Treasures. The staff was friendly, and I found a laptop that exceeded my expectations.",
            "rating": 5
        }
    ]

    return (
        <div className='my-20 mx-10'>
            <div className='text-center'>
                <h3 className="text-4xl font-semibold text-sky-900 mb-3">Testimonials</h3>
                <p className="text-base text-sky-700 mb-12">From our valuable customer</p>
            </div>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index}>
                        <div className="card bg-base-100">
                            <figure>
                                <Image
                                    src={review.image}
                                    className='rounded-full'
                                    alt="Image"
                                    width={80}
                                    height={80}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                            <Rating className="mb-2 pt-2" style={{ maxWidth: 80 }} value={review.rating} readOnly />
                                <p className='text-base italic mb-2'>"{review.review}"</p>
                                <h2 className="text-lg italic text-orange-700">{review.author_name}</h2>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Reviews;
