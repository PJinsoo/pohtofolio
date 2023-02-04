import PageSize from "@/utility/page-size";
import Image from "next/image";
import Link from "next/link";
import Title from "./title";
import testImg from "../images/test-img.jpg"

// 프로젝트 메뉴

const Projects = () => {
    const pageSize = PageSize()

    return (
        <div>
            {/* 메뉴 제목 컴포넌트 */}
            <Title
                title="PROJECTS"
                summary= "그간 진행한 프로젝트들입니다."
                icon="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
            />

            {/* Projects의 내용 */}
            <div className={`${pageSize <= 550 && 'w-[300px]'} w-auto h-auto mt-4 grid border rounded-lg shadow-md p-4 bg-gray-50`}>
                    <span className="text-center text-2xl font-bold mt-4">영화소개 페이지</span>
                    <span className="text-center text-xm text-gray-500 mb-4">2022.09</span>
                    <div className={`${pageSize >= 1000 ? 'grid grid-cols-2 space-x-4' : 'space-y-4'}`}>
                        <div className='flex justify-center'>
                        <Image src={testImg} alt='projectimg' width={400} height={500}/>
                        </div>
                        <div className="mt-4 text-gray-700">
                            <div>
                                <p>
                                    영화 정보를 확인할 수 있는 간단한 웹페이지 입니다.
                                    최근 개봉한 영화 중 평점이 높은 순으로 정렬하여 목록을 보여주며
                                    목록에서 영화를 클릭하면 클릭한 영화의 정보를 소개해주는 상세 페이지로 이동합니다.
                                </p><br/>
                                <p>
                                    Next.JS 학습을 진행하며 제작해본 웹페이지로 Next.JS 프레임워크의 기능을 더 명확히 익힐 수 있었습니다.
                                </p><br/>
                                <p>
                                    오픈소스 사용을 더 잘 다룰 수 있게끔 영화 데이터에 있어선 오픈소스 API를 적극 사용하였습니다.
                                </p><br/>
                                <p>
                                    이러한 오픈소스 API를 Next.JS에서 사용할 경우 API에서 데이터를 모두 불러오기 전에 데이터가 든 화면을 출력하면
                                    Next.JS의 서버 사이드 렌더링에 의해 에러가 발생하게 됩니다. 이를 해결하기 위해 Loading 변수로 트리거를 만들어 주는 등
                                    Next.JS의 주요 기능인 서버 사이드 렌더링(SSR)을 이해할 수 있는 좋은 경험이 되었습니다.
                                </p>
                            </div>
                            <hr className="border border-gray-300 m-6"/>
                            <div className="grid grid-cols-2">
                            <table>
                                <tr className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span className="text-lg font-semibold">Frontend</span>
                                </tr>
                                <tr className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span className="text-lg font-semibold">Backend</span>
                                </tr>
                                <tr className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span className="text-lg font-semibold">Gitgub</span>
                                </tr>
                            </table>
                            <table>
                                <tr>Next.JS</tr>
                                <tr>Node.JS | TMDB(Open Source API)</tr>
                                <tr>깃주소 아직 없음</tr>
                            </table>
                            </div>
                        </div>
                    </div>
            </div>
            <hr className="my-12 border border-gray-300" />

        </div>
    )
}

export default Projects