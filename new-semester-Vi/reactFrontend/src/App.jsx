
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

 function App() {
 
  const [data,setData]=useState("");
  async function getData() {
     const response=await fetch('http://localhost:4500/data')
  const res=await response.json();
  console.log(res)
  setData(res);
}

useEffect(()=>{
  getData()
},[])
  

  return (  
    <>
    {JSON.stringify(data)}
    </>
  )
}

export default App
