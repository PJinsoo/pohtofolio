import Layout from "@/components/layout";
import AboutMe from "@/components/about-me"; // 사진 없는 버전
import HeightSkills from "@/components/skills-height";
import WidthSkills from "@/components/skills-width";
import PageSize from "@/utility/page-size";
import Projects from "@/components/projects";
import DivideLine from "@/components/divide-line";
import ChatButton from "@/components/chat-button";

// 포트폴리오 화면

// 각 메뉴의 간편한 관리를 위해 컴포넌트화

const Home = () => {
  const pageSize = PageSize()

  return (
      <Layout>
        {/* 화면사이즈 테스트용 */}
        <div className="fixed bg-gray-200">
        <p
            className="
                text-white
                font-bold
                bg-red-500
                sm:bg-yellow-500
                md:bg-green-500
                lg:bg-blue-500
                xl:bg-violet-500
                ">
            빨:xs 주:sm 초:md 파:lg 보:xl
        </p>
        <p>현재 사이즈: {pageSize}</p>
        </div>


        {/* 인적사항 소개 화면 */}
        <AboutMe/>
        <DivideLine/>
        {/* 페이지 사이즈에 따라 다르게 보여줄 기술스택 화면 */}
        {pageSize >= 1300 ? <WidthSkills/> : <HeightSkills/>}
        <DivideLine/>
        {/* 프로젝트 소개 화면 */}
        <Projects/>
        <DivideLine/>

        {/* 우하단 챗버튼 */}
        <ChatButton/>
      </Layout>
  )
}

export default Home