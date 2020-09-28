import React from 'react';
import {useRecoilState} from "recoil";
import {todoListState} from "../store/atoms";

function TodoClearCompleted() {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const deleteItems = () => {
        const newList = todoList.filter(item => false === item.isComplete);
        setTodoList(newList);
    }

    return (
        <button className="clear-completed" onClick={deleteItems}>Clear completed</button>
    );
}

export default TodoClearCompleted;
