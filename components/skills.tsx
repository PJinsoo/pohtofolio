// 프론트 스킬 아이콘 이미지 Import
import HTML from "../images/front-icon/html5.png"
import JS from "../images/front-icon/JavaScript.png"
import TS from "../images/front-icon/typeScript.png"
import ReactJS from "../images/front-icon/Reactjs.png"
import NextJS from "../images/front-icon/Nextjs.png"
import CSS from "../images/front-icon/CSS.png"
import TailwindCSS from "../images/front-icon/tailwind-css.svg"
// 백 스킬 아이콘 이미지 Import
import JAVA from "../images/back-icon/java.png"
import Spring from "../images/back-icon/spring.png"
import NodeJS from "../images/back-icon/nodejs.webp"
import MySQL from "../images/back-icon/MySQL.png"

import Title from "./title";
import Image from "next/image";
import PageSize from "@/utility/page-size";


const Skills = () => {
    const pageSize = PageSize()

    return(
        <>
            {/* 메뉴 제목 컴포넌트 */}
            <Title
                title="SKILLS"
                summary= "임시글" // "보유한 기술 스택입니다."
                icon="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            
            {/* 기술스택 파트 */}
            <div className={`grid grid-cols-1 space-y-10 lg:space-y-4 lg:grid-cols-2`}>
                {/* 프론트엔드 기술 스택 */}
                <div className="w-[300px] mt-4 p-4 grid grid-cols-1 border rounded-lg shadow-md space-y-6 bg-gray-50">
                    <span className="text-center text-2xl border-b-2 border-gray-300 m-2 font-bold text-orange-500">Frontend</span>
                    <div className="flex justify-around">
                        <Image src={HTML} alt="profileImg" width={130} height={130} className="-ml-3"/>
                        <Image src={CSS} alt="profileImg" width={100} height={100}/>
                    </div>
                    <div className="flex justify-around">
                        <Image src={JS} alt="profileImg" width={100} height={100} className="rounded-lg" />
                        <Image src={TS} alt="profileImg" width={100} height={100} />
                    </div>
                    <div className="flex justify-around">
                        <Image src={ReactJS} alt="profileImg" width={100} height={100} className="rounded-lg" />
                    </div>
                    <div className="flex justify-around">
                        <Image src={NextJS} alt="profileImg" width={200} height={100} />
                    </div>
                    <div className="flex justify-around p-4">
                        <Image src={TailwindCSS} alt="profileImg" width={200} height={100} />
                    </div>
                </div>

                {/* 백엔드 기술 스택 */}
                <div className="w-[300px] h-[400px] grid mt-4 p-2 border rounded-lg shadow-md space-y-6 bg-gray-50">
                    <span className="text-center text-2xl border-b-2 border-gray-300 m-2 font-bold text-orange-500">Backend</span>
                    <div className="flex justify-around space-x-2 -mr-2">
                        <Image src={JAVA} alt="profileImg" width={100} height={100}/>
                        <Image src={NodeJS} alt="profileImg" width={120} height={100}/>
                    </div>
                    <div className="flex justify-around p-2">
                        <Image src={Spring} alt="profileImg" width={250} height={100} />
                    </div>
                </div>
            </div>

            <hr className="my-12" />
        </>
    )
}

export default Skills