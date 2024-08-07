import { useState ,useEffect} from 'react'
import Navbar from './components/Navbar.jsx'
import Agregar from './components/AgregarP.jsx'
import MainD from './components/MainD.jsx'
import DocsContainer from './components/DocsContainer.jsx'
import Home from './components/Home.jsx'
import MaterialInet from './components/MaterialInet.jsx'
import AboutMe from './components/AboutMe.jsx'
import Footer from './components/Footer.jsx'
import Error from './components/Error.jsx'
import AdminManuales from './components/ManualContainer.jsx'
import Curriculum from './components/Curriculum.jsx'
import ListaManuales from './components/ListAdminManuales.jsx';
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
    <Route path='/AboutMe' element={<AboutMe/>} />
    <Route path='/Admin/:manual' element={<AdminManuales/>} />
    <Route path='/listaManuales' element={<ListaManuales/>} />

    </Routes>
   
    
    </BrowserRouter>
   
    <Footer/>
    </div>
  )
}

export default App
