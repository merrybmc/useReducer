import { useState, useReducer } from 'react';
import './App.css';

// parameter 2가지 = 현재 state, action
const reducer = (state, action) => {
  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      // type이 일치하지 않는게 들어오면 이전 state를 리턴
      return state;
  }
};

function App() {
  const [number, setNumber] = useState(0);

  // money = state
  // useReducer의 parameter 2가지 = reducer, 초기값
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducere 은행에 오신 것을 환영합니다.</h2>
      <p>잔고 {money}원</p>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step='1000'
      />
      <button
        onClick={() => {
          dispatch({ type: 'deposit', payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'withdraw', payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
}

export default App;
