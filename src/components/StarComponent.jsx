import { useState } from "react";
import { CiStar } from "react-icons/ci";

export default function StarComponent({props}){

    const [select,setSelect] = useState(0)
    const [move,setMove] = useState(0)

    function selectStars(id){
        console.log('for selection '+id)
        setSelect(id)
    }

    function moveFunction(id){
        console.log("this is for hovering "+id)
        setMove(id)
    }
    function resetMove(){
        setMove(0)
    }

    return <div>
        {
            [...Array(props)].map((_,i)=> 
                <CiStar key={i+1}
             className={`text-4xl inline ${(i+1)<= (select) || (move) ? `text-orange-500`: `bg-white`}`}
             onClick={()=>selectStars(i+1)}
             onMouseMove={()=>moveFunction(i+1)}
             onMouseLeave={()=>resetMove()}
             />
            )
        }
    </div>
}