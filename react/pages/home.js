import { useParams } from "react-router-dom";

let Home = ()=>{
    const {id} = useParams()
    return(<><h1>Home Page:{id}</h1></>)
}

export default Home;