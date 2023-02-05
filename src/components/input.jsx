import { useState } from "react"

export const Input = () => {
    let [input, setInput] = useState("no text")
    return(
        <>
        <input type="text" onChange={(evt) => setInput(evt.target.value)} />
        <h1>{input}</h1>
        </>

    )
}