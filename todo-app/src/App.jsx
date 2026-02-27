import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo';

function App() {

  return (
      <div className='bg-gradient-to-b from-rose-100 via-orange-100 to-yellow-100 grid py-20 min-h-screen justify-center'>
        <Todo />
      </div>
     
 
  )
}

export default App
