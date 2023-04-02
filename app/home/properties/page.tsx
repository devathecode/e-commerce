import React from 'react';
import Cityautocomplete from "@/app/home/components/cityautocomplete/Cityautocomplete";
import Image from "next/image";

const Page = () => {
    return (
        <div className="px-2 sm:px-12 2xl:px-40 py-20">
            <h1 className="uppercase font-mono tracking-widest font-bold text-3xl text-center mb-4">properties</h1>
            <div className="grid grid-cols-12 gap-y-10">
                <div className="col-span-12">
                    <Cityautocomplete/>
                </div>
                <div className="col-span-12">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4 relative cursor-pointer group overflow-hidden">
                            <Image width="800" height="600" src="/images/main-img.jpeg" alt="image 1" className="w-full h-auto group-hover:scale-150 transition-all ease-in-out duration-700"/>
                            <div className="absolute bottom-0 w-full text-center bg-white bg-opacity-75 py-2 hidden group-hover:block transition-all ease-in-out duration-1000">
                                <p className="text-gray-800 font-bold uppercase">gorakhpur</p>
                            </div>
                        </div>
                        <div className="col-span-4 relative cursor-pointer group overflow-hidden">
                            <Image width="800" height="600" src="/images/main-img.jpeg" alt="image 1" className="w-full h-auto group-hover:scale-150 transition-all ease-in-out duration-700"/>
                            <div className="absolute bottom-0 w-full text-center bg-white bg-opacity-75 py-2 hidden group-hover:block transition-all ease-in-out duration-1000">
                                <p className="text-gray-800 font-bold uppercase">gorakhpur</p>
                            </div>
                        </div>
                        <div className="col-span-4 relative cursor-pointer group overflow-hidden">
                            <Image width="800" height="600" src="/images/main-img.jpeg" alt="image 1" className="w-full h-auto group-hover:scale-150 transition-all ease-in-out duration-700"/>
                            <div className="absolute bottom-0 w-full text-center bg-white bg-opacity-75 py-2 hidden group-hover:block transition-all ease-in-out duration-1000">
                                <p className="text-gray-800 font-bold uppercase">gorakhpur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;