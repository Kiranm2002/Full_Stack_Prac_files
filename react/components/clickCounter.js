import React,{useRef} from "react";

function ClickCounter(){
    const countRef = useRef(0)

    const handleClick=()=>{
        countRef.current +=1;
        console.log('Button clicked',countRef.current)
    }



    return(<>
    <button onClick={handleClick}>click me</button>
    <p>click count:{countRef.current}</p>
    
    </>)
}

export default ClickCounter

