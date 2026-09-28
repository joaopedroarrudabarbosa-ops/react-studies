'use client'
import { useState } from "react"

export default function ValidacaoLogin () {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erroEmail, setErroEmail] = useState(false)
    const [erroSenha, setErroSenha] = useState(false)

    function alterarEmail (e) {
        setEmail(e.target.value)
    }

    function alterarSenha (e) {
        setSenha(e.target.value)
    }

    function login (e) {
        e.preventDefault()
        setEmail("")
        setSenha("")
        if (email.trim() === "") {
            setErroEmail(true)
        } else {
            setErroEmail(false)
        }
        if (senha.trim() === "") {
            setErroSenha(true)
        } else {
            setErroSenha(false)
        }
    }

    return (
        <div>
            <h2>Sistema de Login</h2>
            <form onSubmit={login}>
                <input 
                    type="text"
                    placeholder="Digite seu email"
                    onChange={alterarEmail}
                    value={email}
                />
                {erroEmail && <p>Email inválido</p>}
                <br />
                <input 
                    type="password"
                    placeholder="Digite sua senha"
                    onChange={alterarSenha}
                    value={senha}
                />
                {erroSenha && <p>Senha inválida</p>}
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}