const Dog = ({name, breed}) => {
    // props.name = name
    // Destructuring => {}, []
  return (
    <div>
        <p>O cachorro se chama {name} e é da raça {breed}.</p>
    </div>
  )
}

export default Dog