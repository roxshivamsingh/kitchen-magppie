import { configureStore } from '@reduxjs/toolkit';

import { UserReducer } from './slices/user.slice';


export const store = configureStore({
    reducer: {
        user: UserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // thunk: {},
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
