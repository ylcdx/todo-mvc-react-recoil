import { selector } from "recoil";
import { todoListFilterAtom, todoListAtom } from "./atoms";

const filteredTodoListSelector = selector({
    key: 'filteredTodoListSelector',
    get: ({get}) => {
        const filter = get(todoListFilterAtom);
        const list = get(todoListAtom);

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

const todoListStatsSelector = selector({
    key: 'todoListStatsSelector',
    get: ({get}) => {
        const todoList = get(todoListAtom);
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

export { filteredTodoListSelector, todoListStatsSelector }
