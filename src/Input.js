import React from 'react';

const Input = (props) => {
    return (
        <input onKeyDown={props.onKeyDown} id="addToDo" type="text" placeholder="What needs to be done?" />
    )
}
export default Input;