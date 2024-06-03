import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../types/user';

interface IUserSlice {
    value: IUser | null;
    status: 'loading' | 'success' | 'failed';
    loading: boolean,
    error: null | string | undefined;
}

const initialState: IUserSlice = {
    value: null,
    loading: true,
    status: 'loading',
    error: null,
};

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser | null>) => {
            state.status = 'success';
            state.loading = false;
            state.value = action.payload;
        },
    },
});

export const { setUser } = UserSlice.actions;

export const UserReducer = UserSlice.reducer
