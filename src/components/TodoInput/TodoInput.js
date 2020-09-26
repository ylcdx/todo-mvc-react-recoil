import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import {useSetRecoilState} from "recoil";
import {todoListState} from "../TodoList/atoms";

function TodoInput() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
    const ENTER_KEY = 13;

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: nanoid(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    };

    const onChange = ({target: {value}}) => {
        setInputValue(value);
    };

    const handleKeyDown = (event) => {
        if (event.which === ENTER_KEY) {
            addItem();
        }
    }
    return (
        <input className="new-todo" placeholder="What needs to be done?" autoFocus value={inputValue} onChange={onChange} onKeyDown={handleKeyDown} />
    );
}

export default TodoInput;
