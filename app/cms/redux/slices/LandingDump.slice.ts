import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TComponentItem } from '../../../../types';

interface ILandingDumpSlice {
    value: TComponentItem[];
    status: 'loading' | 'success' | 'failed';
    loading: boolean,
    error: null | string | undefined;
}

const initialState: ILandingDumpSlice = {
    loading: true,
    value: [],
    // value: _LANDINGDump_COMPONENTS,
    status: 'loading',
    error: null,
};

type TAction = PayloadAction<TComponentItem[]>
const LandingDumpSlice = createSlice({
    name: 'LandingDump',
    initialState,
    reducers: {
        setLandingDump: (state, action: TAction) => {
            state.status = 'success';
            state.loading = false;
            state.value = action.payload;
        },
    },
});

export const { setLandingDump } = LandingDumpSlice.actions;

export const LandingDumpReducer = LandingDumpSlice.reducer
