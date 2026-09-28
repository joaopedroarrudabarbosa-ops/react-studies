'use client'
import { useState } from "react"

export default function ControleLuz () {
    const [luz, setLuz] = useState("Luz desligada")
    function ligarLuz () {
        setLuz("Luz ligada") 
    }
    function desligarLuz () {
        setLuz("Luz desligada")
    }
    return (
        <div>
            <h2>Status da Luz: {luz}</h2>
            <button onClick={ligarLuz}>Ligar luz</button>
            <br />
            <button onClick={desligarLuz}>Desligar luz</button>
        </div>
    )
}