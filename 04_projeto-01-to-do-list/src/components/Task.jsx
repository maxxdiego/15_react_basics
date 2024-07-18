const Task = ({ task, onDelete, onToggleDone }) => {
  return (
    <li>
      <span
        onClick={onToggleDone}
        style={{ textDecoration: task.done ? "line-through" : "none" }}
      >
        {task.date} - {task.text}
      </span>
      <button onClick={onDelete}>x</button>
    </li>
  );
};

export default Task;
