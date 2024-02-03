import React, { useState } from 'react'
import { useClick } from '../hooks/useClick'

export const Counter = () => {
    const {incremetCounter, decremetCounter} = useClick()
    const [value, setValue] = useState(0);

    const increment = () => {
        const updatedVal = incremetCounter(value);
        setValue(updatedVal)
    }

    const decrement = () => {
        const updatedVal = decremetCounter(value);
        setValue(updatedVal)
    }
  return (
    <div>
        <h2>{value}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
