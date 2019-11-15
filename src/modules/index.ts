import counterModule from './counterModule'
import {combineReducers} from '@reduxjs/toolkit'
import anotherModule from "./anotherModule"

const rootReducer = combineReducers({
  counter: counterModule.reducer,
  another: anotherModule.reducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer