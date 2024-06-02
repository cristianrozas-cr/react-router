import NavBar from './components/NavBar'
import Home from './components/Home';
import Contacto from './components/Contacto';
import './App.css'
import {Routes, Route} from 'react-router-dom';

function App() {
  return ( 
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contacto' element={<Contacto /> }/>
      <Route path='*' element={<h1>No se encontró esta página</h1>}/>
    </Routes>
    </>
  )
}

export default App
