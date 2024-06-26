import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISuperUser } from '../../types/SuperUser';


interface IUserSlice {
    value: ISuperUser[];
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

type TAction = PayloadAction<ISuperUser[]>

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
