import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Agregar from './components/AgregarP.jsx'
import DocsContainer from './components/DocsContainer.jsx'
import Home from './components/Home.jsx'
import MaterialInet from './components/MaterialInet.jsx'
import Error from './components/Error.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="contenedorP">
      <BrowserRouter>
    
      <Navbar/>
      
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/agregar' element={<Agregar/>} />
    <Route exact path='/inet' element={<MaterialInet/>} />
    <Route exact path='/manual/:id' element={<DocsContainer/>} />
    <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
    <div className="footer">Footer</div>
    </div>
  )
}

export default App
