import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home Page/Home';
import Cart from "./Pages/Cart Page/Cart";
import PlaceOrder from "./Pages/PlaceOrder Page/PlaceOrder"
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;
