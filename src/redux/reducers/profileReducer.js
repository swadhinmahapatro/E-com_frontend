import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    userData:[],
    userDataLoading:false,
    userDataError:null,
};
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        userDataFetchStart:(state,action)=>{
            state.userDataLoading=true;
            state.userDataError=null;
            state.userData=[];
        },
        userDataFetchSuccess:(state,action)=>{
            state.userData=action.payload;
            state.userDataLoading=false;
            state.userDataError=null;
        },
        userDataFetchError:(state,action)=>{
            state.userData=[];
            state.userDataLoading=false;
            state.userDataError=action.payload;
        },
        resetUserState:(state,action)=>{
            state.userData=[];
            state.userDataLoading=false;
            state.userDataError=null;
        },
    }
})
export const {
    userDataFetchStart,
    userDataFetchSuccess,
    userDataFetchError,
    resetUserState,
}=userSlice.actions;
export default userSlice.reducer;