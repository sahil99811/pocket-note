import { combineReducers } from "@reduxjs/toolkit";

import noteReducer from '../slices/noteSlice';
import groupReducer from '../slices/groupSlice';

// Combine reducers for note and group into a single rootReducer
const rootReducer = combineReducers({
    note: noteReducer,
    group: groupReducer
});

export default rootReducer;
