import React from 'react';
import Image from "next/image";
import {RiDeleteBin6Line} from "react-icons/all";

const CartItem = () => {
    return (
        <div className="grid grid-cols-12 py-5 gap-3 md:gap-5 border-b">
            {/* Image Start */}
            <div className="col-span-2">
                <Image priority={true} src="/product-1.webp" alt="" height="120" width="200"/>
            </div>
            {/* Image end */}

            <div className="col-span-10">
                <div className="grid grid-cols-12">
                    {/* PRODUCT TITLE */}
                    <div className="col-span-12 md:col-span-6 order-1 md:order-none text-lg md:text-2xl font-semibold text-black/[0.8]">
                        Jordon
                    </div>

                    {/* PRODUCT PRICE */}
                    <div className="col-span-12 md:col-span-6 order-3 md:order-none md:justify-self-end text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        MRP : &#8377;1234
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="col-span-12 order-2 md:order-none text-sm md:text-md font-medium text-black/[0.5]">
                        Jordon Sneakers
                    </div>

                    {/* Selector */}
                    <div className="order-5 md:order-none col-span-4 flex text-black/[0.5] text-sm md:text-md mt-4">
                        <div className="font-semibold">Size :</div>
                        <select name="size" id="size" className="hover:text-black cursor-pointer">
                            <option value="UK 6">UK 6</option>
                            <option value="UK 6">UK 6</option>
                            <option value="UK 6">UK 6</option>
                            <option value="UK 6">UK 6</option>
                            <option value="UK 6">UK 6</option>
                            <option value="UK 6">UK 6</option>
                            <option value="UK 6">UK 6</option>
                        </select>
                    </div>

                    {/* Selector */}
                    <div className="order-5 md:order-none col-span-4 justify-self-start flex text-black/[0.5] text-sm md:text-md mt-4">
                        <div className="font-semibold">Quantity :</div>
                        <select name="size" id="size" className="hover:text-black cursor-pointer">
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                        </select>
                    </div>

                    <div className="order-5 md:order-none col-span-4 flex sm:justify-self-end text-black/[0.5] text-sm md:text-md mt-4">
                        <RiDeleteBin6Line
                            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;