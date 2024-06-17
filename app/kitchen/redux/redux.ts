import { combineReducers } from '@reduxjs/toolkit';

import UserReducer from './slices/User.slice';

const KitchenReducers = combineReducers({
    Users: UserReducer,
})

export default KitchenReducers
