import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../../../types/user';

interface IAuthSlice {
    value?: IUser;
    status: 'loading' | 'success' | 'failed';
    loading: boolean,
    error: null | string | undefined;
}

const initialState: IAuthSlice = {
    loading: true,
    status: 'loading',
    error: null,
};

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser | undefined>) => {
            state.status = 'success';
            state.loading = false;
            state.value = action.payload;
        },
    },
});

export const { setUser } = AuthSlice.actions;

const AuthReducer = AuthSlice.reducer
export default AuthReducer;
