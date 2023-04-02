import React from 'react';
import Wrapper from "@/app/core/components/Wrapper/Wrapper";
import ProductCard from "@/app/home/components/ProductCard/ProductCard";
const Page = ({params}: { params: { slug: string }}) => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Running Shoes
                    </div>
                </div>
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
        </div>
    );
};

export default Page;