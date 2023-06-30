/*
    Redux simplified when using "redux" and "react-redux"
    1. First create a store with latest commands of that time, like "legacy_createStore".
    2. Then initiate that store with a Reducer function.
    3. Export that store.
    4. After that, Wrap <App> component with <Provider> tags given by "react-redux".
    5. Then, use "useSelector()" of "react-redux" to select that state, that's it
*/



import { legacy_createStore } from 'redux';

const ReducerFun = (state= {counter: 1}, action) => {
    
    
    if (action.type === 'INC') {
        return {counter: state.counter + 1};
    }
    if(action.type === '+15'){
        return {counter: state.counter + 15}
        // console.log("Jama")
    }
    return state
}


const store = legacy_createStore(ReducerFun);

export default store;