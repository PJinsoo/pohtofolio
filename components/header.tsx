import { Fragment } from "react";
import Link from 'next/link';

// 헤더 컴포넌트

// 창 크기가 줄어들면 메뉴를 지워주고 햄버거 버튼을 표시하는 식으로 바꾸고 싶음

const Header = () => {
    // 헤더 메뉴
    const menus = [
        {title: '1', href: ''},
        {title: '2', href: ''},
        {title: '3', href: ''},
    ]

    return (
        <div className="bg-fixed flex items-center justify-between rounded-b-xl shadow mx-auto px-40 py-6">
                <span className="font-semibold text-2xl">JinSoo's Photofolio</span>
                <div className="lg:space-x-20">
                    {/* 메뉴 수 만큼 메뉴 그리기 */}
                    {menus?.map((menu) => (
                        <Link href={menu.href}>
                            <span className="">
                                {menu.title}
                            </span>
                        </Link>
                    ))}
                </div>
        </div>
    )
}

export default Header;