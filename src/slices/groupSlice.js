import { createSlice } from "@reduxjs/toolkit";

const storedGroups = localStorage.getItem("groupData");
const initialState = {
    groups: storedGroups ? JSON.parse(storedGroups) : [],
    selectedGroup: null
};

const groupSlice=createSlice({
    name:"group",
    initialState:initialState,
    reducers:{
         setGroups(state,value){
            state.groups=value.payload;
         },
         setSelectedGroup(state,value){
            state.selectedGroup=value.payload
         }
    }
})
export const { groups,setGroups,setSelectedGroup,selectedGroup} =groupSlice.actions;

export default groupSlice.reducer;