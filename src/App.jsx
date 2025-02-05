import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import About from './components/About'

function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
   </Router>
    </>
  )
}

export default App