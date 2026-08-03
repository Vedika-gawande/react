import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/Card'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)
  let details={
    name:"vedika",
    age:18
  }
  let arr=[1,2,3,4]
  // let usernname="vedika"
  return (
    <><center>
    <h1 className='bg-blue-400 text-black p-4 rounded-xl'>Tailwind css</h1>
    </center>
    <Card username="vedika"/>
    <Card />
    </>
  )
}

export default App
