import Layout from "@/components/layout";
import AboutMe from "@/components/about-me"; // 사진 없는 버전
import HeightSkills from "@/components/skills-height";
import WidthSkills from "@/components/skills-width";
import PageSize from "@/utility/page-size";
import Projects from "@/components/projects";

// 포트폴리오 화면

// 각 메뉴의 간편한 유지보수를 위해 컴포넌트화

const Home = () => {
  const pageSize = PageSize()


  return (
      <Layout>
        {/* 크기 조정용 */}
        <span
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
        </span>
        <span>
          현재 페이지 사이즈 {pageSize}
        </span>

        {/* 인적사항 소개 화면 */}
        <AboutMe/>
        
        {/* 페이지 사이즈에 따라 다르게 보여줄 기술스택 화면 */}
        {pageSize >= 1300 ? <WidthSkills/> : <HeightSkills/>}

        {/* 프로젝트 소개 화면 */}
        <Projects/>
      </Layout>
  )
}

export default Home