import {createSlice} from "@reduxjs/toolkit";


export const changes = createSlice({
        name: "info",
        initialState: {
            value: {
                table:[1,2,3,4,5,16,0,0,0,6,15,0,0,0,7,14,0,0,0,8,13,12,11,10,9],
                money: 0,
            }
        },
        reducers: {
            circleDone:(state, action) => {
                state.value.money += 200
            },
        }
        ,
    })
;

export const {circleDone,roll} = changes.actions;
export default changes.reducer