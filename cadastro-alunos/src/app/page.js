'use client'
import { useState } from "react"
import InputText from "./components/InputText"
import Button from "./components/Button"
import FilterInput from "./components/FilterInput"
import AlunoList from "./components/AlunoList"

export default function Home () {
  const [nome, setNome] = useState("")
  const [curso, setCurso] = useState("")
  const [semestre, setSemetre] = useState("")
  const [erroNome, setErroNome] = useState(false)
  const [erroCurso, setErroCurso] = useState(false)
  const [erroSemestre, setErroSemestre] = useState(false)
  const [alunos, setAlunos] = useState([])
  const [buscar, setBuscar] = useState("")

  function handleChangeNome (e) {
    setNome(e.target.value)
  }

  function handleChangeCurso (e) {
    setCurso(e.target.value)
  }

  function handleChangeSemestre (e) {
    setSemetre(e.target.value)
  }

  function handleCadastrar (e) {
    e.preventDefault()

    const nomeVazio = nome.trim() === ""
    const cursoVazio = curso.trim() === ""
    const semestreVazio = semestre.trim() === ""

    setErroNome(nomeVazio)
    setErroCurso(cursoVazio)
    setErroSemestre(semestreVazio)

    if (nomeVazio || cursoVazio || semestreVazio) {
      return
    }

    const novoCadastro = {
      id: Date.now(),
      nome,
      curso,
      semestre
    }

    setAlunos([...alunos, novoCadastro])
    setNome("")
    setCurso("")
    setSemetre("")
  }

  function handleBuscarChange (e) {
    setBuscar(e.target.value)
  }

  const alunosFiltrados = alunos.filter((aluno) => {
    return (
      aluno.nome.toLowerCase().includes(buscar.toLowerCase()) ||
      aluno.curso.toLowerCase().includes(buscar.toLowerCase()) ||
      aluno.semestre.toLowerCase().includes(buscar.toLowerCase())
    )
  })

  function excluirAlunos (id) {
    const alunosRestantes = alunos.filter((aluno) => {
      return aluno.id !== id
    })

    setAlunos(alunosRestantes)

  }

  return (
    <div>
      <h1>CADASTRO DE ALUNOS</h1>
      <form onSubmit={handleCadastrar}>
        <InputText 
          type="text"
          placeholder="Digite seu nome"
          onChange={handleChangeNome}
          value={nome}
          error={erroNome}
          erroMensagem="Nome obrigatório"
        />

        <InputText 
          type="text"
          placeholder="Digite seu curso"
          onChange={handleChangeCurso}
          value={curso}
          error={erroCurso}
          erroMensagem="Curso obrigatório"
        />

        <InputText 
          type="text"
          placeholder="Digite seu semestre"
          onChange={handleChangeSemestre}
          value={semestre}
          error={erroSemestre}
          erroMensagem="Semestre obrigatório"
        />

        <Button 
          type="submit"
          text="Cadastrar"
        />

      </form>

      <FilterInput 
        type="text"
        placeholder="Buscar por nome, curso ou semestre"
        value={buscar}
        onChange={handleBuscarChange}
      />

      <AlunoList 
        alunos={alunosFiltrados}
        onExcluir={excluirAlunos}
      />

    </div>
  )
}