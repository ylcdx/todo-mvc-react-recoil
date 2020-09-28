import React from 'react';
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoToggleAll from "./TodoToggleAll";
import { filteredTodoListState } from "../store/selectors";

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <section className="main">
            <TodoToggleAll />
            <ul className="todo-list">
                {todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} item={todoItem} />
                ))}
            </ul>
        </section>
    );
}

export default TodoList;
