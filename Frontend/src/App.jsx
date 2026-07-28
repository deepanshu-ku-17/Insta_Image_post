import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from './pages/Posts'
import Create_post from './pages/Create_post';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Either go to /posts for the see all the post or go to the /create-post for post a image with caption</h1>}/>
        <Route path="/posts" element={ <Posts/> }/>
        <Route path="/create-post" element={<Create_post/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
