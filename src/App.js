import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Furniture from './pages/Furniture';
import Appliances from './pages/Appliances';
import Lights from './pages/Lights';
import Sofas from './pages/Sofas';
import GaminChairs from './pages/GaminChairs';
import Beds from './pages/Beds';
import Mixer from './pages/Mixer';
import Fan from './pages/Fan';
import Lamb from './pages/Lamb';
import { CartProvider } from './components/Context';
import Cart from './pages/Cart';

function App() {
  return (
    <div className='universe'>
      <CartProvider>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>
        <Route path='furniture' element={<Furniture />}></Route>
        <Route path='appliance' element={<Appliances />}></Route>
        <Route path='lights' element={<Lights />}></Route>
        <Route path='sofa' element={<Sofas />}></Route>
        <Route path='chair' element={<GaminChairs />}></Route>
        <Route path='bed' element={<Beds />}></Route>
        <Route path='mixer' element={<Mixer />}></Route>
        <Route path='fan' element={<Fan />}></Route>
        <Route path='lamb' element={<Lamb />}></Route>
        <Route path='cart' element={<Cart />}></Route>
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
