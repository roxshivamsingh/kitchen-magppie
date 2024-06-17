import { combineReducers } from '@reduxjs/toolkit';

import UserReducer from './slices/User.slice';
import KitchenReducer from './slices/Kitchen.slice';
import ProjectReducer from './slices/Project.slice';
import SuperUserReducer from './slices/SuperUser.slice';

const CmsReducers = combineReducers({
    Users: UserReducer,
    Kitchens: KitchenReducer,
    Projects: ProjectReducer,
    SuperUsers: SuperUserReducer
})

export default CmsReducers
