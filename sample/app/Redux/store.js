import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './Slices/Login'
import StudentAccountCreation from './studentSlices/StudentAccountCreation';
import PostNeedReducer from './studentSlices/PostYouNeed.jsx'
import tutorAccountCreation from './tutorSlices/AccountCreation'
import SidebarReducer from './studentSlices/SideNavBar'
export const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
    StudentAccountCreation,
    tutorAccountCreation,
    sideNavBar: SidebarReducer,
    postNeed: PostNeedReducer
  }
});

