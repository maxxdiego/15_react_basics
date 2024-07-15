// Chamando a função handleClick no OnClick e passando argumento:

// const Button = () => {

//     const handleClick = (num) => {
//         console.log("Clicou!", num)
//     }
//   return (
//     <button onClick={() => handleClick(5)}>Clique em mim!</button>
//   )
// }

const Button = () => {

    const handleClick = () => {
        console.log("Clicou!")
    }
  return (
    <button onClick={handleClick}>Clique em mim!</button>
  )
}

export default Button