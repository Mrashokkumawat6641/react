import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
   let myObj = {
    username: 'Ashok',
    age: 21
   }

  return (
    <>
    <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="Tailwind or Css" btnText="click me" />
    <Card username="Tailwind and Reactjs" btnText="visit me"/>
    </>
  )
}

export default App
