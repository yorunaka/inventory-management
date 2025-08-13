import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
    }),
    tagTypes: ['Example'], // Define your tag types here if needed
    endpoints: (builder) => ({
        // Define your API endpoints here
        getExample: builder.query({
        query: () => '/example',
        }),
        postExample: builder.mutation({
        query: (data) => ({
            url: '/example',
            method: 'POST',
            body: data,
        }),
        }),
    }),
})