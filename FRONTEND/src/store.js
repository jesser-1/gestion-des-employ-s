import {configureStore} from '@reduxjs/toolkit';
import employeReducer from './features/employe';
export const store = configureStore ({
    reducer : {
        employe: employeReducer,
    }
})