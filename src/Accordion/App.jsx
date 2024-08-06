import { useEffect, useState } from "react"
import { useWindowSize } from '@react-hook/window-size'
import Accord from "./Accord"


const App = () => {
  const [width] = useWindowSize()
  const [imgSrc, setImgSrc] = useState(
    '/assets/background-pattern-desktop.svg'
  )

  useEffect(()=>{
 if (width <= 768) {
   setImgSrc("/assets/background-pattern-mobile.svg")
 }
  })
  return (
    <div className="grid ">
      <img src={imgSrc} alt="" className="w-screen absolute" />
      <div className="border-2 rounded-lg  bg-white m-auto top-36 relative w-[55vh] h-[65vh]  sm:w-max h-fit ">
        <Accord />
      </div>
    </div>
  )
   
}

export default App
