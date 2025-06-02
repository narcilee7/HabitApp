import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";



export const recordApi = createApi({
  reducerPath: 'recordApi',
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
    getRecords: builder.query({
      query: () => '/api/records',
    }),
  }),
})