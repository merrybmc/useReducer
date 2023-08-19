import React, { useReducer, useState } from 'react';
import Student from './Student';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.student, newStudent],
      };
    case 'delete-student':
      return {
        count: state.count - 1,
        students: state.students.filter((student) => student.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  student: [
    {
      id: Date.now(),
      name: 'James',
      isHere: false,
    },
  ],
};

export default function App2() {
  const [name, setName] = useState('');
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : ?</p>
      <input
        type='text'
        placeholder='이름을 입력해주세요'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: 'add-student', payload: { name } });
        }}
      >
        추가
      </button>
      {studentInfo.student.map((student) => {
        return <Student key={student.id} name={student.name} dispatch={dispatch} id={student.id} />;
      })}
    </div>
  );
}
