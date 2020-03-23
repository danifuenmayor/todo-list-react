import React from 'react';

const TodoItem = props => {
    const handleClick = () => {
      props.onClick(props.index);
    };

    return (
        <li><span onClick={handleClick}><i className="fas fa-trash"></i></span>{props.todo.title}</li>
    )
}
export default TodoItem;
