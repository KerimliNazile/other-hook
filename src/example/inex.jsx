import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}


function Example() {
    const [state, dispatch] = useReducer(reducer, { count: 1 })
    function increment() {
        dispatch({ type: "increment" });
    }
    function decrement() {
        dispatch({ type: "decrement" });
    }
    return (
        <>
            <button onClick={increment}>+</button>
            <div>deyerim:{state.count}</div>
            <button onClick={decrement}>-</button>
        </>
    );
}

export default Example
