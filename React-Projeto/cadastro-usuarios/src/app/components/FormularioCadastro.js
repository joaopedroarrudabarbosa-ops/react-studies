'use client'
import { useState } from "react"

export default function FormularioCadastro () {
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [erroEmail, setErroEmail] = useState(false)
    const [erroNome, setErroNome] = useState(false)
    const [erroTelefone, setErroTelefone] = useState(false)
    const [usuarios, setUsuarios] = useState([])
    
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

        const nomeVazio = nome.trim() === "" 
        const emailVazio = email.trim() === ""
        const telefoneVazio = telefone.trim() === ""
        setErroNome(nomeVazio)
        setErroEmail(emailVazio)
        setErroTelefone(telefoneVazio)

        if (nomeVazio || emailVazio || telefoneVazio) {
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
    }``

    const listUsuarios = usuarios.map((usuario)=> {
        return (
            <div key={usuario.email}>
                <p>{usuario.nome}</p>
                <p>{usuario.email}</p>
                <p>{usuario.telefone}</p>
            </div>
        )
    }) 

    return (
        <div>
            <form onSubmit={cadastrar}>
                <h2>Nome</h2>
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

            <br />
            <h2>Usuários: </h2>
            <br />
            {listUsuarios}
        </div>
    )
}