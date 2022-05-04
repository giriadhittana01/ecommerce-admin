import { applyMiddleware, combineReducers, compose, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import UserReducer from './user/UserReducer'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ProductReducer from './product/ProductReducer';
  
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};
const rootReducer = combineReducers({ user: UserReducer, product : ProductReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
},compose(applyMiddleware(thunk)))

export let persistor = persistStore(store);