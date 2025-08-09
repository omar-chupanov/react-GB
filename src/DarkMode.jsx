import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE":
            const newState = !state;
            document.body.style.backgroundColor = newState ? 'green' : 'white'

            return newState;


        default:
            return state;
    }
}

export default function DarkMode() {
    const [state, dispatch] = useReducer(reducer, false);

    return (

        <button onClick={() => dispatch({ type: "TOGGLE" })}>{state ? '☀️ Светлая тема' : '🌙 Тёмная тема'}</button>

    )
}