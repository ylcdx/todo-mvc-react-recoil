import React from 'react';
import {useRecoilValue} from "recoil";
import {todoListStatsSelector} from "../store";
import TodoFilters from "./TodoFilters";
import TodoClearCompleted from "./TodoClearCompleted";

function TodoFooter() {
  const {totalUncompletedNum} = useRecoilValue(todoListStatsSelector);

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{totalUncompletedNum}</strong> item left</span>
      <TodoFilters/>
      <TodoClearCompleted/>
    </footer>
  );
}

export default TodoFooter;
