
const NumberList = ({numbers}) => {
    // Não será usado estruturas de loop como for, while, etc.
    // e sim métodos de array - filter, map, reduce, ...

    // Chaves - key
    // é como se fosse um identificador único para cada elemento

  return (
    <div>
        {numbers.map((number, index) => (
            <li key={index}>{ number }</li>
        ))
        }
    </div>
  )
}

export default NumberList