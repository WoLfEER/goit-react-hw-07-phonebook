import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://633c393274afaef16404b37f.mockapi.io/contacts',
  }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts/`,
      providesTags: ['Contact'],
    }),

    getContactById: builder.query({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'GET',
      }),
      providesTags: ['Contact'],
    }),

    createContact: builder.mutation({
      query: newContact => ({
        url: `/contacts/`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactApi;
