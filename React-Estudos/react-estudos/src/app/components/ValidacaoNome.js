'use client'
import { useState } from "react"

export default function ValidacaoNome () {
    const [nome, setNome] = useState("")
    const [erroNome, setErroNome] = useState(false)

    function alterarNome (e) {
        setNome(e.target.value)
    }

    function cadastrar (e) {
        e.preventDefault()
        setNome("")
        if (nome.trim() === "") {
            return setErroNome(true)
        } else {
            return setErroNome(false)
        }
    }

    return (
        <div>
            <form onSubmit={cadastrar}>
                <input 
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(alterarNome)}
                    value={nome}
                />
                {erroNome && <p>Nome inválido</p>}
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}