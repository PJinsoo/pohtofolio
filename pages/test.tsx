import AboutMe from "@/backup/about-me";
import Layout from "@/components/layout";
import AboutMe_ver2 from "@/components/about-me"; // 사진 없는 버전
import HeightSkills from "@/components/skills-height";
import WidthSkills from "@/components/skills-width";
import PageSize from "@/utility/page-size";
import Projects from "@/components/projects";
import ChatButton from "@/components/chat-button";

// 포트폴리오 화면

// 각 메뉴의 간편한 유지보수를 위해 컴포넌트화

const test = () => {
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

        {/* 인적사항 소개 컴포넌트 */}
        <AboutMe_ver2/>
        {pageSize >= 1300 ? <WidthSkills/> : <HeightSkills/>}
      </Layout>
  )
}

export default test