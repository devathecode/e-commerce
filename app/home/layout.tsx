"use client";

import React, {useState} from 'react';
import Image from "next/image";
import Header from "@/app/core/components/Header/Header";
import Footer from "@/app/core/components/Footer/Footer";

export default function HomeLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}