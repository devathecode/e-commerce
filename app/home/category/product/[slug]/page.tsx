import React from 'react';
import Wrapper from "@/app/core/components/Wrapper/Wrapper";
import ProductDetailsCaraousel from "@/app/home/components/ProductDetailsCaraousel/ProductDetailsCaraousel";

const Page = () => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12 lg:col-span-7">
                        <ProductDetailsCaraousel/>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        {/* PRODUCT TITLE */}
                        <p className="font-semibold mb-2 text-[34px]">
                            Jordon Retro 6 G
                        </p>

                        {/* PRODUCT SUBTITLE */}
                        <p className="text-lg font-semibold mb-5">
                            Men&apos;s Golf Shoes
                        </p>

                        {/* PRODUCT PRICE */}
                        <p className="text-lg font-semibold">
                            MRP : $ 19,695.00
                        </p>

                        <p className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </p>

                        <p className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </p>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Page;