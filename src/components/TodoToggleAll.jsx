import React, {useState} from 'react';
import {useToggleAllHook} from "../store";

function TodoToggleAll() {
  const [completeValue, setCompleteValue] = useState(false);
  const toggleAll = useToggleAllHook();

  const handleChange = () => {
    toggleAll(!completeValue)
    setCompleteValue(!completeValue);
  }

  return (
    <React.Fragment>
      <input id="toggle-all" className="toggle-all" type="checkbox" onChange={handleChange}/>
      <label htmlFor="toggle-all">Mark all as complete</label>
    </React.Fragment>
  );
}

export default TodoToggleAll;
