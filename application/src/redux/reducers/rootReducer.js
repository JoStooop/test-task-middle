import {combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import {persistConfig} from "../persist/persistConfig";

import notesReducer from "./notesSlice";

const rootReducer = combineReducers({
  notes: notesReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
