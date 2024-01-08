import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import {TypedUseSelectorHook} from 'react-redux';
import {useSelector} from 'react-redux';


const rootReducer = combineReducers(reducers)

export const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;