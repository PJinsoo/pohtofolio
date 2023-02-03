import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import { Popover } from '@headlessui/react'

// 메뉴 컴포넌트

const Navbar = () => {
    // 헤더 메뉴
    const menus = [
        { title: 'About Me', href: '' },
        { title: '메뉴2', href: '' },
        { title: '메뉴3', href: '' },
    ]

    // 화면 크기 감지
    const [width, setWidth] = useState(
        // window 객체는 Next.js의 SSR 과정에서 찾을 수 없기 때문에 typeof로 존재 판단 후 작업 수행
        typeof window != 'undefined' ? window.innerWidth : 0)

    // 화면 크기를 감지할 동안 걸어줄 로딩
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        width != undefined && setLoading(false)
    }, [width])

    // 화면 크기 저장
    const screenResize = () => {
        setWidth(window?.innerWidth)
    }

    // 페이지가 그려질 때 마다 화면 크기 다시 저장
    useEffect(() => {
        window.addEventListener("resize", screenResize)
        return () => {
            window.removeEventListener("resize", screenResize)
        }
    }, [])

    // 모바일 메뉴 변수
    const [mobileMenu, setMobileMenu] = useState(false)

    // 모바일 메뉴 On/Off 트리거
    const viewMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    return (
        <div>
            {/* width 값을 가져오는 동안 로딩을 걸어주어 에러방지 */}
            {width > 640 && !isLoading
                // 일반적인 웹 브라우저 화면에서의 메뉴
                ? (<div className="space-x-10">
                    {/* 메뉴 수 만큼 메뉴 출력 */}
                    {menus?.map((menu) => (
                        <Link href={menu.href}>
                            <span className="text-sm font-semibold">
                                {menu.title}
                            </span>
                        </Link>))}
                    </div>)

                // 모바일 화면에서의 메뉴(햄버거 버튼)
                : (
                    <nav>
                        <button onClick={viewMobileMenu} className={`${mobileMenu && 'bg-orange-400 text-white'} p-3 rounded-lg border hover:bg-orange-500 hover:text-white`}>
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                            </svg>
                        </button>
                        <Popover className=''>
                            <Popover.Button className="absolute">
                                <div className={`${ mobileMenu ? '' : 'hidden'} 
                                        mt-2 px-10 py-5 grid shadow-lg border-2 border-gray-300 rounded-lg space-y-8 w-full bg-gray-50
                                `}>
                                    {menus?.map((menu) => (
                                        <Link href={menu.href}>
                                            <span className="text-lg font-semibold text-orange-400 hover:border-b-2 border-orange-500">
                                                {menu.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </Popover.Button>
                        </Popover>
                    </nav>
                )
            }
        </div>
    )

}

export default Navbar