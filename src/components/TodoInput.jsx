import React, {useState} from 'react';
import {useAddTodoHook} from "../store";

function TodoInput() {
  const [inputValue, setInputValue] = useState('');
  const ENTER_KEY = 13;
  const addItem = useAddTodoHook();

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };

  const handleKeyDown = (event) => {
    if (event.which === ENTER_KEY && '' !== inputValue) {
      addItem(inputValue);
      setInputValue('');
    }
  }

  return (
    <input className="new-todo" placeholder="What needs to be done?" autoFocus
           value={inputValue}
           onChange={onChange}
           onKeyDown={handleKeyDown}/>
  );
}

export default TodoInput;
