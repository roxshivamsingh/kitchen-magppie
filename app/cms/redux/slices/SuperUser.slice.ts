import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TSuperUser = { id: string, name: string }

interface ISuperUserSlice {
    value: TSuperUser[];
    status: 'loading' | 'success' | 'failed';
    loading: boolean,
    error: null | string | undefined;
}

const initialState: ISuperUserSlice = {
    loading: true,
    status: 'loading',
    error: null,
    value: []
};

type TAction = PayloadAction<TSuperUser[]>

const SuperUserSlice = createSlice({
    name: 'SuperUsers',
    initialState,
    reducers: {
        setSuperUsers: (state, action: TAction) => {
            state.status = 'success';
            state.loading = false;
            state.value = action.payload;
        },
    },
});

export const { setSuperUsers } = SuperUserSlice.actions;

const SuperUserReducer = SuperUserSlice.reducer
export default SuperUserReducer
