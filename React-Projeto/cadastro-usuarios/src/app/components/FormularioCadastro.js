'use client'
import { useState } from "react"

export default function FormularioCadastro () {
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [erroEmail, setErroEmail] = useState(false)
    const [erroNome, setErroNome] = useState(false)
    const [erroTelefone, setErroTelefone] = useState(false)
    
    function alterarEmail (e) {
        setEmail(e.target.value)
    }

    function alterarNome (e) {
        setNome(e.target.value)
    }

    function alterarTelefone (e) {
        setTelefone(e.target.value)
    }

    function cadastrar (e) {
        e.preventDefault()
        if (email.trim() === "") {
            setErroEmail(true)
        } else {
            setErroEmail(false)
        }
        if (nome.trim() === "") {
            setErroNome(true)
        } else {
            setErroNome(false)
        }
        if (telefone.trim() === "") {
            setErroTelefone(true)
        } else {
            setErroTelefone(false)
        }
    }

    return (
        <div>
            <h2>Nome</h2>
            <form onSubmit={cadastrar}>
                <input 
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={alterarNome}
                    value={nome}
                />
                {erroNome && <p>Nome obrigatório</p>}

                <br />
                <br />

                <h2>Email</h2>
                <input 
                    type="text"
                    placeholder="Digite seu email"
                    onChange={alterarEmail}
                    value={email}
                />
                {erroEmail && <p>Email obrigatório</p>}

                <br />
                <br />            

                <h2>Telefone</h2>
                <input 
                    type="text"
                    placeholder="Digite seu telefone"
                    onChange={alterarTelefone}
                    value={telefone}
                />
                {erroTelefone && <p>Telefone obrigatório</p>}
                
                <br />
                <br /> 

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}