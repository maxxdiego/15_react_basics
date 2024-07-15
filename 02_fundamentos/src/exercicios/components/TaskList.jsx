// Crie um componente chamado TaskList que aceita uma prop tasks, que é um array de objetos com id e text. Renderize uma lista ordenada de tarefas, mostrando o texto de cada tarefa. Se não houver tarefas, exiba a mensagem "Não há tarefas a mostrar".

import "../../css/output.css";

const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>Não há tarefas para mostrar.</p>;
  }

  return (
    <div className="w-48 bg-yellow-200 p-4 text-gray-900 rounded-b-sm mx-auto my-4 shadow-md shadow-black text-sm">
      <h4 className="text-left font-bold my-2">Lista de tarefas:</h4>
      <ol className="list-decimal list-inside text-left">
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default TaskList;
