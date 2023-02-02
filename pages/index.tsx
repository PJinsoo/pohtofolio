import AboutMe from "@/components/about-me";
import Layout from "@/components/layout";

// 포트폴리오 화면

// 각 메뉴의 간편한 유지보수를 위해 컴포넌트화

export default function Home() {
  return (
      <Layout>
        {/* 인적사항 소개 컴포넌트 */}
        <AboutMe/>

      </Layout>
  )
}