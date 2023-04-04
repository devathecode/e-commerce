import React from 'react';
import Wrapper from "@/app/core/components/Wrapper/Wrapper";
import ProductDetailsCaraousel from "@/app/home/components/ProductDetailsCaraousel/ProductDetailsCaraousel";
import {IoMdHeartEmpty} from "react-icons/io";
import RelatedProjectCarousel from "@/app/home/components/RelatedProjectCarousel/RelatedProjectCarousel";

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

                        {/* PRODUCT SIZE RANGE START*/}
                        <div className="mb-10">
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>

                            {/* SIZE START */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="border rounded-md text-center py-5
                            font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-5
                            font-medium hover:border-black cursor-pointer">
                                    UK 6.5
                                </div>
                                <div className="border rounded-md text-center py-5
                            font-medium hover:border-black cursor-pointer">
                                    UK 7
                                </div>
                                <div className="border rounded-md text-center py-5
                            font-medium hover:border-black cursor-pointer">
                                    UK 8
                                </div>
                                <div className="border rounded-md text-center py-5
                            font-medium hover:border-black cursor-pointer">
                                    UK 8.5
                                </div>
                                <div className="border rounded-md text-center py-5
                            font-medium hover:border-black cursor-pointer">
                                    UK 9
                                </div>
                                <div className="border rounded-md text-center py-5
                            font-medium hover:border-black cursor-pointer">
                                    UK 9.5
                                </div>
                                <div className="border rounded-md text-center py-5
                            font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                    UK 10
                                </div>
                                <div className="border rounded-md text-center py-5
                            font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                    UK 10.5
                                </div>
                                <div className="border rounded-md text-center py-5
                            font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                    UK 11
                                </div>
                            </div>
                            {/* SIZE END */}

                            {/* ERROR MSG START*/}
                            <div className="text-red-600 mt-1">
                                Size Selection is required
                            </div>
                            {/* ERROR MSG END*/}
                        </div>
                        {/* PRODUCT SIZE RANGE END*/}

                        <button className="w-full py-4 rounded-full bg-black text-white
                        text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Add to Cart
                        </button>

                        <button className="w-full py-4 rounded-full border border-black
                        text-lg font-medium transition-transform active:scale-95 flex
                        items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Wishlist
                            <IoMdHeartEmpty size={20}/>
                        </button>

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="text-md mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, autem, commodi
                                deserunt dolore fuga illum labore minima molestias nobis placeat recusandae, repellendus
                                similique tempora! Aspernatur enim incidunt laudantium totam vel?
                            </div>
                            <div className="text-md mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, autem, commodi
                                deserunt dolore fuga illum labore minima molestias nobis placeat recusandae, repellendus
                                similique tempora! Aspernatur enim incidunt laudantium totam vel?
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12">
                        <RelatedProjectCarousel/>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Page;