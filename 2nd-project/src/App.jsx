import { useState } from "react"

const App = () => {
  // const color=["red","blue","green","black","yellow","purple","pink","white","olive","brown"];
  const [color, setcolor] = useState("black")
  return (
    <>
      <div className='w-full h-screen flex items-center justify-center'
       style={{backgroundColor:color}}
      >
        <div className="h-10 w-2/4 bg-white text-center flex items-center justify-center gap-5 rounded-xl">
            <button
            onClick={()=>{
              setcolor("red")
            }}
              className=" w-14 h-9 text-center bg-red-700 rounded-lg text-white "
            >Red</button>
            <button
            onClick={()=>{
              setcolor("blue")
            }}
              className=" w-14 h-9 text-center bg-blue-700 rounded-lg text-white "
            >Blue</button>
            <button
            onClick={()=>{
              setcolor("green")
            }}
              className=" w-14 h-9 text-center bg-green-700 rounded-lg text-white "
            >Green</button>
            <button
            onClick={()=>{
              setcolor("maroon")
            }}
              className=" w-14 h-9 text-center bg-amber-950 rounded-lg text-white "
            >Amber</button>
            <button
            onClick={()=>{
              setcolor("yellow")
            }}
              className=" w-14 h-9 text-center bg-yellow-700 rounded-lg text-white "
            >Yellow</button>
            <button
            onClick={()=>{
              setcolor("purple")
            }}
              className=" w-14 h-9 text-center bg-purple-700 rounded-lg text-white "
            >Purple</button>
            <button
            onClick={()=>{
              setcolor("pink")
            }}
              className=" w-14 h-9 text-center bg-pink-700 rounded-lg text-white "
            >Pink</button>
            <button
            onClick={()=>{
              setcolor("violet")
            }}
              className=" w-14 h-9 text-center bg-violet-700 rounded-lg text-white "
            >Violet</button>
            <button
            onClick={()=>{
              setcolor("gray")
            }}
              className=" w-14 h-9 text-center bg-gray-800 rounded-lg text-white "
            >Gray</button>
        </div>
      </div>
    </>
  )
}

export default App