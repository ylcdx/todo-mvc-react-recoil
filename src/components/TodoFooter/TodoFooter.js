import React from 'react';
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../TodoList/selectors";
import TodoFilters from "../TodoFilters/TodoFilters";
import TodoClearCompleted from "../TodoClearCompleted/TodoClearCompleted";

function TodoFooter() {
    const { totalUncompletedNum } = useRecoilValue(todoListStatsState);

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{totalUncompletedNum}</strong> item left</span>
            <TodoFilters />
            <TodoClearCompleted />
        </footer>
    );
}

export default TodoFooter;
