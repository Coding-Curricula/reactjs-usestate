import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [counterInfo, setCounterInfo] = useState({
        incrementCount: 0,
        decrementCount: 0
    })
    const [history, setHistory] = useState([])

    const handlePlus = () => {
        setCount(count + 1)
        /* The `setCounterInfo` function is updating the state of the `counterInfo` variable. It is creating a
        new object by spreading the properties of the current `counterInfo` object, and then updating the
        `incrementCount` property by incrementing its value by 1. This allows you to keep track of the
        number of times the plus button has been clicked. */
        setCounterInfo({
            ...counterInfo,
            incrementCount: counterInfo.incrementCount + 1
        })
        setHistory([...history, count + 1])
    }

    const handleMinus = () => {
        setCount(count - 1)
        setCounterInfo({
            ...counterInfo,
            decrementCount: counterInfo.decrementCount + 1
        })
        setHistory([...history, count - 1])
    }

    return (
        <>
            <button onClick={handlePlus}>+</button>
            <span>{count}</span>
            <button onClick={handleMinus}>-</button>
            <div>
                <p>Increments: {counterInfo.incrementCount}</p>
                <p>Decrements: {counterInfo.decrementCount}</p>
            </div>
            <div>
                <p>History: {history.join(" , ")}</p>
            </div>
        </>
    )
}
