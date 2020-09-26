import { selector } from "recoil";
import { todoListFilterState, todoListState } from "./atoms";

const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case 'COMPLETED':
                return list.filter((item) => item.isComplete);
            case 'UNCOMPLETED':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});

const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum
        };
    },
});

export { filteredTodoListState, todoListStatsState }
