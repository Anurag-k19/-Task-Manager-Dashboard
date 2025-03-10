import { useState, useRef } from "react";

import VariableProximity from './VariableProximity';
import InputBox from './Components/InputBox';
import Button from './Components/Button';

function App() {
  const containerRef = useRef(null);
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null)
    const [editText, setEditText] = useState("")
    const addTask = () => {
      if (newTask.trim() !== "") {
        setTasks([...tasks, newTask]);
        setNewTask(""); 
      }
      else{
        alert("Please Enter a Task First")
      }
    }
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }

    const startEditing = (index)=>{
      setEditIndex(index)
      setEditText(tasks[index])
    }

    const saveTask = ()=>{
      if(editText.trim() !== ""){
        const updatedTasks = [...tasks]
        updatedTasks[editIndex] = editText
        setTasks(updatedTasks)
        setEditIndex(null)
        setEditText("")
      }
    }

  return (
    <>
    <div className=" flex justify-center h-screen w-screen pt-12 text-5xl  bg-gradient-to-br from-blue-900 to-gray-900">
      <div className='flex flex-col gap-3 md:gap-4 items-center  w-full max-w-[90%] md:max-w-[60%] h-full max-h-[80vh] pt-12 text-5xl bg-white/10 backdrop-blur-md border border-gray-700 shadow-lg rounded-3xl  overflow-auto md:pb-8 md:px-6 md:pt-8 pb-12'>
     <div
ref={containerRef}

>
  <VariableProximity
    label={'Task Manager Dashboard'}
    className={'variable-proximity-demo text-white font-bold'}
    fromFontVariationSettings="'wght' 400, 'opsz' 9"
    toFontVariationSettings="'wght' 1000, 'opsz' 40"
    containerRef={containerRef}
    radius={100}
    falloff='linear'
  />
</div>
<InputBox newTask={newTask} setNewTask={setNewTask} />

<div className="flex justify-around gap-4 mt-4">
  <Button value="Add Task" className="btn btn-outline btn-success" onClick={addTask} />
</div>


<ul className="w-3/4 text-white text-lg mt-6 bg-gray-700/80 p-4 rounded-xl shadow-lg">
  {tasks.map((task, index) => (
    <li key={index} className="flex justify-between items-center bg-gray-600 p-4 rounded-lg mt-2 shadow-md">
      {editIndex == index ? (
        <input 
        className="w-100"
        type="text"
        value={editText}
        onChange={(e)=>setEditText(e.target.value)} />
      ) :(
      <span>{task}</span>
    )}
      <div className="flex gap-2">
        {editIndex === index ? (
          <Button value="💾 Save" className="btn btn-success" onClick={saveTask} />
        ) : (
          <Button value="✏️ Edit" className="btn btn-warning" onClick={() => startEditing(index)} />
        )}
        <Button value="❌" className="btn btn-error" onClick={() => deleteTask(index)} />
      </div>
    </li>
  ))}
</ul>
</div>
</div>
    </>
  )
}

export default App
