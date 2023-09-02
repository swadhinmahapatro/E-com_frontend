import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UpdateduserData:[],
    UpdateduserDataLoading:false,
    UpdateduserDataError:null,
};
const UpdateuserSlice=createSlice({
    name:"updateUSer",
    initialState,
    reducers:{
        updateDataFetchStart:(state,action)=>{
            state.UpdateduserDataLoading=true;
            state.UpdateduserDataError=null;
            state.UpdateduserData=[];
        },
        updateDataFetchSuccess:(state,action)=>{
            state.UpdateduserData=action.payload;
            state.UpdateduserDataLoading=false;
            state.UpdateduserDataError=null;
        },
        updateDataFetchError:(state,action)=>{
            state.UpdateduserData=[];
            state.UpdateduserDataLoading=false;
            state.UpdateduserDataError=action.payload;
        },
        resetupdateUserState:(state,action)=>{
            state.UpdateduserData=[];
            state.UpdateduserDataLoading=false;
            state.UpdateduserDataError=null;
        },
    }
})
export const{
    updateDataFetchStart,
    updateDataFetchSuccess,
    updateDataFetchError,
    resetupdateUserState,   
}=UpdateuserSlice.actions;
export default UpdateuserSlice.reducer;