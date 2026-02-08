import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

let UserDetails=()=>{
    const {id}=useParams()
    const [user,setUser] = useState(null)

     useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <h1>Loading....</h1>
  return(<>
    <h2>{user.name}</h2>
    <p><b>UserName:</b>{user.name}</p>
    <p><b>UserEmail:</b>{user.email}</p>
    <p><b>UserPhone:</b>{user.phone}</p>
    <p><b>UserAddress:</b><br />
  {user.address.street}, {user.address.suite}<br />
  {user.address.city} – {user.address.zipcode}<br/><b>Geo:</b> {user.address.geo.lat}, {user.address.geo.lng}</p>
    <p><b>UserCompany:</b>{user.company.name}<br />
  <b>Catch Phrase:</b> {user.company.catchPhrase}<br />
  <b>Business:</b> {user.company.bs}</p>
    <p><b>UserWebsite:</b>{user.website}</p>
    </>)

}
export default UserDetails