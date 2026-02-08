import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice'
// import AsyncMid from './thunk_mid'
import createSagaMiddleware from 'redux-saga';
import { counterSaga } from './counterSaga';

let sagaMid = createSagaMiddleware()
const logMid=state=>next=>action=>{
    console.log('Action',action)
    console.log('before',store.getState());
    next(action)
    console.log('before',store.getState());
    
}

export const store=configureStore({
    reducer:{
        counter:CounterReducer
    },
    
    // middleware:(getDefaultMiddleware)=>
    //      getDefaultMiddleware({thunk:false}).concat(sagaMid)
    
    
})
// sagaMid.run(counterSaga)
