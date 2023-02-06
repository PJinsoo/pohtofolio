// 스위퍼를 라이브러리 없이 만든 버전의 로직 백업

import { useState } from "react"

const MySwiper = () => {
    const [set, SetSet] = useState(1)
    const test = (set: any) => {
        if(set == 1) return <div className="bg-red-500">111</div>  
        if(set == 2) return <div className="bg-blue-500">222</div>
        if(set == 3) return <div className="bg-green-500">333</div>
    }
    const test2 = (set: any) => {
        return (
        <div className="flex space-x-2 m-2">
            <div className={`rounded-full h-2 w-2 ${set == 1 ? 'bg-gray-700 shadow-lg' : 'bg-gray-400'}`}/>
            <div className={`rounded-full h-2 w-2 ${set == 2 ? 'bg-gray-700 shadow-lg' : 'bg-gray-400'}`}/>
            <div className={`rounded-full h-2 w-2 ${set == 3 ? 'bg-gray-700 shadow-lg' : 'bg-gray-400'}`}/>
        </div>
        )
    }
    const onSet = (ww:any) => {
        if(set == 3) return SetSet(1)
        
        return SetSet(set+1)
    }

    return(
        <div>
          {test(set)}
          {test2(set)}
          <span className="h-2 w-2 p-2 bg-black text-white" onClick={onSet}>aa</span>
        </div>
    )
}

export default MySwiper