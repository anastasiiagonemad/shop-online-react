import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/scroll/SmoothScroll';
//Main
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
//Stores
import Ladys from './components/stores/Ladys';
import Mens from './components/stores/Mens';
import Sale from './components/stores/Sale';
import Fenty from './components/stores/Fenty';
import Child from './components/stores/Child';
import DevelopePage from './components/develope/DevelopePage';
import ProdFanty from './components/products/ProdFanty';
import ProdLadys from './components/products/ProdLadys';
import ProdMan from './components/products/ProdMan';
import ProdChild from './components/products/ProdChild';
import Cart from './components/cart/Cart';
import Wishlist from './components/wishlist/Wishlist';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SmoothScroll />
        <div className="content">
          <Routes>
            <Route path="/shop-online-react" element={<Main />} />
            <Route path="/woman" element={<Ladys />} />
            <Route path="/man" element={<Mens />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/child" element={<Child />} />
            <Route path="/fenty" element={<Fenty />} />
            <Route path="/inprocess" element={<DevelopePage />} />
            <Route path="/fenty/:id" element={<ProdFanty />} />
            <Route path="/woman/:id" element={<ProdLadys />} />
            <Route path="/man/:id" element={<ProdMan />} />
            <Route path="/child/:id" element={<ProdChild />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
