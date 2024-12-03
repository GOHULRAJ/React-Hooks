import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [dark, setDark]=useState(false)
  const doubleNumber=useMemo(()=>{
    return slowDown(count)
  },[count])

  const themechange= useMemo(()=>{
    return {
      background:dark?"black":"white",
      color:dark?"white":"dark"
    };
  
  },[dark])

  return (
    <div >
      <h1>Use Memo</h1>
      <input type="text" name="number" id="" value={count} onChange={(e)=>setCount(e.target.value)} />
      <button onClick={()=> setDark((curr)=>!curr)}> Toogle Theme Change</button>
      <div style={themechange}>
        {doubleNumber}
      </div>
    </div>
  )
}


export default App

function slowDown(num){
  for(let i=0;i<100000000;i++){}
  console.log('slow down')
  return num*num;
}
