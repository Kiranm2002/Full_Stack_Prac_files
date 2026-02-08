// import {useState} from "react" 
// let GreenBox = ()=>{
//     return <div style={{backgroundColor:"green",height:"100px",width:"100%"}}></div>
// }

// let RedBox = ()=>{
//     return <div style={{backgroundColor:"red",height:"100px",width:"100%"}}></div>
// }
let SomeDiv = (props)=>{
    return (<div>
        <h1>{props.car_name}</h1>
    </div>)
}


let NameComponents = (props)=>{
    let data = ["Honda","Hundai","Suzuki","Tata"]
 return (<ul>
    {data.map(el => <SomeDiv  car_name={el} />)}
     </ul>)
}
export default NameComponents