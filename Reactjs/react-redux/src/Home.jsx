import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
    // const value = 20;
    const dispatch = useDispatch();

    const value = useSelector(state => state.custom.c)
    const {c} = useSelector(state => state.custom)
    const otherState = useSelector(state => state.other.alpha)

    const addition = ()=>{
        dispatch({
            type: "increment"
        })
    }

    const addValue = ()=>{
        dispatch({
            type: "incrementByValue",
            payload: 30
        })
    }
  return (
    <div>
        <div>{value}</div>
        <div>{c}</div>
        <button onClick={addition}>Increment</button>
        <button onClick={()=> dispatch({type: "decrement"})}>Decrement</button>
        <button onClick={addValue}>Add 30</button>

        <div>{otherState}</div>
        <button onClick={()=> dispatch({type: "addA"})}>Add a</button>
        <button onClick={()=> dispatch({type: "addB"})}>Add b</button>
    </div>
  )
}

export default Home