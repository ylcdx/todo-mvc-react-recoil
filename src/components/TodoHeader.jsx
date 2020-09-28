import React from 'react';
import TodoInput from "./TodoInput";

function TodoHeader() {
    return (
        <header className="header">
            <h1>todos</h1>
            <TodoInput />
        </header>
    );
}

export default TodoHeader;
