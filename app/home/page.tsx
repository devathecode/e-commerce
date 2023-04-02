import React from 'react';
import Wrapper from "@/app/core/components/Wrapper/Wrapper";
import HeroBanner from "@/app/core/components/HeroBanner/HeroBanner";
import ProductCard from "@/app/home/components/ProductCard/ProductCard";


const home = () => {
    return (
        <main>
            <HeroBanner/>
            <Wrapper>
                {/* Heading and Paragraph start*/}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>
                    <div className="text-md md:text-lg">
                        A lightweight Nike ZoomX midsole is combined with increased stack heights
                        to help provide cushioning during extended stretches of running.
                    </div>
                </div>
                {/* Heading and Paragraph end*/}

                {/* Product grid start*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
                {/* Product grid end*/}
            </Wrapper>
        </main>
    );
};

export default home;