import React from 'react';
import {useRecoilState} from "recoil";
import {todoListState} from "../TodoList/atoms";

function TodoClearCompleted() {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const deleteItems = () => {
        const newList = todoList.filter(item => false === item.isComplete);
        setTodoList(newList);
    }

    return (
        <React.Fragment>
            <button className="clear-completed" onClick={deleteItems}>Clear completed</button>
        </React.Fragment>
    );
}

export default TodoClearCompleted;
