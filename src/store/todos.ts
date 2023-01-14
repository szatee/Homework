import { createSelector } from '@reduxjs/toolkit';
import { ITodo } from 'models/todo';
import { api } from 'services/api';

export const todosSlice = api.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query({
      query: () => 'todos',
    }),
  }),
});

export const { useGetTodosQuery } = todosSlice;

const selectTodosResult = todosSlice.endpoints.getTodos.select('todos');

export const selectTodos = () =>
  createSelector(selectTodosResult, (result): ITodo[] => {
    const { data: todos = [] } = result;
    return todos;
  });

export const selectTodoById = (id?: string) =>
  createSelector(selectTodosResult, (result): ITodo => {
    const { data: todos = [] } = result;

    return todos.find((todo: ITodo) => todo.id === id);
  });
