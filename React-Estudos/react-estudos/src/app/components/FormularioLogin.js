'use client'
import { useState } from "react"

export default function FormularioLogin () {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

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
    }

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={login}>
                <input 
                    type="text"
                    placeholder="Digite seu email"
                    onChange={alterarEmail}
                    value={email}
                />

                <br />

                <input 
                    type="password"
                    placeholder="Digite sua senha"
                    onChange={alterarSenha}
                    value={senha}
                />

                <br />

                <button type="submit">Login</button>

            </form>

        </div>
    )
}