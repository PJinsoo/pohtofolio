import Image from "next/image";
import profileImg from "../images/profileImg.jpg" // 프로필사진
import Title from "./title";

// About Me에 대한 컴포넌트

export default function AboutMe() {
    return (
        <div>
            {/* 메뉴 제목 컴포넌트 */}
            <Title
                title="About Me"
                summary="기록하고 회고하며 성장하는 개발자입니다."
                icon="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

            {/* 내 정보가 들어갈 공간 */}
            <div className="mt-4 grid sm:grid-cols-1 lg:grid-cols-2 space-y-2 lg:space-y-0">
                {/* 내 사진자리 | src지우면 임시 배경으로 */}
                <Image src={profileImg} alt="profileImg" width={300} height={350}
                    className="bg-slate-300" />

                {/* 텍스트 정보 */}
                <div className="rounded-md xl:-ml-28 grid p-3">
                    {/* 간단한 자기소개 */}
                    <p className="">자기소개가 들어갈 자리</p>

                    {/* 이름, 생년월일, 주소지, 연락처, 학력 등등 */}
                    <div className="mt-4 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 space-y-6 lg:space-y-0">
                        {/* 이름 */}
                        <div className="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div className="flex flex-col -mt-1">
                                <span className="text-lg font-semibold text-gray-600">이름</span>
                                <span className="">박진수</span>
                            </div>
                        </div>
                        {/* 생년월일 */}
                        <div className="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                            </svg>
                            <div className="flex flex-col -mt-1">
                                <span className="text-lg font-semibold text-gray-600">생년월일</span>
                                <span className="">99.04.21</span>
                            </div>
                        </div>
                        {/* 주소지 */}
                        <div className="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <div className="flex flex-col -mt-1">
                                <span className="text-lg font-semibold text-gray-600">주소지</span>
                                <span className="">인천</span>
                            </div>
                        </div>
                        {/* 연락처 */}
                        <div className="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            <div className="flex flex-col -mt-1">
                                <span className="text-lg font-semibold text-gray-600">연락처</span>
                                <span className="text-sm">010-5488-8398</span>
                            </div>
                        </div>
                        {/* 학력 */}
                        <div className="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                            </svg>
                            <div className="flex flex-col -mt-1">
                                <span className="text-lg font-semibold text-gray-600">학력</span>
                                <span className="text-sm lg:text-md">인하공업전문대학</span>
                                <span className="text-sm lg:text-center">(컴퓨터정보과)</span>
                            </div>
                        </div>
                        {/* 깃허브 주소 */}
                        <div className="flex space-x-3">
                            <svg className="w-9 h-9 text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" >
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            <div className="flex flex-col -mt-1">
                                <span className="text-lg font-semibold text-gray-600">Github</span>
                                <span className="">바로가기</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}