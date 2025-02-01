import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import LoginPage from './components/LoginPage'
import Feed from './components/Feed'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/feed' element={<Feed />}/>
      </Routes>
    </div>
  )
}

export default App
