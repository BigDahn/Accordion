import { useState } from "react"



const AccordionItem = ({title,info}) => {
  const [moreInfo, setMoreInfo] = useState(false)

  const handleInfo = ()=>{
    setMoreInfo(!moreInfo)
  }
  return (
    <section className="align-element ml-10 mr-10  sm:w-[60vh]">
      <header className="flex justify-between  sm:w-[60vh] ">
        <h3 className="w-60 text-lg font-bold sm:w-[50vh] hover:text-purple-500 cursor-pointer	">
          {title}
        </h3>
        <button className="" onClick={() => handleInfo()}>
          {moreInfo ? (
            <img src="/assets/icon-minus.svg" />
          ) : (
            <img src="/assets/icon-plus.svg" alt="" />
          )}
        </button>
      </header>
      {moreInfo && <p className="pt-2 pb-2 text-neutral-500">{info}</p>}
    </section>
  )
}

export default AccordionItem
