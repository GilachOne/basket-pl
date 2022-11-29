import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { api } from './api/main';
import { authApi } from './api/auth';
import { reducer as errorTextReducer } from './slices/errorTextSlice';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [authApi.reducerPath]: authApi.reducer,

        errorText: errorTextReducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(api.middleware)
            .concat(authApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
