import { createContext, useState } from 'react'

import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './assets/Pagess/Home'
import User from './assets/Pagess/User'
import Admin from './assets/Pagess/Admin'
import Login from './assets/Pagess/Login'
import Register from './assets/Pagess/Register'



export const contexts=createContext()


function App() {
  const [datas, setdata] = useState([]);
 

  return (
    <>
    <contexts.Provider value={{datas,setdata}}>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </contexts.Provider>

    </>
  )
}

export default App
