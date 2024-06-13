import React from 'react'
import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import FavoritesPage from './Pages/FavoritesPage'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  )
}

export default App