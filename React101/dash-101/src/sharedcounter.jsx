import React from 'react'

export default function MyButton3(props) {

    return (
      <div>
        <button onClick={() => props.makeClick(14)}>Button</button>
      </div>
    )

}