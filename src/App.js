import './App.css';
import "./css/bootstrap.min.css";
import "./App.css";
import {  HashRouter, Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Home from './pages/HomePage/Home';
import Cart from './pages/CartPage/Cart';
import Shop from './pages/ShopPage/Shop';
import Footer from './common/Footer';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/shop' element={<Shop/>} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
