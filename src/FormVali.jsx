import React from 'react'
import {useState} from 'react'
const FormVali = () => {
    const [inputval,setInputval]=useState("")
    const [errorMsg,setError]=useState("")
    const [successMsg,setSucessMsg]=useState("")
const handleSubmit=()=>{
    console.log ("pressed")
     if(inputval===""){
       setError("input not empty")
        setSucessMsg("")
    }
    else{
        setError("")
        setSucessMsg("button pressed succesfuly")
    }
}
   
  return (
    <>
     <form onSubmit={handleSubmit}>
        <label>
    <input type="text"  value={inputval}
        onChange={(e)=>{
            setInputval(e.target.value)
        }}/>
            </label>

    <button type="submit">
        Submit
    </button>
         <p>{errorMsg}</p>
         <p>
             {successMsg}
         </p>
         
     </form>
    </>
  )
}

export default FormVali