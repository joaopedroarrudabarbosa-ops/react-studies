'use client'
import { useState } from "react";
import InputText from "./components/InputText"
import Button from "./components/Button"
import UserList from "./components/UserList";

export default function Home () {
  const [email, setEmail] = useState("")
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [erroEmail, setErroEmail] = useState(false)
  const [erroNome, setErroNome] = useState(false)
  const [erroTelefone, setErroTelefone] = useState(false)
  const [usuarios, setUsuarios] = useState([])

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
            nome,
            email,
            telefone
    }
    setUsuarios([...usuarios, novoUsuario])
    setNome("")
    setEmail("")
    setTelefone("")
  }

  function handleExcluir () {

  }

  function handleEditar () {

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

      <UserList usuarios={usuarios} />

    </div>
  )
}