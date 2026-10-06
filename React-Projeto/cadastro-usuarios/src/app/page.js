'use client'
import { useState } from "react";
import InputText from "./components/InputText"
import Button from "./components/Button"
import UserList from "./components/UserList";
import FilterInput from "./components/FilterInput";

export default function Home () {
  const [email, setEmail] = useState("")
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [erroEmail, setErroEmail] = useState(false)
  const [erroNome, setErroNome] = useState(false)
  const [erroTelefone, setErroTelefone] = useState(false)
  const [usuarios, setUsuarios] = useState([])
  const [buscar, setBuscar] = useState("")

  function handleNomeChange(e) {
    setNome(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleTelefoneChange(e) {
      setTelefone(e.target.value)
  }

  function handleCadastrar (e) {
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
            id: Date.now(),
            nome,
            email,
            telefone
    }
    setUsuarios([...usuarios, novoUsuario])
    setNome("")
    setEmail("")
    setTelefone("")
  }

  function handleBuscarChange(e) {
    setBuscar(e.target.value)
  }

  const usuariosFiltrados = usuarios.filter((usuario) => {
    return (
      usuario.nome.toLowerCase().includes(buscar.toLowerCase()) ||
      usuario.email.toLowerCase().includes(buscar.toLowerCase()) ||
      usuario.telefone.toLowerCase().includes(buscar.toLowerCase()) 
    )
  })

  function handleExcluir (id) {
    const usuariosRestantes = usuarios.filter((usuario) => {
      return usuario.id !== id
    })

    setUsuarios(usuariosRestantes)

  }

  return (
    <div>
      <h1>CADASTRO DE USUÁRIOS</h1>
      <br />
      <form onSubmit={handleCadastrar}>
        <InputText 
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          onChange={handleNomeChange} 
          value={nome}
          error={erroNome}
          erroMensagem="Nome obrigatório"
        />

        <InputText 
          label="Email"
          type="email" 
          placeholder="Digite seu email"
          onChange={handleEmailChange} 
          value={email}
          error={erroEmail}
          erroMensagem="Email obrigatório"
        />

        <InputText 
          label="Telefone"
          type="text" 
          placeholder="Digite seu telefone"
          onChange={handleTelefoneChange} 
          value={telefone}
          error={erroTelefone}
          erroMensagem="Telefone obrigatório"
        />

        <Button 
          type="submit"
          text="Cadastrar"
        />

      </form>

      <FilterInput 
        type="text"
        placeholder="Buscar por nome, email ou telefone"
        value={buscar}
        onChange={handleBuscarChange}
      />

      <UserList 
        usuarios={usuariosFiltrados} 
        onExcluir={handleExcluir}
      />

    </div>
  )
}