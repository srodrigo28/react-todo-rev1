import { ChevronRightIcon } from "lucide-react";
import './App.css'

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Estudar React' },
    { id: 2, title: 'Estudar Next' },
    { id: 3, title: 'Estudar Node' },
  ]);

  // apagar uma tarefa
  function onDeleteTask() {
    const newTask = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(newTask);
  }

  return (
    <div className='h-screen w-full flex flex-col items-center bg-slate-950 text-white' >

      <div className='flex gap-2 mt-10'>
        <h1 className='text-3xl font-semibold'>Gerenciador+ de Tarefas</h1>
        <button className='h-10 w-10 flex items-center justify-center bg-slate-800 rounded-full'>+</button>
      </div>

      <div className="w-[80%] bg-green-400">
        <div className="flex gap-2 mt-10">
          <h3 className="bg-slate-800 px-5 py-2 w-sm rounded-md">Estudar React</h3>
          <button className="bg-slate-800 px-2 py-2 rounded-md"> <ChevronRightIcon /> </button>
        </div>

        <div className="flex gap-2 mt-2">
          <h3 className="bg-slate-800 px-5 py-2 w-sm rounded-md">Estudar Next</h3>
          <button className="bg-slate-800 px-2 py-2 rounded-md"> <ChevronRightIcon /> </button>
        </div>

        <div className="flex gap-2 mt-2">
          <h3 className="bg-slate-800 px-5 py-2 w-sm rounded-md">Estudar Node</h3>
          <button className="bg-slate-800 px-2 py-2 rounded-md"> <ChevronRightIcon /> </button>
        </div>
      </div>

    </div>
  )
}
export default App