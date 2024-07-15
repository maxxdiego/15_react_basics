// Crie um componente funcional chamado Greeting que aceite uma prop "name" e renderize uma mensagem de boas-vindas.
// Por exemplo, se a prop name for "João", o componente deve renderizar "Olá, João!".

import { useState} from 'react'
import styles from './Greeting.module.css'

const Greeting = ({ name }) => {
  return (
    <div className={styles.exOneDiv}>
        <p>Olá, {name}!</p>
    </div>
  )
}

export default Greeting