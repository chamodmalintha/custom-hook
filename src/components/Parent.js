import React from 'react'

const Parent = (props) => {
  return (
    <div>
        <h2>Parent Component - props.children Example</h2>
        {props.children}
    </div>
  )
}

export default Parent;
