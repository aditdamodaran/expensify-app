import {createStore} from 'redux'

// Action generators 
// Lecture 90
const incrementCount = ({incrementBy = 1}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({decrementBy = 1}) => ({
  type: 'DECREMENT',
  decrementBy
})

// Reducers are PURE FUNCTIONS
// Input determines output, does not rely on global vars or anything outside of its scope
// NEVER CHANGE state or action (our inputs) ==> (no mutating, just return the new state)
const countReducer = (state = {count: 0}, action) => {
  switch (action.type){
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

store.subscribe(()=>{
  console.log(store.getState())
})


store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(decrementCount({decrementBy: 3}))

