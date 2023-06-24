import { configureStore } from '@reduxjs/toolkit';
//const reduxLogger = require('redux-logger');
import  cakeReducer  from '../features/cake/cakeSlice';
import  icecreamReducer from'../features/icecream/icecreamSlice';
//const { getDefaultMiddleware } = require('@reduxjs/toolkit');
//const logger = reduxLogger.createLogger()
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,

    },
   // middleware:(getDefaultMiddleware => getDefaultMiddleware().concat(logger)),
});
export default store;