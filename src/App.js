import React, { useState } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './slices/counterSlice';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counterSlice);
  const incrementClick = () => {
    console.log('increment');
    dispatch(increment());
  };
  const decrementClick = () => {
    console.log('decrement');
    dispatch(decrement());
  };
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>{state.value}</h1>
      <button onClick={incrementClick}>-</button>

      <button onClick={decrementClick}>+</button>
    </div>
  );
}

export default App;
