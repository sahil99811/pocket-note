import { createSlice } from "@reduxjs/toolkit";

// Retrieve stored groups from local storage or initialize as an empty array
const storedGroups = localStorage.getItem("groupData");
const initialState = {
    groups: storedGroups ? JSON.parse(storedGroups) : [], // Parse storedGroups if it exists, otherwise initialize as empty array
    selectedGroup: null // Initially no group is selected
};

// Create a group slice
const groupSlice = createSlice({
    name: "group", // Name of the slice
    initialState: initialState, // Initial state
    reducers: {
        // Reducer to set groups data
        setGroups(state, action) {
            state.groups = action.payload; // Update groups array with payload data
        },
        // Reducer to set selected group
        setSelectedGroup(state, action) {
            state.selectedGroup = action.payload; // Update selectedGroup with payload data
        }
    }
});

// Export actions generated by createSlice
export const { setGroups, setSelectedGroup } = groupSlice.actions;

// Export the reducer generated by createSlice
export default groupSlice.reducer;
