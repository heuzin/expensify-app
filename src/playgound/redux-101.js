import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducers = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;     
    }
};

const store = createStore(countReducers)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// Action - an object that gets sent to the store

// increment, decrement, reset


store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount( { count: 3331 }))