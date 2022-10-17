import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import './App.css'

function App() {
  const[todos, setTodos] = useState([
    {
      id:1,
      text  : '운동하기',
      checked: true,
    },
    {
      id:2,
      text  : '요리하기',
      checked: true,
    },
    {
      id:3,
      text  : '학원하기',
      checked: false,
    }
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(value =>{
    const todo = {
      id: nextId.current,
      text: value,
      checked: false,
    }
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },[todos]);

  const onRemove = useCallback(id =>{
    setTodos(todos.filter(todo => todo.id !== id));
  },[todos]);

  const onToggle = useCallback(id =>{
    setTodos(todos.map(todo => todo.id === id? {...todo,checked: !todo.checked} : todo));
  },[todos])

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert = {onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
