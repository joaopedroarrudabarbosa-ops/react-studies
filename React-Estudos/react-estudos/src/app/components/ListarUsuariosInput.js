'use client'
import { useState } from "react"

export default function ListarUsuariosInput () {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [usuarios, setUsuarios] = useState([])

    function alterarNome (e) {
        setNome(e.target.value)
    }

    function alterarEmail (e) {
        setEmail(e.target.value)
    }

    function alterarTelefone (e) {
        setTelefone(e.target.value)
    }

    const listUsuarios = usuarios.map((usuario) => {
        return (
            <div key={usuario.email}>
                <p>Nome: {usuario.nome}</p>
                <p>Email: {usuario.email}</p>
                <p>Telefone: {usuario.telefone}</p>
            </div>
        )
    })

    function cadastrar (e) {
        e.preventDefault()
        if (!nome.trim()) {
            return
        }
        if (!email.trim()) {
            return
        }
        if (!telefone.trim()) {
            return 
        }
        const novoUsuario = {
            nome,
            email,
            telefone
        }
        setUsuarios([...usuarios, novoUsuario])
        setNome("")
        setEmail("")
        setTelefone("")
    }

    return (
        <div>
            <h2>Sistema de Cadastro</h2>
            <form onSubmit={cadastrar}>
                <input 
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={alterarNome}
                    value={nome}
                />
                
                <br />

                <input 
                    type="text"
                    placeholder="Digite seu email"
                    onChange={alterarEmail}
                    value={email}
                />

                <br />

                <input 
                    type="text"
                    placeholder="Digite seu telefone"
                    onChange={alterarTelefone}
                    value={telefone}
                />

                <br />

                <button type="submit">Cadastrar</button>
            </form>

            <br />
            <h2>Usuários: </h2>
            <br />
            {listUsuarios}
        </div>
    )
}