import React from 'react';
import {useClearCompletedHook} from "../store";

function TodoClearCompleted() {
  const deleteItems = useClearCompletedHook();

  return (
    <button className="clear-completed" onClick={() => deleteItems()}>Clear completed</button>
  );
}

export default TodoClearCompleted;
