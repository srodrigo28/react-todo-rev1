import './App.css'
import { ChevronRightIcon, DeleteIcon } from "lucide-react";

function App() {
  return (
    <div className='h-screen w-screen flex flex-col items-center bg-slate-950 text-white' >

      <div className='flex gap-2 mt-10'>
        <h1 className='text-xl md:text-3xl font-semibold'>Gerenciador de Tarefas+</h1>
        <button className='h-10 w-10 flex items-center justify-center bg-slate-800 rounded-full'>+</button>
      </div>

      <div className='w-[80%] mx-auto'>
        <div className="flex gap-2 mt-10">
          <h3 className="bg-slate-800 px-5 py-2 w-sm rounded-md">Estudar React</h3>
          <button className="bg-slate-800 px-2 py-2 rounded-md"> <ChevronRightIcon /> </button>
          <button className="bg-red-400 px-2 py-2 rounded-md"> <DeleteIcon /> </button>
        </div>

        <div className="flex gap-2 mt-2">
          <h3 className="bg-slate-800 px-5 py-2 w-sm rounded-md">Estudar Next</h3>
          <button className="bg-slate-800 px-2 py-2 rounded-md"> <ChevronRightIcon /> </button>
          <button className="bg-red-400 px-2 py-2 rounded-md"> <DeleteIcon /> </button>
        </div>

        <div className="flex gap-2 mt-2">
          <h3 className="bg-slate-800 px-5 py-2 w-sm rounded-md">Estudar Node</h3>
          <button className="bg-slate-800 px-2 py-2 rounded-md"> <ChevronRightIcon /> </button>
          <button className="bg-red-400 px-2 py-2 rounded-md"> <DeleteIcon /> </button>
        </div>
      </div>

    </div>
  )
}
export default App