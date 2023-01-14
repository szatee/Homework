import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://63c29473e3abfa59bdaf41d7.mockapi.io/api/',
});

export const api = createApi({
  reducerPath: 'homework',
  baseQuery,
  endpoints: () => ({}),
});
