const Description = (props) => {

    // props = {} é um objeto
    // propriedades -> chaves dos valoes
    // props.nome = "Diego"


  return (
    <div>
        <p>Seu nome é {props.name}</p>
        <p>Você tem: {props.age} anos de idade.</p>
    </div>
  )
}

export default Description