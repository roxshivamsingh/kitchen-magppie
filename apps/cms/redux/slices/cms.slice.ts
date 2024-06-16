import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '@repo/types/users';

interface ICmsSlice {
    value: { user?: IUser };
    status: 'loading' | 'success' | 'failed';
    loading: boolean,
    error: null | string | undefined;
}

const initialState: ICmsSlice = {
    value: {},
    loading: true,
    status: 'loading',
    error: null,
};

const CmsSlice = createSlice({
    name: 'CmsUser',
    initialState,
    reducers: {
        setCmsUser: (state, action: PayloadAction<IUser | undefined>) => {
            state.status = 'success';
            state.loading = false;
            state.value.user = action.payload;
        },
    },
});

export const { setCmsUser } = CmsSlice.actions;

export const CmsReducer = CmsSlice.reducer
