import { combineReducers } from '@reduxjs/toolkit';

import {
    CustomerSiteComponentReducer,
    AuthReducer,
    SuperUserReducer,
    ProjectReducer,
    KitchenReducer,
    UserReducer,
    LandingReducer,
    LandingDumpReducer
} from "./slices"


const CmsReducers = combineReducers({
    Auth: AuthReducer,
    Landing: LandingReducer,
    LandingDump: LandingDumpReducer,
    CustomerSiteComponent: CustomerSiteComponentReducer,
    Users: UserReducer,
    Kitchens: KitchenReducer,
    Projects: ProjectReducer,
    SuperUsers: SuperUserReducer
})

export default CmsReducers
