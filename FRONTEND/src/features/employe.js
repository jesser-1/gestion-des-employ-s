import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice= createSlice({
    name : "employe",
    initialState : {value: {id:"",nom:"",prenom:"",age:"",email:"",position:""}},
    reducers: {
        add: (state, action)=>{
            state.value =action.payload;
        },
    },
});
export const {add} = employeeSlice.actions;
export default employeeSlice.reducer;