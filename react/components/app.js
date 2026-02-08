import React, { useCallback, useState } from "react";

let App = ()=>{
    // let [count,setCount] = useState(0);

    let handleClick = ()=>{
        console.log('clicked');
        
    }
    return(<>
    <button onClick={handleClick}>click me</button>
    </>)
}

export default App