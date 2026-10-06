'use client'
import { useState } from "react"

export default function BuscaUsuarios () {
    const [buscar, setBuscar] = useState("")

    function handleBuscar (e) {
        setBuscar(e.target.value)
    }

const usuarios = [
    { nome: "João", email: "joao@email.com" },
    { nome: "Lucas", email: "lucas@email.com" },
    { nome: "Julia", email: "julia@email.com" },
    { nome: "Pedro", email: "pedro@email.com" }
]

const usuariosFiltrados = usuarios.filter((usuario) => {
    return (
        usuario.nome.toLowerCase().includes(buscar.toLowerCase()) ||
        usuario.email.toLowerCase().includes(buscar.toLowerCase())
    )
})

const filtrados = usuariosFiltrados.map((usuario) => {
    return (
        <div key={usuario.email}>
            <p>Nome: {usuario.nome}</p>
            <p>Email: {usuario.email}</p>
        </div>
    )
})

    return (
        <div>
            <input 
                type="text"
                placeholder="Buscar"
                onChange={handleBuscar}
                value={buscar}
            />

            {filtrados}
        </div>
    )
}