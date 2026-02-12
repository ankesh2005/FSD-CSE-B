
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

 function App() {
 
  const [data,setData]=useState([]);
  const [loading, setLoading] = useState(false)
  async function getData() {
    try{
      setLoading(true)
    const response=await fetch('http://localhost:4500/data')
    const res=await response.json();
    // console.log(res)
    setData(res);
    }catch(e){
      console.log(e)
    }finally{
      setLoading(false)
    }
}

  return (  
    <>
    <h1 style={{textAlign:'center',}}>Welcome to Node fetch api</h1>
    <div className='outer'>
    {
      data.map((e)=>(
        <div key={e.id} className='inner'>
          <h2>{e.title}</h2>
          <img src={e.image} alt="loading" height={200} width={200} />
          <div className='outer-price'>
            <h3>{e.price}</h3>
            <button className='addCartBtn'>Add To Cart</button>
          </div>
        </div>
      )) 
    }
    </div>
    {
      !loading?(<h2></h2>):(<h2>Data is loading...</h2>)
    }
    
    {
      data.length==0 && (
        <button onClick={getData}>fetch</button>
      )
    }
    
    </>
  )
}

export default App
