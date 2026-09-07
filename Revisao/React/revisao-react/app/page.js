import Contador from "./componentes/contador"
import Saudacao from "./componentes/saudacao"

export default function Home() {
  return (
      <>
        <Contador />
        <Saudacao />
        <Saudacao nome="Joao" />
      </>
  )
}
