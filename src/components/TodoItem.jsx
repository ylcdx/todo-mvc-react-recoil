import React from 'react';
import {useRecoilState} from "recoil";
import {todoListState} from "../store/atoms";

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function TodoItem({item}) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        <li className={`${item.isComplete ? 'completed': ''}`}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
                <label>{item.text}</label>
                <button className="destroy" onClick={deleteItem}/>
            </div>
        </li>
    );
}

export default TodoItem;
