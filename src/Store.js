import {configureStore} from '@reduxjs/toolkit';
import listReducer from './listSlice';
import { config } from 'webpack';


export default configureStore({
    reducer: {
        list: listReducer,
    },
});