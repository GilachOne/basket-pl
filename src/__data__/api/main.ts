import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getConfigValue } from '@ijl/cli';

import { AsyncData } from '../model/async-data';
import { CategoryData, CategoryDataAdd, ItemDataAdd } from '../model/category';
import { DashboardListResp } from '../model/dashboard';
import { ItemData } from '../model/shoppingList';
import { getToken } from '../../utils/token';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: getConfigValue('basket.api.base.url'),
        prepareHeaders: headers => {
            const token = getToken();

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    tagTypes: ['Lists', 'Category', 'ItemAdd', 'Item'],
    endpoints: builder => ({
        dashboardList: builder.query<AsyncData<DashboardListResp[]>, void>({
            query: () => `/dashboard/list`,
            providesTags: ['Lists'],
        }),

        addList: builder.mutation<
            AsyncData<DashboardListResp>,
            { listName: string }
        >({
            query: body => ({
                url: `/dashboard/list`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Lists'],
        }),

        deleteList: builder.mutation<AsyncData<void>, { id: string }>({
            query: body => ({
                url: `/dashboard/list`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['Lists'],
        }),

        RenameList: builder.mutation<
            AsyncData<DashboardListResp>,
            { id: string; listName: string }
        >({
            query: body => ({
                url: `/dashboard/list`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Lists'],
        }),

        DuplicateList: builder.mutation<
            AsyncData<DashboardListResp>,
            { id: string }
        >({
            query: body => ({
                url: `/dashboard/list/duplicate`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Lists'],
        }),

        categoriesCurrent: builder.query<AsyncData<CategoryData[]>, void>({
            query: () => `/categories`,
            providesTags: ['Category'],
        }),

        categoriesAdd: builder.mutation<
            AsyncData<CategoryData[]>,
            CategoryDataAdd
        >({
            query: body => ({
                url: `/categories`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Category'],
        }),
        addItem: builder.mutation<
            AsyncData<ItemData[]>,
            { itemDataAdd: ItemDataAdd; listId: string }
        >({
            query: ({ itemDataAdd, listId }) => ({
                url: `/shoppingList/item/${listId}`,
                method: 'POST',
                body: itemDataAdd,
            }),
            invalidatesTags: ['Item', 'Lists'],
        }),
        getShoppingList: builder.query<AsyncData<{ data: ItemData[] }>, string>(
            {
                query: id => ({
                    url: `/shoppingList/${id}`,
                }),
                providesTags: ['Item'],
            }
        ),
        buyItem: builder.mutation<AsyncData<ItemData>, ItemData>({
            query: item => ({
                url: `/shoppingList/item/${item.id}`,
                method: 'PATCH',
                body: {
                    item,
                },
            }),
            invalidatesTags: ['Item', 'Lists'],
        }),

        incCountItem: builder.mutation<
            AsyncData<ItemData>,
            { item: ItemData; count: 1 | -1 }
        >({
            query: ({ item, count }) => ({
                url: `/shoppingList/item/${item.id}`,
                method: 'PUT',
                body: {
                    count,
                },
            }),
            invalidatesTags: ['Item'],
        }),

        deleteItem: builder.mutation<AsyncData<ItemData>, string>({
            query: id => ({
                url: `shoppingList/item/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Item', 'Lists'],
        }),
    }),
});

export const {
    useDashboardListQuery,
    useAddListMutation,
    useDeleteListMutation,
    useRenameListMutation,
    useDuplicateListMutation,
    useCategoriesCurrentQuery,
    useCategoriesAddMutation,
    useAddItemMutation,
    useDeleteItemMutation,
    useGetShoppingListQuery,
    useBuyItemMutation,
    useIncCountItemMutation,
} = api;
