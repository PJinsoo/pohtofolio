import Title from "./title";
import Image from "next/image";
import PageSize from "@/utility/page-size";
import DivideLine from "./divide-line";
import develoop from "../images/career/develoop.jpeg"
import { useState } from "react";

// 경력

const Career = () => {
    const pageSize = PageSize()

    // 업무 상세보기 트리거
    const [intro, setIntro] = useState(false)
    const viewIntro = () => {
        return setIntro(!intro)
    }

    return (
        <>
            {/* 메뉴 제목 컴포넌트 */}
            <Title
                title="CAREER"
                summary= "그동안의 경력입니다!"
                icon="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />

            {/* 경력 */}
            <div className={`mt-4 border p-4 rounded-lg shadow-md space-y-6 bg-gray-50`}>
                <div className="flex flex-col items-center">
                    <div className="border-2 rounded-full h-48 w-48 bg-white shadow-sm">
                        <Image src={develoop} alt='develoop' width={150} className="mt-20 ml-4"/>
                    </div>
                </div>
                <div className={`h-full`}>
                    <div className="text-center m-2 flex flex-col">
                        <span className="text-xl font-bold text-gray-800 -mx-10">(주) 디벨룹</span>
                        <span className="text-sm text-gray-600">2022.09 ~ 현재 재직중</span>
                    </div>
                    <hr className="my-4 w-full border-gray-300"/>
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-gray-700">:: 주요 업무 ::</span>
                        <p className="font-semibold text-gray-700">Spring 웹을 Next.JS로 재개발</p>
                    </div>
                    <hr className="my-4 w-full border-gray-300"/>
                    {/* 경력 내용 상세보기 온오프 */}
                    <div className="w-full">
                        {intro 
                            ? (
                            <div>
                                <div className="flex justify-between">
                                <span className="text-gray-700 text-sm mt-3 mx-2">담당 업무 자세히 읽기</span>
                                <span className="mx-2 p-2 bg-blue-500 text-white font-semibold rounded-xl cursor-pointer hover:bg-blue-600" onClick={viewIntro}>
                                    내용닫기
                                </span>
                                </div>
                                <div className="mt-2 p-1 text-gray-800">
                                    <p>
                                        <b>Spring MVC로 개발되어 운영 중인 웹 페이지인 하키플레이를 Next.JS로 변경하는 프로젝트에 참여하였습니다.</b>
                                    </p><br/>
                                    <p>
                                        해당 프로젝트를 수행하기 위해서 React와 Next를 1달의 기간을 거쳐 학습하였습니다.
                                        학습의 효과로 Next.JS 환경에 빠르게 적응할 수 있었으며 하키플레이의 Next 변환 작업도 순조롭게 진행하였습니다.
                                    </p><br/>
                                    <p>
                                        이 프로젝트를 진행하며 <b>React(Next)의 실력 향상</b>은 물론, 기존 하키플레이의 구조를 파악해가며 <b>Spring의 실력까지</b> 향상할 시킬 수 있었습니다.
                                    </p><br/>
                                    <p>
                                        또한 학생 수준에서 벗어나 <b>실무 코드가 어떠한지 몸소 느낄 수 있었고,</b> 막히는 부분에선 사수의 가르침과 조언을 통해 전화위복의 기회를 얻을 수 있었습니다.
                                    </p>
                                    
                                </div>
                            </div>
                            ) 
                            : (
                            <div className="flex justify-between">
                                <span className="text-gray-700 text-sm mt-3 mx-2">담당 업무 자세히 읽기</span>
                                <span className="mx-2 p-2 bg-blue-500 text-white font-semibold rounded-xl cursor-pointer hover:bg-blue-600" onClick={viewIntro}>
                                    상세보기
                                </span>
                            </div>
                        )}
                        <hr className="my-4 border-gray-300"/>
                        <div>
                            <span className="p-2 font-semibold">▎개발 담당 업무</span>
                            <div className="ml-2 mt-1">
                                <p>· 게시판의 CRUD 개발</p>
                                <p>· 게시글 뷰어에 Youtube 랜더링 적용</p>
                                <p>· 매치 정보 모달의 프론트 개발</p>
                                <p>· 팀 페이지 전체 개발</p>
                                <p>· API 개발 - 회원 탈퇴, 팀 정보수정/폐쇄신청</p>
                                <p>· 관리자의 회원, 팀 관리 페이지 개발</p>
                                <p>· Text Editor로 CKeditor 라이브러리 적용</p>
                                <p>· FullCalendar 라이브러리 적용</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DivideLine/>
        </>
    )
}

export default Career