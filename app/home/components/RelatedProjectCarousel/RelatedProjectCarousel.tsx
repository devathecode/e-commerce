"use client";
import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import {BiArrowBack} from "react-icons/bi";
import ProductCard from "@/app/home/components/ProductCard/ProductCard";
import dynamic from "next/dynamic";

const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false });

const items = [
    <ProductCard key={1}/>,
    <ProductCard key={2}/>,
    <ProductCard key={3}/>,
    <ProductCard key={4}/>,
    <ProductCard key={5}/>,
    <ProductCard key={6}/>,
];
const RelatedProjectCarousel = () => {
    return (
        <div >
            <AliceCarousel
                items={items}
                key="related-project"
                responsive={{
                    0: { items: 1 },
                    568: { items: 2 },
                    1024: { items: 3 },
                }}
                controlsStrategy="responsive"
                autoPlay
                autoPlayInterval={5000}
                animationType="fadeout"
                disableDotsControls={true}
                disableButtonsControls={false}
                renderPrevButton={({ isDisabled }) => {
                    return <div className="absolute top-48 left-1 bottom-0 w-[30px] md:w-[50px] h-[30px]
                                    md:h-[50px] bg-black/[0.3] rounded-full z-10 flex items-center justify-center
                                    cursor-pointer hover:opacity-90">
                        <BiArrowBack className="text-sm md:text-lg" />
                    </div>
                }}
                renderNextButton={({ isDisabled }) => {
                    return <div className="absolute top-48 right-1 bottom-0 w-[30px] md:w-[50px] h-[30px]
                                    md:h-[50px] bg-black/[0.3] rounded-full z-10 flex items-center justify-center
                                    cursor-pointer hover:opacity-90">
                        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                    </div>
                }}
                infinite
            />
        </div>
    );
};

export default RelatedProjectCarousel;