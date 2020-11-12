import React from 'react';
import {useRecoilState} from "recoil";
import {todoListFilterAtom} from "../store";

function TodoFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterAtom);

  return (
    <ul className="filters">
      <li>
        <a href="#/" className={`${'ALL' === filter ? 'selected' : ''}`}
           onClick={() => setFilter('ALL')}>All</a>
      </li>
      <li>
        <a href="#/uncompleted" className={`${'UNCOMPLETED' === filter ? 'selected' : ''}`}
           onClick={() => setFilter('UNCOMPLETED')}>Active</a>
      </li>
      <li>
        <a href="#/completed" className={`${'COMPLETED' === filter ? 'selected' : ''}`}
           onClick={() => setFilter('COMPLETED')}>Completed</a>
      </li>
    </ul>
  );
}

export default TodoFilters;
