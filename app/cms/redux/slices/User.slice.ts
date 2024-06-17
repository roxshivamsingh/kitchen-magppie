import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TUser = { id: string, name: string }

interface IUserSlice {
    value: TUser[];
    status: 'loading' | 'success' | 'failed';
    loading: boolean,
    error: null | string | undefined;
}

const initialState: IUserSlice = {
    loading: true,
    status: 'loading',
    error: null,
    value: []
};

type TAction = PayloadAction<TUser[]>

const UserSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        setSuperUsers: (state, action: TAction) => {
            state.status = 'success';
            state.loading = false;
            state.value = action.payload;
        },
    },
});

export const { setSuperUsers } = UserSlice.actions;

const UserReducer = UserSlice.reducer
export default UserReducer
