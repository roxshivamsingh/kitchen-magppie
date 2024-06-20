import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISuperUser } from '../../types/SuperUser';


interface IAuthSlice {
    value?: ISuperUser;
    status: 'loading' | 'success' | 'failed';
    loading: boolean,
    error: null | string | undefined;
}

const initialState: IAuthSlice = {
    loading: true,
    status: 'loading',
    error: null,
};

type TAction = PayloadAction<ISuperUser>
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
