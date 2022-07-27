import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TheCouncil from './components/SVG/TheCouncil'
import Class from './components/SVG/Class'
import GenSec from './components/SVG/GenSec'
import PgSec from './components/SVG/PgSec'
import Representatives from './components/SVG/Representatives'
import MainCouncil from './components/TheCouncil'
import ClassRepresentatives from './components/SVG/ClassRepresentatives'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
    <MainCouncil/>
    </div>
  )
}

export default App
