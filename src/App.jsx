import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Spacer from './components/Spacer'

function App() {

  return (
    <div className='app'>
      <Header />
      <Spacer layer='layer1'/>
      <Spacer layer='layer2'/>
    </div>
   
  )
}

export default App
