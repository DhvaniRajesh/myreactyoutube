import { createSlice } from "@reduxjs/toolkit";


const navSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpenFlag:true,
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpenFlag = !state.isMenuOpenFlag;
        },
        closeMenu: (state)=>{
            state.isMenuOpenFlag = false;
        }
    }
}
    
)

export const {toggleMenu, closeMenu} = navSlice.actions;

export default navSlice.reducer;
