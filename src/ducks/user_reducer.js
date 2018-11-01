const initialState = {
    user: {}
}

//types
const UPDATE_USER = 'UPDATE_USER';



//reducer
function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_USER:
        return {...state, user: action.payload}
        
        
        default: 
        return state
    } 
    
}


//action creators

export const  updateUser = (data) => {
    return{
        type: UPDATE_USER,
        payload: data
    }
}


export default reducer; 