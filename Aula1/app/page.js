// AULA 1

// export default function Home() {

// // Logica do componente
// const nome = "Joao"
// const pontos = 1

// const ativo = true;
// const estilo = { padding: '8px', borderRadius: '6px' };

// const Botao = ({ texto }) => <button>{texto}</button>;
// const BotaoGrande = ({texto,ativo}) => {
//   const classeAtivo = "btn btn-large btn-primary"
//   const classeInativo = "btn btn-large btn-outline"
//   return <button className={ativo ? classeAtivo : classeInativo}>{texto}</button>
// }

// const url = 'https://react.dev';
// const contagem = 3;

// function Saudacao({ nome = 'Visitante', dia = 'hoje' }) {
//   return <h2>Olá, {nome}! Como vai {dia}?</h2>;
// }


//   return (
//     <>
//     {/* Componentes visuais */}
//     <div>
//       <h1>
//         Olá {nome}!
//         {nome === 'Joao' && <p>Que bom ver você aqui!</p>}
//       </h1>

//       <p>
//         {/* Isto exibirá 0 na tela */}
//         {pontos && 'Você tem pontos'}
//       </p>

//       <p>
//         {/* Melhor: evita mostrar 0 */}
//         {pontos > 0 ? 'Você tem pontos' : 'Voce nao tem pontos'}
//       </p>

//       <button
//         style={estilo}
//         className={ativo ? 'btn btn-primary' : 'btn btn-outline'}
//       >
//         Botão
//       </button>

//       <Botao texto="Qualquer coisa" />
//       <BotaoGrande texto="Botao grande" ativo={true} />
//     </div>
//     </>
//   )
// }

// AULA 2

import Contador from "./components/Contador"
import FormNome from "./components/FormNome"
import Relogio from "./components/Relogio"
import Teclado from "./components/Teclado"
import Usuarios from "./components/Usuarios"

export default function Home () {

  return (
    <div>
      <Contador />
      <FormNome />
      <Relogio />
      <Teclado />
      <Usuarios />
    </div>
  )
}