import { configureStore } from '@reduxjs/toolkit';
import CmsReducers from '../app/cms/redux';
import KitchenReducers from '../app/kitchen/redux';

export const store = configureStore({
    devTools: false,
    reducer: {
        Cms: CmsReducers,
        Kitchen: KitchenReducers
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // thunk: {},
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
