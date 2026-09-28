'use client'
import { useState } from "react"

export default function StatusLogin () {
    const [logado, setLogado] = useState(false)

    return (
        <div>
            <h2>Inicial: {logado ? "Usuário logado" : "Usúario deslogado"}</h2>
            <button onClick={() => setLogado(true)}>Entrar</button>
            <br />
            <button onClick={() => setLogado(false)}>Sair</button>
        </div>
    )
}