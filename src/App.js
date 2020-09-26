import React from 'react';
import { RecoilRoot } from "recoil";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoList from "./components/TodoList/TodoList";
import TodoFooter from "./components/TodoFooter/TodoFooter";

function App() {
  return (
      <RecoilRoot>
          <section className="todoapp">
            <TodoHeader />
            <TodoList />
            <TodoFooter />
          </section>
      </RecoilRoot>
  );
}

export default App;
