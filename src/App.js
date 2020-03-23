import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';
import Input from './Input';

function App() {
  const [todoList, setTodoList] = useState([
    { title: 'Make the bed' },
    { title: 'Wash my hands' },
    { title: 'Finish projects' }
  ])

  const handleKeyDown = e => {
    if (e.keyCode === 13 && e.target.value !== '') {
      setTodoList([{ title: e.target.value }, ...todoList])
    }
  }
  const handleOnClick = key => {
    const newTodoList = todoList.filter(function (todo, index) {
      return index !== key;
    });
    setTodoList(newTodoList);
  }
  return (
    <>
      <div id="container">
        <h1 className="todo-header">TO DOs</h1>
        <Input onKeyDown={handleKeyDown} />
        <ul>
          {
            todoList.length > 0 &&
            todoList.map((todo, i) => {
              return (
                <TodoItem onClick={handleOnClick} key={i} index={i} todo={todo} />
              )
            })
          }
        </ul>
      </div>
    </>
  );
}

export default App;
