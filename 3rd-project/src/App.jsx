import { useCallback, useEffect, useState } from 'react'

const App = () => {
  const [length, setlength] = useState("8")
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const update = useCallback(()=>{
     let pass="";
     let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
     if(numberAllowed) str+="0123456789"
     if(charAllowed) str+="!@#$%^&*()*/"
     for(let i=1;i<length;i++)
     {
      let char=Math.floor(Math.random() * str.length + 1)
      pass+= str.charAt(char);
     }

     setpassword(pass);
  }, [length, numberAllowed, charAllowed,setpassword])
  
  useEffect(()=>{
    update();
  },[length,numberAllowed,charAllowed,update])
  
  return (
    <div className='h-screen w-full bg-black flex justify-center'>
       <form className='h-24 w-2/6 bg-slate-800 rounded-xl mt-8 flex justify-center flex-col'>
         <div className="first-line flex mt-2">
           <input className='rounded-s-lg h-8 w-96' value={password} type="text" placeholder=' Password' readOnly/>
           <button className='rounded-e-lg h-8 w-20 bg-blue-700 text-white text-center ' >Copy</button>
         </div>
         <div className="sec-line mt-3 flex justify-center gap-3">
             <input type="range" name="length" min={8} max={100} value={length} className="slider" id="myRange" onChange={(e)=>{setlength(e.target.value)}}/>
             <label className='text-white'>Length: {length}</label>
             <input type="checkbox" defaultValue={numberAllowed} onChange={()=>{setnumberAllowed((prev)=>!prev)}}/>
             <p className='text-white'>Numbers</p>
             <input type="checkbox" defaultValue={charAllowed} onChange={()=>{setcharAllowed((prev)=>!prev)}}/>
             <p className='text-white'>Characters</p>
         </div>
       </form>
    </div>
  )
}

export default App