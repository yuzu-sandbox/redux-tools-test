import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit"
import { RootState } from "./index"

export type State = {
  value: number
}

const initialState: State = {
  value: 0
}

const counterModule = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: State) => {
      state.value += 1
    },
    decrement: (state: State) => {
      state.value -= 1
    },
    reset: (state: State, action: PayloadAction<{ reset: number }>) => {
      state.value = action.payload.reset
    }
  }
})

// selector
const counterSelector = (state: RootState) => state.counter
export const displayValue = createSelector([counterSelector],(state: State) => {
  console.log('state is ', state)
  return state.value % 3 === 0 ? "hoge" : "fuga"
})

export const { actions: counterActions } = counterModule
export default counterModule
