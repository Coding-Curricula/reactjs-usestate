import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const handlePlus = () => {
        setCount(count + 1)
    }

    const handleMinus = () => {
        setCount(count - 1)
    }

    return (
        <>
            <button onClick={handlePlus}>+</button>
            <span>{count}</span>
            <button onClick={handleMinus}>-</button>
        </>
    )
}
