import {useRecoilState, useSetRecoilState} from "recoil";
import {todoListAtom} from "./atoms";
import {nanoid} from "nanoid";

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export const useClearCompletedHook = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  return () => {
    const newList = todoList.filter(item => false === item.isComplete);
    setTodoList(newList);
  }
}

export const useAddTodoHook = () => {
  const setTodoList = useSetRecoilState(todoListAtom);

  return (value) => {
    setTodoList((currentTodoList) => [
      ...currentTodoList,
      {
        id: nanoid(),
        text: value,
        isComplete: false,
      },
    ]);
  }
}

export const useRemoveTodoHook = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  return (todo) => {
    setTodoList(todoList.filter((item) => item.id !== todo.id));
  }
}

export const useToggleTodoCompletionHook = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  return (todo) => {
    const index = todoList.findIndex((listItem) => listItem === todo);
    const newTodoList = replaceItemAtIndex(todoList, index, {
      ...todo,
      isComplete: !todo.isComplete,
    });

    setTodoList(newTodoList);
  }
}

export const useToggleAllHook = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  return (complete) => {
    const newList = todoList.map(item => {
      return {...item, isComplete: !complete}
    });

    setTodoList(newList);
  }
}
