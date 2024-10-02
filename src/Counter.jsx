import React from 'react'
import {useState,useEffect} from 'react'

const Counter = () => {
    const [count,setcount]=useState(0)
    useEffect(()=>{
        console.log("button Pressed",count)
        return 
    },[count])
   
        
    
    return (
    <>
    <button onClick={setcount(c=>c +1)}
        disabled={count>=10}>
        {count} pressed
    </button>
    </>
  )
}

export default Counter