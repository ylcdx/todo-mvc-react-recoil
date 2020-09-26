import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import {todoListState} from "../TodoList/atoms";

function TodoToggleAll() {
    const [completeValue, setCompleteValue] = useState(false);
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const toggleAll = () => {
        const newList = todoList.map(item => {
            return { ...item, isComplete: !completeValue }
        });

        setCompleteValue(!completeValue);
        setTodoList(newList);
    }

    return (
        <React.Fragment>
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={toggleAll} />
            <label htmlFor="toggle-all">Mark all as complete</label>
        </React.Fragment>
    );
}

export default TodoToggleAll;
