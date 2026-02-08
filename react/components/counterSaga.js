import {takeEvery,put,delay} from 'redux-saga/effects'
import { increment } from './CounterSlice'

function* handAsynInc(){
    yield delay(1000)
    yield put(increment())
}

export function* counterSaga(){
    yield takeEvery('counter/incrementAsync',handAsynInc)
}