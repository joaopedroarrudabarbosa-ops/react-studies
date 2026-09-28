'use client'
import { useState } from "react"

export default function FormularioEmail () {
    const [email, setEmail] = useState("")
    function alterarEmail (event) {
        setEmail(event.target.value)
    }

    return (
        <div>
            <h2>Formulário</h2>

            <input 
                type="text"
                placeholder="Digite seu email"
                onChange={alterarEmail}
            />
            
            <h2>Email: {email}</h2>
        </div>
    )
} 