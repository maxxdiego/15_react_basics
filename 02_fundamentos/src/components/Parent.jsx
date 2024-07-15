import Child from './Child'

const Parent = () => {
  return (
    <div>
        Componente pai

        {/* Chamando o componente filho */}
        <Child />
        <Child />
    </div>
  )
}

export default Parent