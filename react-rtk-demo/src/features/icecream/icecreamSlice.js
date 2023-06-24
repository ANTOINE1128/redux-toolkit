import {createSlice} from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../cake/cakeSlice'
const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered , (state) => {
      state.numOfIcecreams--;
    })
  }
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;


// step 1 create a  file for the slice ex icecreamSlice.js 
//import createSlice from redux toolkit
// assign the createSlice to a constant 
//step 2 add a name for the createSlice it accepts an object an argument
//step 3 create the initial state for the slice, than add the initial state in the createSlice object 
//step 4 define the reducers mapping 
//step 5 export the reducers as default export and the actions as named export 
//step 6 import the reducers in store.js and attach it to the store 
//final step import  the actions in index.js and dispatch them 