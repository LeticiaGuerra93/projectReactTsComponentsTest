import { useRef, useState } from 'react'
import { useAdicionarParticipante } from '../../state/hook/useAdicionarParticipante'
import { useMensagemDeErro } from '../../state/hook/useMensagemDeErro'
import './style.css'

const Formulario = () => {
  const [nome, setNome] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipante()
  const mensagemErro = useMensagemDeErro()

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }
  return (
    <form onSubmit={adicionarParticipante}>
      <div className="grupo-input-btn">
        <input
          type="text"
          placeholder="Insira os nomes dos participantes"
          ref={inputRef}
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <button disabled={!nome}>Adicionar</button>
      </div>
      {mensagemErro && <p role="alert">{mensagemErro}</p>}
    </form>
  )
}

export default Formulario
