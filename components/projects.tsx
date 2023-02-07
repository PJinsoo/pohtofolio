import PageSize from "@/utility/page-size";
import Title from "./title";
import testImg from "../images/test-img.jpg"
import ProjectTemplate from "./projectTemplate";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import DivideLine from "./divide-line";

// 프로젝트 메뉴

const Projects = () => {
    const pageSize = PageSize()
    SwiperCore.use([Navigation, Pagination])

    return (
        <div>
            {/* 메뉴 제목 컴포넌트 */}
            <Title
                title="PROJECTS"
                summary= "좌우 스크롤을 통해 더 확인해보세요!"
                icon="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
            />

            <div>
                {/* Swiper 라이브러리를 사용한 슬라이드 뷰 */}
                <Swiper
                    className=""
                    spaceBetween={50}
                    slidesPerView={1}
                    //onSlideChange={() => console.log('slide change')}
                    //onSwiper={(swiper) => console.log(swiper)}
                    //navigation
                    pagination={{ clickable: true }}
                    allowTouchMove // 터치 허용
                    threshold={20} // 터치 감도
                >

                    {/* 영화소개 페이지 */}
                    <SwiperSlide className="cursor-pointer">
                        <ProjectTemplate img={testImg} title="영화소개 페이지" date="2022.09" front="Next.JS | TypeScript" back="Node.JS | TMDB(Open Source API)" github="ww">
                            <div>
                                <p>
                                    <b>영화 정보를 확인할 수 있는 간단한 웹페이지 프로젝트 입니다.</b> 최근 개봉한 영화 중 평점이 높은 순으로 정렬하여 목록을 보여주며
                                    목록에서 영화를 클릭하면 클릭한 영화의 정보를 소개해주는 상세 페이지로 이동합니다.
                                </p><br/>
                                <p>
                                    <b>TypeScript와 Next.JS</b>를 사용해 구현하였으며 Next.JS 프레임워크 사용은 첫 번째인 프로젝트입니다.
                                </p>
                                <p>
                                    영화 데이터의 경우, 오픈소스 사용에 더 익숙해질 수 있도록 <b>오픈소스 API인 TMDB의 데이터를 적극 활용</b>하였습니다.
                                </p><br/>
                                <p>
                                    <b>프로젝트를 진행하며 가장 크게 느낀 점은 Next.JS가 제공하는 편리한 사용성에 대한 긍정적인 경험이었습니다.</b> 라우팅 경로 설정 없이 
                                    pages 디렉토리를 활용해 자동으로 라우팅을 지원해주거나 서버 사이드 렌더링으로 
                                    페이지가 빨라 보이는 긍정적인 경험을 주는 등 최근 인기를 누리는 이유를 확인할 수 있었습니다.
                                </p>
                            </div>
                        </ProjectTemplate>
                    </SwiperSlide>

                    {/* 당근마켓 클론 */}
                    <SwiperSlide className="cursor-pointer">
                        <ProjectTemplate img={testImg} title="당근마켓 클론" date="2022.10" front="Next.JS | TypeScript" back="Node.JS | Prisma" github="https://github.com/PJinsoo/carrot-market">
                            <div>
                                <p>
                                    <b>모바일 중고거래 앱인 당근마켓을 웹으로 클론 코딩해보았습니다.</b> 판매 상품 목록을 보여주며 상품을 클릭하면 상품 정보와
                                    비슷한 상품에 대한 목록도 표시해주는 등 당근마켓을 클론해보았습니다. 
                                    직전 영화 소개 페이지를 제작하며 친해진 Next.JS와 더욱 친해지기 위해 시작한 프로젝트입니다.
                                </p><br/>
                                <p>
                                    <b>프론트로 TypeScirpt와 Next.JS</b>를 사용하였으며, <b>백엔드는 NoSQL인 Prisma</b>를 사용하였습니다.
                                </p><br/>
                                <p>
                                    <b>처음으로 NoSQL을 다뤄본 것과 퍼블리싱을 위해 Tailwind CSS에 도전</b>해보는 등 다양한 도전을 해본 프로젝트입니다.
                                </p>
                                <p>
                                    개발의 규모가 이전보다 커지다보니 중복된 코드가 잦아졌고 이를 최소화할 필요가 있었습니다. 이 과정에서 <b>각 기능의 컴포넌트를 나누는 것에 대해 더 익숙해 질 수 있었습니다.</b> 또한 
                                    비슷한 상품 목록을 보여주기 위한 나름대로의 알고리즘을 구현해보기도 하였습니다.
                                </p><br/>
                                <p>
                                    Tailwind CSS를 사용해보며 놀라울 정도로 간편하게 이뤄내는 퍼블리싱에 감탄하였습니다.
                                    Tailwind CSS를 계기로 기존 CSS에 흥미를 갖게 되는 등 추가적인 학습효과도 이뤄낼 수 있던 좋은 프로젝트 경험이었습니다.
                                </p>
                            </div>
                        </ProjectTemplate>
                    </SwiperSlide>

                    <SwiperSlide className="cursor-pointer">
                        <ProjectTemplate img={testImg} title="DJMAX V 성과 기록기" date="2021.11" language="JAVA" DB="MySQL">
                            <div>
                                <p>
                                    즐겨하는 <b>리듬게임인 &apos;DJMAX&apos;의 성과를 기록하는 자바 프로그램을 개발해본 프로젝트입니다.</b> 대학 시절 학과 자바 수업의 프로젝트로 진행되었습니다.
                                    초기엔 로그인화면을, 로그인한 회원이 기록한 성과 목록을, 성과기록을 추가/삭제/수정을 지원하는 기본적인 기록기 프로그램입니다.
                                </p><br/>
                                <p>
                                    <b>자바의 Window Apllication을 통해 자바 GUI로 개발</b>되었으며, 유저정보, 성과정보를 저장할 <b>데이터베이스로는 MySQL</b>을 사용했습니다.
                                </p><br/>
                                <p>
                                    그동안 자바로 구현해본 코드는 CLI 화면에서 텍스트만을 바라보는 것에서 지루함을 느꼈습니다. 
                                    그런 제게 <b>실제 GUI를 개발해보는 것은 흥미로운 경험</b>이었습니다.
                                </p><br/>
                                <p>
                                    DB와 연동하는 과정에서 <b>자바의 DB 커넥션 연결이 처음이었던지라 미숙했던 점이 있어 고전을 면치못하기도</b> 하였습니다.
                                    하지만 <b>이 경험을 통해 DB 연동에 익숙해질 수 있었으며 이후 Spring과 DB를 연결하는 과정에서도 도움이 되는 등 큰 도움이 된 프로젝트입니다.</b>
                                    또한 이 프로젝트를 통해 자신이 좋아하는 분야에 무언가를 개발하고 있음이 얼마나 즐거운지 느낄 수 있었습니다.
                                </p>
                            </div>
                        </ProjectTemplate>
                    </SwiperSlide>
                </Swiper>
            </div>
            <DivideLine/>
        </div>
    )
}

export default Projects