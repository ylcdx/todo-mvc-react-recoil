import React from 'react';
import { RecoilRoot } from "recoil";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

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
