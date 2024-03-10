import { createSlice } from "@reduxjs/toolkit";
const storedNotes = localStorage.getItem("noteData");
const initialState={
    notesData:storedNotes? JSON.parse(storedNotes) : null
}

const noteSlice=createSlice({
    name:"note",
    initialState:initialState,
    reducers:{
         setNotesData(state,value){
            state.notesData=value.payload;
         }
    }
})
export const { notesData, setNotesData} =noteSlice.actions;

export default noteSlice.reducer;