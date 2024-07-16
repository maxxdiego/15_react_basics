import { useContext } from 'react'
import { MyContext } from '../contexts/MyContext'

const ChildrenComponent = () => {

  const { message, setMessage } = useContext(MyContext)

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage("Nova mensagem!")}>Alterar mensagem</button>
    </div>
  )
}

export default ChildrenComponent