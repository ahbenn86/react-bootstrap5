import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
    </Router>
  )
}

export default App
