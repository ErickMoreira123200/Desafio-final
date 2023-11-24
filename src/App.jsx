import React from 'react'
import Inicio from "./Components/inicio";
import Meio from "./Components/meio";
import Fim from "./Components/fim";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import './App.css'



function App() {


  return (
    <>
      <h1>Inicio</h1>
    
      <BrowserRouter>
      <nav>
      <ul>
        <li>
          <Link to="/">SOBRE</Link>
        </li>
        <li>
          <Link to="/meio">MEUS PROJETOS</Link>
        </li>
        <li>
          <Link to="/fim">ESTUDOS E REDES SOCIAIS</Link>
        </li>
      </ul>
      </nav>
<Routes>
  <Route path="/" element={<Inicio />} />
  <Route path="/meio" element={<Meio />} />
  <Route path="/fim" element={<Fim />} />
</Routes>

      </BrowserRouter>
    </>
  )
}

export default App
