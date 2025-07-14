import React, { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";


function App() {
  const [tasks, setTasks] = useState([
  {
    id: 1,
    title: "Estudar programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack.",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Revisar JavaScript",
    description: "Revisar os principais conceitos de JavaScript para aplicar em projetos front-end.",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Assistir aulas de React",
    description: "Ver os vídeos da aula sobre componentes e hooks no React.",
    isCompleted: false,
  },
]);

function onTaskClick(taskId) {
  const newTasks = tasks.map(task =>{
    if (task.id === taskId) { 
      return { ...task, isCompleted: !task.isCompleted }
    }
    return task;
  })

setTasks(newTasks);
}

function onDeleteTaskClick(taskId){
  const newTasks = tasks.filter(task => task.id !== taskId);
  setTasks(newTasks);


}

function onAddTaskSubmit(title, description) {
  const newTask = {
    id: tasks.length + 1, // gera ID único
    title,
    description,
    isCompleted: false,
  };
  setTasks([...tasks, newTask]);
}

  return (
    <div className="w-screen h-screen bg-gray-500 flex justify-center">
      <div className="w-[500px] p-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center mb-6">
          Gerenciador de Tarefas
        </h1>
        {/* Aqui você pode colocar o componente AddTask futuramente */}
        <AddTask onAddTaskSubmit={onAddTaskSubmit} /> 
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;
