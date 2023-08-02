import React, { useState } from "react";

const List2=()=>{
    let list2=["Tab A","Tab B","Tab C"]
    let [index,setIndex]=useState(0)

    return(
        <div>
            {
                list2.map((element,index)=>(
                    <li key={index} onClick={()=>setIndex(index)}>{element}</li>
                ))
            }
            <p>Content for {list2[index]}</p>
        </div>
    )
}

export default List2