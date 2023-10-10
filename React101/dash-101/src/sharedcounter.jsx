import React from 'react'
import { useState } from 'react';

export default function MyButton3() {

  const [count_shared, setcount_shared] = useState(0);
  const handleClick3 = (num) => {
    setcount_shared(count_shared + 1)
    alert(num + ' is the number passed in.  Press count = ' + count_shared)
    return () => {
      <p>Return value: {num}</p>
    }

  }
    const num = 3
    return (
      
      <button onClick={() => handleClick3(num)}>{num} Button pressed {count_shared}</button>
      
    )

}