import React from 'react'

export default function MyButton3() {

  const handleClick3 = (num) => {
    alert(num + ' abc')
    return () => {
      <p>Return value: {num}</p>
    }

  }
    const num = 3
    return (
      
      <button onClick={() => handleClick3(num)}>Button</button>
      
    )

}