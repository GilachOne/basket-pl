import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getConfigValue } from '@ijl/cli';

import { AsyncData } from '../model/async-data';
import { SignInData } from '../model/auth';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: getConfigValue('basket.api.base.url'),
    }),
    endpoints: builder => ({
        signIn: builder.mutation<
            AsyncData<SignInData>,
            { email: string; password: string }
        >({
            query: ({ email, password }) => ({
                url: '/auth/sign-in',
                method: 'post',
                body: {
                    email,
                    password,
                },
            }),
        }),
        signUp: builder.mutation<
            AsyncData<unknown>,
            { login: string; password: string; email: string }
        >({
            query: ({ login, password, email }) => ({
                url: '/auth/sign-up',
                method: 'post',
                body: {
                    login,
                    password,
                    email,
                },
            }),
        }),
    }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
