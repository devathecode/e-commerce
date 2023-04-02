"use client"
import React, {useRef} from 'react';
import {BiArrowBack} from "react-icons/bi";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image";

const items = [
    <div key={1}>
        <Image priority={true} height="1600" width="1800" alt="slides" src="/slide-1.png" className="aspect-[16/10] md:aspect-auto object-cover"/>
        <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute
                        bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
                        text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
        </div>
    </div>,
    <div key={2}>
        <Image priority={true} height="1600" width="1800" alt="slides" src="/slide-2.png" className="aspect-[16/10] md:aspect-auto object-cover"/>
        <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute
                        bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
                        text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
        </div>
    </div>,
    <div key={3}>
        <Image priority={true} height="1600" width="1800" alt="slides" src="/slide-3.png" className="aspect-[16/10] md:aspect-auto object-cover"/>
        <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute
                        bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
                        text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
        </div>
    </div>
];

const HeroBanner = (props: any) => {
    return (
        <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
            <AliceCarousel
                mouseTracking
                autoPlay={true}
                disableDotsControls={true}
                disableButtonsControls={false}
                renderPrevButton={({ isDisabled }) => {
                    return <div className="absolute right-[31px] md:right-[50px] bottom-0 w-[30px] md:w-[50px] h-[30px]
                                    md:h-[50px] bg-black z-10 flex items-center justify-center
                                    cursor-pointer hover:opacity-90">
                                <BiArrowBack className="text-sm md:text-lg" />
                            </div>
                }}
                renderNextButton={({ isDisabled }) => {
                    return <div className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px]
                                    md:h-[50px] bg-black z-10 flex items-center justify-center
                                    cursor-pointer hover:opacity-90">
                                <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                            </div>
                }}
                items={items}/>
        </div>
    );
};

export default HeroBanner;