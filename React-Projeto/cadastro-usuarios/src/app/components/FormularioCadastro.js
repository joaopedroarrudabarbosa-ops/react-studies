'use client'
import { useState } from "react"

export default function FormularioCadastro () {
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    
    function alterarEmail (e) {
        setEmail(e.target.value)
    }

    function alterarNome (e) {
        setNome(e.target.value)
    }

    function alterarTelefone (e) {
        setTelefone(e.target.value)
    }

    function cadastrar () {
        setEmail("")
        setNome("")
        setTelefone("")
    }

    return (
        <div>
            <h2>Nome</h2>
            <input 
                type="text"
                placeholder="Digite seu nome"
                onChange={alterarNome}
                value={nome}
            />

            <br />
            <br />

            <h2>Email</h2>
            <input 
                type="text"
                placeholder="Digite seu email"
                onChange={alterarEmail}
                value={email}
            />

            <br />
            <br />            

            <h2>Telefone</h2>
            <input 
                type="text"
                placeholder="Digite seu telefone"
                onChange={alterarTelefone}
                value={telefone}
            />

            <br />
            <br />

            <button onClick={cadastrar}>Cadastrar</button>
        </div>
    )
}