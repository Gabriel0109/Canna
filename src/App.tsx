import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Menu } from './components/menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='logo-right-sided desktop'>canna</h1>
      <Menu />
    </div>
  )
}

export default App
