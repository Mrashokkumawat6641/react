import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className='w-full h-screen duration-200 ' 
     style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
        <div className='flex flex-wrap justify-center gap-3 shadow-full bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}}>Red</button>

          <button
          onClick={ () => setColor("green")}
          className='outline-none px-4'
          style={{backgroundColor:"Green"}}>Green</button>

          <button
          onClick={ () => setColor("pink")}
          className='outline-none px-4'
          style={{backgroundColor:"pink"}}>Pink</button>

          <button
          onClick={() => setColor("brown")}
          className='outline-none px-4'
          style={{backgroundColor:"Brown"}}>Brown</button>

          <button
          onClick={ () => setColor("yellow")}
          className='outline-none px-4'
          style={{backgroundColor:"yellow"}}>Yellow</button>

          <button
          onClick={ () => setColor("94a3b8")}
          className='outline-none px-4'
          style={{backgroundColor:"#94a3b8"}}>Sliver</button>
        </div>
      </div>
     </div>
    </>

  )
}

export default App
