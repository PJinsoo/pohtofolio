import Layout from "@/components/layout";
import AboutMe from "@/components/about-me"; // 사진 없는 버전
import HeightSkills from "@/components/skills-height";
import WidthSkills from "@/components/skills-width";
import PageSize from "@/utility/page-size";
import Projects from "@/components/projects";
import { useState } from "react";
import SwiperLib from "@/components/swiper";
import DivideLine from "@/components/divide-line";
import { Dialog, Transition } from "@headlessui/react";
import ChatButton from "@/components/chat-button";

// 포트폴리오 화면

// 각 메뉴의 간편한 관리를 위해 컴포넌트화

const Home = () => {
  const pageSize = PageSize()

  const [sideTrigger, setSideTrigger] = useState(false)
  const viewSideModal = () => {
    return setSideTrigger(!sideTrigger)
  }

  return (
      <Layout>
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