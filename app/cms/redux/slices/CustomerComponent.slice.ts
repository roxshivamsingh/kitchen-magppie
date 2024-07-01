import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TComponentItem } from '../../../../types/component';


interface ICustomerComponentSlice {
    value: TComponentItem[];
    status: 'loading' | 'success' | 'failed';
    loading: boolean,
    error: null | string | undefined;
}

const initialState: ICustomerComponentSlice = {
    loading: true,
    value: [],
    status: 'loading',
    error: null,
};

type TAction = PayloadAction<TComponentItem[]>
const CustomerComponentSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {

        setCustomerComponent: (state, action: TAction) => {
            state.status = 'success';
            state.loading = false;
            state.value = action.payload;
        },

    },
});

export const { setCustomerComponent } = CustomerComponentSlice.actions;

const AuthReducer = CustomerComponentSlice.reducer
export default AuthReducer
