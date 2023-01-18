
import React from 'react'
import Main from './components/Main'
import SearchPage from './components/SearchPage'
import { Routes, Route } from 'react-router-dom'
import DetailPage from './components/DetailPage'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/search' element={<SearchPage />}/>
      <Route path='/details' element={<DetailPage />}/>
    </Routes>
    </>

  )
}

export default App