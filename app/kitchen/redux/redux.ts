import { combineReducers } from '@reduxjs/toolkit';

import AuthReducer from './slices/Auth.slice';

const KitchenReducers = combineReducers({
    Auth: AuthReducer,
})

export default KitchenReducers
