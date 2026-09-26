import Saudacao from "./components/Saudacao";
import Produto from "./components/Produto"
export default function Home () {
//LOGICA
const nomeAluno1 = "Joao"
const idadeAluno1 = 19
const cursoAluno1 = "Engenharia de Software"

const nomeAluno2 = "Lucas"
const idadeAluno2 = 21
const cursoAluno2 = "ADS"

const nomeAluno3 = "Miguel"
const idadeAluno3 = 19
const cursoAluno3 = "ADM"

const modelo = "Macbook Air"
const categoria = "Notebook"
const preco = 7999
const unidades = 12

//INTERFACE
  return (
    <div>
      <h1>Estudando React</h1>
      <br />
      <Saudacao nome={nomeAluno1} idade={idadeAluno1} />
      <br />
      <Saudacao nome={nomeAluno2} idade={idadeAluno2} curso={cursoAluno2}/>
      <br />
      <Saudacao nome={nomeAluno3} idade={idadeAluno3} curso={cursoAluno3}/>
      <br />
      <br />
      <Produto modelo={modelo} categoria={categoria} preco={preco} estoque={unidades}/>
      <br />
      <Produto modelo={modelo} preco={preco} estoque={unidades}/>
      <br />
      <Produto modelo="Macbook Pro" categoria={categoria} preco={18.999} estoque={5}/>
    </div>
  )
}