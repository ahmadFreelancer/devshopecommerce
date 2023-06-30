export default moneyReducer = (state=0, action) =>{
    if (action.type ==='withdraw') {
        state = state + action.payload
    }
    else if (action.type ==='deposit') {
        state = state - action.payload
    }
    else {
        return state
    }
}