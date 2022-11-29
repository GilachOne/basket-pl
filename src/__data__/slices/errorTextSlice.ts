import { createSlice } from '@reduxjs/toolkit';

type ErrorTextState = {
    error: string;
};

const initialState: ErrorTextState = {
    error: null,
};

const errorTextSlice = createSlice({
    name: 'dashboard-error-text',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
        resetError: state => {
            state.error = null;
        },
    },
});

export const { actions, reducer } = errorTextSlice;
