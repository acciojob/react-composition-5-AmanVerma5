import React, { useState } from "react";

const List1=()=>{
    let list1=["Tab 1","Tab 2","Tab 3"]
    let [index,setIndex]=useState(0)

    return(
        <div>
            {
                list1.map((element,index)=>(
                    <li key={index} onClick={()=>setIndex(index)}>{element}</li>
                ))
            }
            <p>Content for {list1[index]}</p>
        </div>
    )
}

export default List1