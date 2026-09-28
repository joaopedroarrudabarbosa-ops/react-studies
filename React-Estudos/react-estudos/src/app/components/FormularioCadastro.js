'use client'
import { useState } from "react"

export default function FormularioCadastro () {
    const [nome, setNome] = useState("")

    function alterarNome (event) {
        setNome(event.target.value)
    }

    function enviar (event) {
        event.preventDefault()
        setNome("")
    }

    return (
        <div>
            <h2>Cadastro</h2>

            <form onSubmit={enviar}>
                <input 
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={alterarNome}
                    value={nome}
                />
                <button type="submit">Enviar</button>
            </form>

        </div>
    )
}