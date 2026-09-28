'use client'
import { useState } from "react"

export default function CampoNome () {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    function alterarNome (event) {
        setNome(event.target.value)
    }

    function alterarEmail (event) {
        setEmail(event.target.value)
    }

    function cadastrar () {
        setEmail("")
        setNome("")
    }

    return (
        <div>
            <h2>Cadastro</h2>

            <input 
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={alterarNome}
            />

            <input 
                type="text"
                placeholder="Digite seu email"
                value={email}
                onChange={alterarEmail}
            />

            <h2>Nome: {nome}</h2>
            <h2>Email: {email}</h2>

            <button onClick={cadastrar}>Cadastrar</button>
        </div>
    )
}