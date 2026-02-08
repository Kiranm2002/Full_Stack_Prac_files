import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"users",
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    reducers:{
        fetchStart:(state)=>{
            state.loading=true;
            state.error=null
        },
        fetchSuccess:(state,action)=>{
            state.loading=false;
            state.data=action.payload
        },
        fetchError:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        }
    }
})

export const {fetchStart,fetchSuccess,fetchError} = UserSlice.actions
export default UserSlice.reducer