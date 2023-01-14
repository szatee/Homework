import { createSelector } from '@reduxjs/toolkit';
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

export const selectTodos = (id?: string | number) =>
  createSelector(selectTodosResult, (result) => {
    if (result) {
      const { data: todos = [] } = result;

      if (id) {
        return (
          todos?.find((shelter: { id: string }) => shelter.id === id) ?? {}
        );
      }
      return todos;
    }
  });
