import { useState } from "react"
import AccordionList from "./AccordionList"

const ResCategoryAccordion = ({data}) =>{
    const [showlist,setShowList] = useState(false)

    const handleClick = () =>{
        setShowList(!showlist)
    }
    console.log(data)
    return (
        <div  onClick={handleClick} className="w-6/12 mx-auto shadow-xl bg-green-50">
            <div className="  my-3 p-3 flex justify-between rounded-xl">
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
                
            </div>
            <div>
                {showlist && <AccordionList key={data.categoryId} data={data.itemCards} /> }                   
            </div>
            
        </div>
    )
}

export default ResCategoryAccordion