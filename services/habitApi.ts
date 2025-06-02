import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const habitApi = createApi({
  reducerPath: 'habitApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).user.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getHabits: builder.query({
      query: () => '/habits/list',
    }),
    createHabit: builder.mutation({
      query: (habit) => ({
        url: '/habits/create',
        method: 'POST',
        body: habit,
      }),
    }),
    getHabitById: builder.query({
      query: (id) => `/habits/${id}`,
    }),
  })
})

export const {
  useGetHabitsQuery,
  useCreateHabitMutation,
  useGetHabitByIdQuery,
} = habitApi;