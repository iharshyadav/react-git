import { useState } from "react"

const App = ()=>{
 const [counter, setcounter] = useState(0)
 
 const add =()=>{
  if(counter>=20)
  {
    setcounter(counter);
  }
  else{
    setcounter(counter+1);
  }
  
 } 

 const subtract =()=>{
  if(counter<=0)
  {
    setcounter(counter);
  }
  else{
    setcounter(counter-1);
  }
 } 

 return(
  <>
    <h1>{counter}</h1>
    <button 
     onClick={add}
    >increament</button> <br /><br />
    <button
    onClick={subtract}
    >decreament</button>
  </>
 )

}

export default App

















