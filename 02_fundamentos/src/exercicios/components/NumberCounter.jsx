// Crie um componente chamado Counter que renderiza um botão e um texto indicando o número de vezes que o botão foi clicado.
// Por exemplo, se o botão foi clicado 3 vezes, o texto deve mostrar "Você clicou 3 vezes no botão". Inicialize o contador com 0 e incremente-o a cada clique no botão. Adicione um botão que decrementa o valor.

import { useState } from 'react'
import '../../css/output.css'

const NumberCounter = () => {

  const [counter, setCounter] = useState(0)
  return (
    <div className='p-4 m-4 bg-gray-300 rounded-lg'>
      <p className='text-gray-900 font-bold p-4'>Você clicou {counter} vezes no botão!</p>
      <button className='bg-green-700 hover:bg-green-800 m-2 shadow-md focus:outline-none' onClick={() => setCounter(counter + 1)}> + Aumentar</button>
      <button className='bg-red-700 hover:bg-red-800 m-2 shadow-md focus:outline-none'onClick={() => setCounter(counter - 1)}>- Diminuir</button>
    </div>
  )
}

export default NumberCounter