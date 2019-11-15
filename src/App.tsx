import React from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { counterActions, displayValue } from "./modules/counterModule"
import {anotherAction} from './modules/anotherModule'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const increment = () => dispatch(counterActions.increment())
  const decrement = () => dispatch(counterActions.decrement())
  const reset = () => dispatch(counterActions.reset({ reset: 10 }))
  const anotherIncrement = () => dispatch(anotherAction.increment())

  // const value = useSelector((state: RootState) => state.counter.value)
  const value = useSelector(displayValue)
  console.log("value = ", value)

  return (
    <div className="App">
      <div>{value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset(10)</button>
      <div>
        <button onClick={anotherIncrement}>another</button>
      </div>
    </div>
  )
}

export default App
