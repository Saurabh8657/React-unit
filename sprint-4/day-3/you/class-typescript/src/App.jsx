import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  const [state, setState] = useState(false)

  return ( <>
    <Button state={state} setState={setState}/>
  </>
  )
}

export default App
