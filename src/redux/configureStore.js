import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import productReducer from "./reducers/productReducer";
import profileReducer from "./reducers/profileReducer";
import UserUpdateReducer from "./reducers/UserUpdateReducer";
export const store = configureStore({
    reducer: {
        user: authReducer,
        product: productReducer,
        profile: profileReducer,
        updateProfile: UserUpdateReducer
    },
});
export default store;