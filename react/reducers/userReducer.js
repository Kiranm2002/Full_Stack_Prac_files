const initialState ={users:[]}

const thunkReducer =(state=initialState,action)=>{
    switch(action.type){
        case "DATA_SUCCESS":
            return {users:action.payload}

        default:
            return state



    }
}
export default thunkReducer