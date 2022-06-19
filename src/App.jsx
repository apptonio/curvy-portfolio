import './App.css'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Spacer from './components/Spacer'

function App() {

  return (
    <div className='app'>
      <Hero />
      <Spacer layer='layer1'/>
      <Education />
      <Spacer layer='layer2'/>
      <Footer />
    </div>
   
  )
}

export default App
