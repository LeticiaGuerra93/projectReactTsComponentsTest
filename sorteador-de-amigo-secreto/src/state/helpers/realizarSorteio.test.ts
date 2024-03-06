import { realizarSorteio } from './realizarSorteio'

describe('dado um sorteio de amigo secreto', () => {
  test('cada participante não sorteie o próprio nome', () => {
    const participantes = [
      'Ana Pompom',
      'Duggue',
      'Marsha',
      'Urso',
      'Cuquin',
      'Cleo',
    ]

    const sorteio = realizarSorteio(participantes)
    participantes.forEach((part) => {
      const amigoSecreto = sorteio.get(part)
      expect(amigoSecreto).not.toEqual(part)
    })
  })
})
