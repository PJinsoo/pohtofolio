import Layout from "@/components/layout";
import Image from "next/image";
import profileImg from "../images/profileImg.jpg" // 프로필사진

export default function Home() {
  return (
      <Layout>
        {/* About Me 파트 */}
        <div>
          {/* About Me 심볼과 글, 한 줄 소개가 위치할 부분 */}
          <div className="lg:flex lg:justify-between">
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 border-b-2 border-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-2xl p-1 border-b-2 border-gray-600 font-mono font-bold">About Me</span>          
            </div>
            {/* 한 줄 소개가 들어갈 부분 */}
            <span className="font-bold text-slate-500 text-lg">summary</span>
          </div>
          {/* 내 정보가 들어갈 공간 */}
          <div className="grid sm:grid-cols-1 space-y-2 lg:space-y-0 lg:grid-cols-2 mt-4">
            {/* 내 사진자리 | 지금은 임시상태로 걍 흰 배경 */}
            <Image src={''} alt="profileImg" objectFit="cover" objectPosition="center" width={300} height={350}
            className="bg-slate-300"/>

            {/* 텍스트 정보 */}
            <div className="border-2 rounded-md xl:-ml-28 grid p-3">
              {/* 간단한 자기소개 */}
              <p>intro</p>
              {/* 이름, 생년월일, 주소지, 연락처, 학력 등등 */}
              <div className="grid grid-cols-3">
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="flex flex-col -mt-1">
                    <span className="text-lg font-semibold text-gray-600">생년월일</span>
                    <span className="">99.04.21</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="flex flex-col -mt-1">
                    <span className="text-lg font-semibold text-gray-600">주소지</span>
                    <span className="">인천</span>
                  </div>
                </div>
                {/* 연락처 */}
                <div className="flex space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="flex flex-col -mt-1">
                    <span className="text-lg font-semibold text-gray-600">연락처</span>
                    <span className="text-sm">010-5488-8398</span>
                  </div>
                </div>
                {/* 학력 */}
                <div className="flex space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="flex flex-col -mt-1">
                    <span className="text-lg font-semibold text-gray-600">학력</span>
                    <span className="">인하공업전문대학</span>
                    <span className="text-sm text-center">(컴퓨터정보과)</span>
                  </div>
                </div>
                {/* 깃허브 주소 등 추가할거 */}
                <div className="grid grid-cols-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>


      </Layout>
  )
}