import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";

const AccordionList = ({data}) => {
    console.log(data)

    const dispatch = useDispatch()

    const handleAddButton = (item)=>{
        dispatch(addItem(item));
    }

    

    return (
        <div className="">
            {data.map((e)=>(
                <div key={e.card.info.imageId} className="mx-2 border-b-1 border-gray-400 p-2  flex">
                    <div className="w-9/12 text-left p-2">
                        <h1 className="font-semibold">{e.card.info.name} </h1>
                        <h1 className="font-semibold">Rs {e.card.info.price/100}</h1>
                        <p className="text-sm">{e.card.info.description}</p>
                    </div>
                    
                    <div className="w-3/12 relative">
                        <img className="w-2xl" src={CDN_URL+e.card.info.imageId} />
                        <button onClick={()=>handleAddButton(e.card.info.name)} className="absolute px-4 py-1 bottom-2 right-2 text-green-800 rounded-xl border-1 hover:bg-black bg-white">ADD +</button>
                    </div>
                
                </div>
            ))}
        </div>
    )
}

export default AccordionList;