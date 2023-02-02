import Head from "next/head";
import React, { Fragment } from "react";
import Header from "./header"

// 레이아웃 컴포넌트

interface LayoutProps {
    hasHeader?: boolean;
    hasFooter?: boolean;
    children: React.ReactNode;
}
export default function Layout({
    hasHeader = true,
    //hasFooter = true,
    children
}:LayoutProps){
    return(
        <div className="w-full h-full bg-neutral-50">
            <Head>
                {/* 웹 페이지 타이틀 */}
                <title>JinSoo's Photofolio</title>
                {/* 웹 페이지 아이콘 */}
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>

            <Header/>
            
            <div className="bg-neutral-50 px-28 md:px-52 mt-10">
                {children}
            </div>
            
            {/* <Footer/> */}
        </div>
    )
    
}
