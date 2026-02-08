import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './userSlice'

export const UserStore = configureStore({
    reducer:{
        users:UserReducer
    }
})