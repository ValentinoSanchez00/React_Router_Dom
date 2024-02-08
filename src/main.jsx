import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './components/Home.jsx'
import Clientes from './components/Clientes.jsx'
import Error from './components/Error.jsx'
import Layaut from './components/Layaut.jsx'
import Productos from './components/Productos.jsx'
import "bootstrap/dist/css/bootstrap.min.css"


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <Routes>
      <Route path='/' element={<Layaut></Layaut>}>
      <Route index element={<Home></Home>} ></Route>
      <Route path='clientes' element={<Clientes></Clientes>}></Route>
      <Route path='productos' element={<Productos></Productos>}></Route>
      <Route path='*' element={<Navigate to="/"></Navigate>}></Route>
      </Route>
     


    </Routes>



  </BrowserRouter>

)
