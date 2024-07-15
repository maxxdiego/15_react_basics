import Child from './Child'

const Father = () => {
  return (
    <div>
        Componente pai

        {/* Chamando o componente filho */}
        <Child />
        <Child />
    </div>
  )
}

export default Father