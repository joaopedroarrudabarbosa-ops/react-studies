'use client'
import { useState } from "react"

export default function ListaNomesInputs () {
    const [nome, setNome] = useState("")
    const [nomes, setNomes] = useState([])

    function alterarNome (e) {
        setNome(e.target.value)
    }

    const listNomes = nomes.map((nome) => { 
        return <p key={nome}>{nome}</p>
    })

    function cadastrar (e) {
        e.preventDefault()
        if (nome.trim() === "") {
            return
        }
        setNomes([...nomes, nome])
        setNome("")
    }

    return (
        <div>
            <form onSubmit={cadastrar}>
                <input 
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={alterarNome}
                    value={nome}
                />
                <br />
                <button type="submit">Cadastrar</button>
            </form>

            <h2>Lista de nomes</h2>
            {listNomes}


        </div>
    )
}