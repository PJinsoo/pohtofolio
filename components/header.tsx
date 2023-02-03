import { useState, useEffect } from "react";
import Link from 'next/link';
import Navbar from "./navbar";

// 헤더 컴포넌트

const Header = () => {

    return (
        // px-40 py-6
        <div className="relative flex justify-between rounded-b-xl shadow mx-auto
                        px-10 py-6 md:px-20 xl:px-40">
            <Navbar/>
            <span className="font-semibold text-2xl mt-2 md:mt-0 text-orange-500">JinSoo's Photofolio</span>
        </div>
    )
}

export default Header;