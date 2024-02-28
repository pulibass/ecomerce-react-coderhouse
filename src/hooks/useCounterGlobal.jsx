import { useState } from "react";

function useCounterGlobal(initialValue = 0, maxValue = 1, step = 1) {
    const [count, setCount] = useState(initialValue)

    const increment = () => {
        if (count + step <= maxValue)
            setCount(count + step)
    }

    const decrement = () => {
        if (count - step >= 1) {
            setCount(count - step)
        }
    }

    const reset = () => {
        setCount(1)
    }

    return { count, increment, decrement, reset }

}

export default useCounterGlobal