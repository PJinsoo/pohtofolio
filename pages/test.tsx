import AboutMe from "@/components/about-me";
import Layout from "@/components/layout";
import AboutMe_ver2 from "@/components/about-me-v2"; // 사진 없는 버전
import Skills from "@/components/skills";

// 포트폴리오 화면

// 각 메뉴의 간편한 유지보수를 위해 컴포넌트화

const test = () => {
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
        <Skills/>
      </Layout>
  )
}

export default test