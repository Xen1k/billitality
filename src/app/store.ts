import { combineReducers, configureStore } from '@reduxjs/toolkit';
import personsSpendingReducer from '../pages/Calculation/PersonSpending/personsSpendingSlice';

const rootReducer = combineReducers({ personsSpendingReducer });


export type AppState = ReturnType<typeof store.getState>;

export const store = configureStore({ reducer: rootReducer });