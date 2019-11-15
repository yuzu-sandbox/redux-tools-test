import {createSlice, PayloadAction, createSelector} from "@reduxjs/toolkit"
import {RootState} from "./index"

export type State = {
  value: number
}

const initialState: State = {
  value: 0
}

const anotherModule = createSlice({
  name: "another",
  initialState,
  reducers: {
    increment: (state: State) => {
      state.value += 1
    }
  }
})

// selector
const anotherSelector = (state: RootState) => state.another
export const anotherValue = createSelector([anotherSelector], (state: State) => {
  return state.value
})

export const {actions: anotherAction} = anotherModule
export default anotherModule
