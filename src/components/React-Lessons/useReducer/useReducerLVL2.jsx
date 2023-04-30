import React, { useReducer } from 'react';

const initialState = {
  counter: 0,
  text: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    case 'decrement':
      return { ...state, counter: state.counter - 1 };
    case 'setText':
      return { ...state, text: action.payload };
    default:
      throw new Error();
  }
}

function MiddleUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter: {state.counter}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <input type="text" value={state.text} onChange={(e) => dispatch({ type: 'setText', payload: e.target.value })} />
    </div>
  );
}
export default MiddleUseReducer
