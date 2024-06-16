import {
    useDispatch,
    useSelector,
    TypedUseSelectorHook
} from 'react-redux'
import { Dispatch, ThunkDispatch, UnknownAction} from '@reduxjs/toolkit';
import { IUserSlice } from './slices/user.slice';

export type CommonState = {
    user: IUserSlice;
}

export type CommonDispatch = ThunkDispatch<{
    user: IUserSlice;
}, undefined, UnknownAction> & Dispatch<UnknownAction>

export const useCommonDispatch = () => useDispatch<CommonDispatch>()
export const useCommonSelector: TypedUseSelectorHook<CommonState> = useSelector