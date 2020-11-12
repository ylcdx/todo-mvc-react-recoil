import React from 'react';
import {useRemoveTodoHook, useToggleTodoCompletionHook} from "../store";

function TodoItem({item}) {
  const toggleItemCompletion = useToggleTodoCompletionHook();
  const deleteItem = useRemoveTodoHook();

  return (
    <li className={`${item.isComplete ? 'completed' : ''}`}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={item.isComplete}
               onChange={() => toggleItemCompletion(item)}/>
        <label>{item.text}</label>
        <button className="destroy" onClick={() => deleteItem(item)}/>
      </div>
    </li>
  );
}

export default TodoItem;
