import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {persistConfig} from '../persist/persistConfig';

import userReducer from './user/userSlice';
import apartmentsReducer from './apartments/apartmentsSlice';
import newsReducer from './news/newsSlice';
import cottagesReducer from './cottages/cottagesSlice';

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  cottages: cottagesReducer,
  apartments: apartmentsReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
