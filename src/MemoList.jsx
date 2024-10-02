import React from 'react'
import { useState,useMemo } from 'react'
const initalTodos=[]
    for (let i=0;i<50;i++){
        initalTodos.push({
            id:i,
            text:"item"+( i + 1)
        })

    }
const MemoList = () => {
   const [todo,setTodo]=useState(initalTodos) 
   const [text,setText]=useState("")

    const pendingtask=useMemo(()=>{
        return todo.length
    },[todo])

    const handelAddTask=()=>{
        if(text){
            setTodo([{id:todo.length,text},  ...todo])
            setText("")
        }
    }
  return (
   <>
   <h1>todo list</h1>

   <div>
    <input type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
            />
       <button onClick={handelAddTask}>
       Add Task
       </button>
   </div>
       <h2>pending task: {pendingtask}</h2>
       <ul>
       
     { todo.map((item)=>(
       <li key={item.text}>{item.text} </li>
     ))}
       
       </ul>
   </>
  )
}

export default MemoList