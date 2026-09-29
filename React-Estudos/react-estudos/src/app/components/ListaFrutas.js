'use client'
import { useState } from "react"

export default function ListaFrutas () {
    const [frutas, setFrutas] = useState(["Maça", "Banana"])

    const listFrutas = frutas.map((fruta) => {
        return <p key={fruta}>{fruta}</p>
    })

    function adicionarFruta () {
        setFrutas([...frutas, "Uva"])

    }

    return (
        <div>
            <h2>Lista de frutas</h2>
            {listFrutas}
            <br />
            <button onClick={adicionarFruta}>Adicionar uva</button>
        </div>
    )
}