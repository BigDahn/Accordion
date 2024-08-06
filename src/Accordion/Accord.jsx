import AccordionItem from './AccordionItem'
import data from './data'
const Accord = () => {
  return (
    <div className="align-element">
      <div className="flex pl-8 ">
        <img src="/assets/icon-star.svg" alt="" />
        <span className="font-bold text-3xl pl-4 ">FAQs</span>
      </div>
      
      {data.map((data) => {
        return <AccordionItem {...data} key={data.id} />
      })}
    </div>
  )
}

export default Accord
