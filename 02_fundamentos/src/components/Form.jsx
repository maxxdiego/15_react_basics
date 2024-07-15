import {useState} from 'react'

const Form = () => {

    const [value, setValue] = useState("");
    
    const handleSubmit = (event) => {
        // manipulação de dados
        // validação
        // envio ao servidor pela API
        // loading
        // chamada da função de mensagens de erro/sucesso

        event.preventDefault()

        console.log("Formulário enviado: ", value)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}placeholder="Preencha o campo"/>
        <button type="submit">Enviar</button>
    </form>
  )
}

export default Form