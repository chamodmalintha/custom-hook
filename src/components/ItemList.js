import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import Item from './Item'
import { useClick } from '../hooks/useClick'

export const ItemList = () => {
    const {items, isLoading, error} = useFetch("https://pokeapi.co/api/v2/ability")
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

        <h2>ItemList</h2>
        
        {/* commented line */}
        {/* <button onClick={clickMe}>More info</button> */}

        {isLoading ? <p>Loading...</p> : error ? <p>Error!!</p> : (
            items && items.map(item => (
                <Item name = {item.name} key={item.name}/>
            ))
        )}

    </div>
  )
}
