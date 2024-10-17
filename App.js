import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';  // Import the action creators

function App() {
  // Access the current state value from Redux store
  const count = useSelector((state) => state.counter.value); //iske ander current state (value) hoti hy and ye usko update krta rehta hy jese hi koi action perform hota hy 

  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();   //dispacth is function jo reduc store ko call bhejta hy 
  // (like "dispatch(increment(3))"  or kehta hy user ne "type = increment" btaye hy and "payload = 3"  kaha hy..then waha se "increment ka function dekh kr uske ander jo action perform hoa hota hy usko UI me render kr deta hy"

  // Define Reducer Functions....those functions listening for actions from dispatch

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      {/* Use the action creators directly */}
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  );
}

export default App;
