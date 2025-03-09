import {useState} from 'react'
import React from "react"
import DecryptedText from './DecryptedText'
function InputBox({
    

    newTask, 
    setNewTask,
    
}) {
    const [placeholder, setPlaceholder] = useState("Enter Your Task");
    

    

    
   
    return(
        <>
      <div className="flex justify-start mt-6">
      <DecryptedText text="Add Your Tasks" />
      </div>

      <input
      className="bg-gray-800/90 text-white placeholder-gray-400 border border-gray-600 rounded-xl w-3/4 h-18 px-4 mt-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder={placeholder}
      onFocus={() => setPlaceholder("")}   
      onBlur={() => setPlaceholder("Enter Your Task")}

       />   
        </>

    )
}

export default InputBox