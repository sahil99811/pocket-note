import { combineReducers } from "@reduxjs/toolkit";

import noteReducer from '../slices/noteSlice'
import groupReducer from '../slices/groupSlice'

const rootReducer=combineReducers({
    note:noteReducer,
    group:groupReducer
})

export default rootReducer