import { useState } from "react";
import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  function toggleDescription(taskId) {
    if (expandedTaskId === taskId) {
      setExpandedTaskId(null); // se já estiver aberta, fecha
    } else {
      setExpandedTaskId(taskId); // abre a descrição da tarefa clicada
    }
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex flex-col gap-2">
          <div className="flex gap-2 items-start">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 flex-1 text-white p-2 rounded-md text-left ${
                task.isCompleted ? "line-through" : ""
              }`}
            >
              <div className="font-semibold">{task.title}</div>
            </button>

            <button
              onClick={() => toggleDescription(task.id)}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <ChevronRightIcon />
            </button>

            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-red-500 text-white p-2 rounded-md"
            >
              <TrashIcon />
            </button>
          </div>

          {/* Descrição aparece aqui somente se a tarefa estiver expandida e não concluída */}
          {expandedTaskId === task.id && !task.isCompleted && (
            <div className="bg-slate-300 text-slate-800 p-2 rounded-md ml-1 text-sm">
              {task.description}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
