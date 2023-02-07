import PageSize from "@/utility/page-size"
import Image from "next/image";
import Link from "next/link";

// 프로젝트 소개는 계속 반복되는 코드기 때문에 컴포넌트로 분리

interface ProjectProps {
    img: any,           // 프로젝트 이미지
    title: string,      // 프로젝트 제목
    date: string,       // 진행 날짜
    language?: string,  // 웹 개발물이 아닐 경우 사용
    DB?: string,        // DB 써야하면 ㄱㄱ
    front?: string,     // 프론트엔드
    back?: string,      // 백엔드
    github?: string,    // 깃허브 주소
    // 프로젝트 설명이 들어갈 TSX 데이터
    children: React.ReactNode;
}

const ProjectTemplate = ({
    img, title, date, language, DB, front, back, github, children
} : ProjectProps) => {
    const pageSize = PageSize()
    
    return (
        <div className='w-auto h-auto mt-4 mb-10 grid border rounded-lg shadow-md p-4 bg-gray-50'>
            <span className="text-center text-2xl font-bold mt-4">{title}</span>
            <span className="text-center text-xm text-gray-500 mb-4">{date}</span>
                <div className={`${pageSize >= 1000 ? 'grid grid-cols-2 space-x-4' : 'space-y-4'}`}>
                    <div className='flex justify-center'>
                        <Image src={img} alt='projectimg' width={1000} height={100}/>
                    </div>
                    <div className="mt-4 text-gray-700">
                        <div>
                            {children}
                        </div>
                        <hr className="border border-gray-300 m-6"/>
                        
                        <div>
                            {language && (
                                <div className="grid grid-cols-2">
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span className="text-lg font-semibold text-gray-600">Language</span>
                                </div>
                                <span className="font-bold text-gray-800">{language}</span>
                            </div>)}

                            {DB && (
                                <div className="grid grid-cols-2">
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span className="text-lg font-semibold text-gray-600">DataBase</span>
                                </div>
                                <span className="font-bold text-gray-800">{DB}</span>
                            </div>)}

                            {front && (
                            <div className="grid grid-cols-2">
                                    <div className="flex space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        <span className="text-lg font-semibold text-gray-600">Frontend</span>
                                    </div>
                                    <span className="font-bold text-gray-800">{front}</span>
                                </div>)}

                            {back && (
                            <div className="grid grid-cols-2">
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span className="text-lg font-semibold text-gray-600">Backend</span>
                                </div>
                                <span className="font-bold text-gray-800">{back}</span>
                            </div>)}

                            {github && (
                                <div className="grid grid-cols-2">
                                    <div className="flex space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        <span className="text-lg font-semibold text-gray-600">GitHub</span>
                                    </div>
                                    <Link href={github!=undefined ? github : ''} target="blank">
                                        <span className="font-bold hover:underline text-gray-800">바로가기</span>
                                    </Link>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProjectTemplate