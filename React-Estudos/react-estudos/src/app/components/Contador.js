'use client'
import { useState } from "react"

export default function Contador () {
    const [numero, setNumero] = useState(0)
    return (
        <div>
            <h2>Contador</h2>
            <h2>{numero}</h2>
            <button onClick={() => setNumero(numero+1)}>Aumentar</button>
            <br />
            <button onClick={() => setNumero(numero-1)}>Diminuir</button>
        </div>
    )
}