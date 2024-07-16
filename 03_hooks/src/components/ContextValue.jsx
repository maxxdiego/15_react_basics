import {useContext} from 'react'
import { MyContext } from '../contexts/MyContext'

const ContextValue = () => {

    const { message } = useContext(MyContext)

  return (
    <div>O valor do contexto é {message}</div>
  )
}

export default ContextValue