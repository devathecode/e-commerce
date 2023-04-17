import React from 'react';
import Head from "next/head";
import Image from "next/image";

const Page = () => {
    return (
        <>
            <Head>
                <title>About Us | Nike Shoes</title>
            </Head>
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 md:flex md:flex-row-reverse md:items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <Image
                            priority={true}
                            height="1600"
                            width="1800"
                            alt="slides"
                            src="/slide-2.png"
                            className="aspect-[16/10] md:aspect-auto object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 ml-3">
                        <h1 className="text-3xl font-bold mb-8">About Us</h1>
                        <p className="mb-4">
                            Nike Shoes is a leading retailer of athletic footwear, apparel, and accessories. Our mission is to inspire and empower athletes around the world with innovative products and exceptional service.
                        </p>
                        <p className="mb-4">
                            Since our founding in 1964, we have been at the forefront of the sports industry, constantly pushing the boundaries of design and technology to help athletes perform at their best. With a commitment to sustainability and social responsibility, we strive to make a positive impact on the communities we serve.
                        </p>
                        <p className="mb-4">
                            Thank you for choosing Nike Shoes. We look forward to helping you achieve your athletic goals.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;