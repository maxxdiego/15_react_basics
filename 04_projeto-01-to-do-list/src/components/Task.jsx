const Task = ({task, onDelete}) => {
  return (
    <li>
        <span>{task.date}</span>
        <span>{task.text}</span>
        <button onClick={onDelete}>Remover</button>
    </li>
  )
}

export default Task