import { SET_USERS } from "../actions";

const INITIAL_STATE = {
    
    user: {}
}


export const userReducer = (state =INITIAL_STATE ,actions) => {
    
    switch (actions.type) {
        case SET_USERS:{
             return {
                 ...state,
                 user: actions.payload
             }
             break;
        }


        
    
        default: {
            return {
                ...state
            }
        }
            break;
    }

}


// let sum = (a,b = 4) => a+b

// sum(2)