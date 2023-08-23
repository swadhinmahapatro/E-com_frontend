import {createSlice} from "@reduxjs/toolkit";

const initialState={
    userInfoInfo:null,
    loading:false,
    error:null,
};
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginStart:(state,action)=>{
            state.loading=true;
            state.userInfo=null;
            state.error=null;
        },
        loginSuccess:(state,action)=>{
            state.userInfo=action.payload;
            state.loading=false;
            state.error=null;
        },
        loginFailure:(state,action)=>{
            state.userInfo=null;
            state.error=action.payload;
            state.loading=false;
        },
    },
});

export const {loginSuccess,loginFailure}=authSlice.actions;
export default authSlice.reducer;