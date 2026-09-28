'use client'
import { useState } from "react"

export default function Aviso () {
        const [mostrarAviso, setMostrarAviso] = useState(false)
    return (
        <div>
            {mostrarAviso && <h2>Atenção! esse é um aviso</h2>}
            <button onClick={() => setMostrarAviso(true)}>Mostrar aviso</button>
            <br />
            <button onClick={() => setMostrarAviso(false)}>Esconder aviso</button>
        </div>
    )
}