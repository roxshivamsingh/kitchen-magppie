import { combineReducers } from '@reduxjs/toolkit';

import UserReducer from './slices/User.slice';
import KitchenReducer from './slices/Kitchen.slice';
import ProjectReducer from './slices/Project.slice';
import SuperUserReducer from './slices/SuperUser.slice';
import AuthReducer from './slices/Auth.slice';


const CmsReducers = combineReducers({
    Auth: AuthReducer,
    Users: UserReducer,
    Kitchens: KitchenReducer,
    Projects: ProjectReducer,
    SuperUsers: SuperUserReducer
})

export default CmsReducers
