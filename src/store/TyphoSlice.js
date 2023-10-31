import { createSlice } from "@reduxjs/toolkit";

const Typhography=createSlice({
    name:"Typho",
    initialState:{
            edit:{
                family:'Roboto',
                size:24,
                weight:100,
                transform:"none",
                style:"none",
                decoration:"none",
                lineHeight:1.2,
                letterSpacing:0,
                wordSpacing:0
            }
    },
    reducers:{
        reload:(state,action)=>{
            state.edit={
                family:'Roboto',
                size:24,
                weight:100,
                transform:"none",
                style:"none",
                decoration:"none",
                lineHeight:1.2,
                letterSpacing:0,
                wordSpacing:0
            }
        },
        addSize:(state,action)=>{
            state.edit.size=action.payload
        },
        addFamily:(state,action)=>{
            state.edit.family=action.payload
        },
        addWeight:(state,action)=>{
            state.edit.weight=action.payload
        },
        addTransform:(state,action)=>{
            state.edit.transform=action.payload
        },
        addDecoration:(state,action)=>{
            state.edit.decoration=action.payload
        },
        addLineHeight:(state,action)=>{
            state.edit.lineHeight=action.payload
        },
        addletterSpacing:(state,action)=>{
            state.edit.letterSpacing=action.payload
        },
        addWordSpacing:(state,action)=>{
            state.edit.wordSpacing=action.payload
        },


    }
})

export const{addSize,addFamily,addWeight,addTransform,addDecoration,addLineHeight,addletterSpacing,addWordSpacing,reload}= Typhography.actions
export default Typhography.reducer