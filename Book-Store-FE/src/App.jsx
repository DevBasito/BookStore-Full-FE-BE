import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Books from './Components/Books/Books';
import Login from './Components/Login/Login';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';
import './App.css'
import AdminPage from './Components/AdminPage/AdminPage';
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const { user } = useSelector(state => state.user);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={ user ? <AdminPage/> : <Login /> } />
        </Routes>
        {/* {!user ? <Subscribe /> : null } */}
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
