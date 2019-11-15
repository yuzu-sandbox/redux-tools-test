import counterModule from './counterModule'
import {combineReducers} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  counter: counterModule.reducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer