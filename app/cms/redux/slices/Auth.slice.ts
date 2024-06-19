import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TAuth = {
    id: string,
    email: string
}

interface IAuthSlice {
    value?: TAuth;
    status: 'loading' | 'success' | 'failed';
    loading: boolean,
    error: null | string | undefined;
}

const initialState: IAuthSlice = {
    loading: true,
    status: 'loading',
    error: null,
};

type TAction = PayloadAction<TAuth>
const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setAuth: (state, action: TAction) => {
            state.status = 'success';
            state.loading = false;
            state.value = action.payload;
        },
    },
});

export const { setAuth } = AuthSlice.actions;

const AuthReducer = AuthSlice.reducer
export default AuthReducer
