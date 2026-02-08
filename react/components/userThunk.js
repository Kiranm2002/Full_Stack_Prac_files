import axios from "axios"
import {fetchStart,fetchSuccess,fetchError} from './userSlice'

const fetchUsers =()=>{
    return async(dispatch)=>{
        dispatch(fetchStart());
        try{
            const res= await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(fetchSuccess(res.data))
        }catch(err){
            dispatch(fetchError(err.message))
        }
        
        
    }
}
export default fetchUsers