import React from 'react';
import Link from "next/link";
import Image from "next/image";

const ProductCard = () => {
    return (
        <Link href={"/home/category/product/Jordan"} className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
            <Image width="100" height="100" src="/product-1.webp" className="w-full" alt="Product1"/>
            <div className="p-4 text-black/[0.9]">
                <h1 className="text-lg font-medium">Product Name</h1>

                {/* PRICE AND DISCOUNT START*/}
                <div className="flex items-center text-black/[0.9]">
                    <p className="mr-2 text-lg font-semibold">$20.00</p>
                    <p className="text-base font-medium line-through">$25.00</p>
                    <p className="ml-auto text-base font-medium text-green-500">20% off</p>
                </div>
                {/* PRICE AND DISCOUNT END*/}
            </div>
        </Link>
    );
};

export default ProductCard;