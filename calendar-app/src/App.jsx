import { useState } from 'react'
import CalendarApp from './components/CalendarApp'
import './components/CalendarApp.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <CalendarApp></CalendarApp>
    </div>
  )
}

export default App
