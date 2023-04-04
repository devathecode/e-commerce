"use client"
import React, {useState} from 'react';
import Image from "next/image";

const ProductDetailsCaraousel = () => {
    const imageArr = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'];
    const [selected, setSelected] = useState(0);
    return (
        <div className="grid grid-cols-12 gap-1">
            <div
                className="col-span-12 md:col-span-1 flex flex-row md:flex-col gap-2 order-last md:order-first overflow-x-scroll max-w-screen">
                {imageArr.map((item, index) => {
                    return <Image key={index}
                                  priority={true}
                                  height="70"
                                  width="100"
                                  alt="slides"
                                  src={`/${item}.png`}
                                  onClick={() => {
                                      setSelected(index)
                                  }}
                                  className={`cursor-pointer mb-1 h-auto md:h-[3.8rem] w-fit md:w-[4.7rem] rounded-lg ${selected === index && 'border-2 border-black'}`}/>
                })}
            </div>
            <div className="col-span-12 md:col-span-11 md:order-last order-first">
                <Image key={1} priority={true} height="1200" width="1400" alt="slides"
                       src={`/${imageArr[selected]}.png`}
                       className="w-fit md:w-[520px] h-auto md:h-[600px] rounded-lg"/>
            </div>
        </div>
    );
};

export default ProductDetailsCaraousel;