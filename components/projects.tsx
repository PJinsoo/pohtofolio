import PageSize from "@/utility/page-size";
import Title from "./title";
import testImg from "../images/test-img.jpg"
import ProjectTemplate from "./projectTemplate";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

// 프로젝트 메뉴

const Projects = () => {
    const pageSize = PageSize()
    SwiperCore.use([Navigation, Pagination])

    return (
        <div>
            {/* 메뉴 제목 컴포넌트 */}
            <Title
                title="PROJECTS"
                summary= "좌우 스크롤로 더 확인해보세요!"
                icon="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
            />

            <div className="-mx-20 ">
            
            {/* Swiper 라이브러리를 사용한 슬라이드 뷰 */}
            <Swiper
                className=""
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                pagination={{ clickable: true }}
                allowTouchMove // 터치 허용
                threshold={20} // 터치 감도
            >

                {/* 영화소개 페이지 */}
                <SwiperSlide>
                    <ProjectTemplate img={testImg} title="영화소개 페이지" date="2022.09" front="Next.JS" back="Node.JS | TMDB(Open Source API)" github="ww">
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
                    </ProjectTemplate>
                </SwiperSlide>

                {/* 당근마켓 클론 */}
                <SwiperSlide>
                    <ProjectTemplate img={testImg} title="당근마켓 클론" date="2022.10" front="Next.JS" back="Node.JS | Prisma" github="https://github.com/PJinsoo/carrot-market">
                        <div>
                            <p>
                                당근마켓을 클론코딩 설명설명 대충 프리즈마 사용 nosql뭐시기저시기 이거 설명 제대로 못할거같으면 걍 mysql로 재구현하기
                            </p>
                        </div>
                    </ProjectTemplate>
                </SwiperSlide>

                <SwiperSlide>
                    <ProjectTemplate img={testImg} title="DJMAX V 성과 기록기" date="2021.11" language="JAVA" DB="MySQL">
                        <div>
                            <p>
                                학과 자바 수업 중 자바 window application 수업의 개인 프로젝트
                                평소 즐겨하는 게임인 DJMAX 머시기 저시기
                                그동안 CLI 화면만 보며 흥미를 크게 느끼지 못한 자바에게서 window application 개발로 큰 흥미를 느끼게한 머시기 저시기
                                db로 mysql, java와 db 환경설정에서 고전했지만 이를 바탕으로 java환경의 DB 커넥션 설정에 익숙해질 수 있었다~~
                                                                
                            </p>
                        </div>
                    </ProjectTemplate>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default Projects