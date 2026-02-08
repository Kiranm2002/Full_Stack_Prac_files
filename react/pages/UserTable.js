  import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
  
// let App=()=>{
//   return(<>
//   <Routes>
//     <Route path='/' element={<UserTable/>}/>
//     <Route path='/user/:id' element={<UserDetails/>}/>
//   </Routes>
//   </>)
// }
  let UserTable = ()=>{
    let [users,setUsers] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>setUsers(data))

    },[])
    return(<>
    <table border={1} style={{cursor:"pointer"}}>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
        {users.map((el)=>(
            <tr key={el.id} onClick={()=>navigate(`/user/${el.id}`)}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>

            </tr>
        ))}

    </table>
    </>)
  }
  export default UserTable