import { atom } from 'recoil';

const todoListAtom = atom({
    key: 'todoListAtom',
    default: [],
});

const todoListFilterAtom = atom({
    key: 'todoListFilterAtom',
    default: 'ALL',
});

export { todoListAtom, todoListFilterAtom };
