import { useNavigate } from 'react-router-dom'

import './style.css'
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes'
import { useSorteador } from '../../state/hook/useSorteador'

const Rodape = () => {
  const participantes = useListaDeParticipantes()

  const navegarPara = useNavigate()
  const sortear = useSorteador()

  const iniciar = () => {
    navegarPara('/sorteio')
    sortear()
  }

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={participantes.length < 3}
        onClick={iniciar}
      >
        Iniciar brincadeira
      </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  )
}

export default Rodape
