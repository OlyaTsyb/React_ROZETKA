const initialState = [];

export const reducer = (state = initialState,action)=>{
    switch (action.type){
        case "SET_CARTS":{
            console.log(action)
            return {...state,action}
        }
        default:{
            return state
        }


    }
}

