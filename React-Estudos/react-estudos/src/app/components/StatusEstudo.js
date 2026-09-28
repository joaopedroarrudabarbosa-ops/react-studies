'use client'
import { useState } from "react"
export default function StatusEstudo () {
    const [status, setStatus] = useState("Não iniciado")
    function iniciarStatus () {
        setStatus("Estudo iniciado")
    }
    function pausarStatus () {
        setStatus("Estudo pausado")
    }
    return (
        <div>
            <h2>Status de Estudo</h2>
            <h2>{status}</h2>
            <button onClick={iniciarStatus}>Iniciar estudo</button>
            <br />
            <button onClick={pausarStatus}>Pausar estudo</button>
        </div>
    )
}