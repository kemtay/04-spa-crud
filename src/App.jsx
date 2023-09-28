import { useState } from 'react'
import './App.css'

// React DOM v6 strictly
// React-Router dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import in page components
import ShowReviews from './pages/ShowReviews';
import EditReview from './pages/EditReview';
import AddReview from './pages/AddReview';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  

  return (
    <>
    <div className='container'>
      <h1>Recipe Book App</h1>
    
      {/* All the routes must be defined as children of the BrowserRouter*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowReviews/>} />
          <Route path="/add" element={<AddReview/>} />
          <Route path="/edit/:index" element={<EditReview/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
