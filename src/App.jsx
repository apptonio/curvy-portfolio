import './App.css'
import Education from './components/Education'
import Hero from './components/Hero'
import Spacer from './components/Spacer'

function App() {

  return (
    <div className='app'>
      <Hero />
      <Spacer layer='layer1'/>
      <Education />
      <Spacer layer='layer2'/>
    </div>
   
  )
}

export default App
