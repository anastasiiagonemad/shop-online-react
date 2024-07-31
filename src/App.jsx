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
            <Route path="/shop-online-react/woman" element={<Ladys />} />
            <Route path="/shop-online-react/man" element={<Mens />} />
            <Route path="/shop-online-react/sale" element={<Sale />} />
            <Route path="/shop-online-react/child" element={<Child />} />
            <Route path="/shop-online-react/fenty" element={<Fenty />} />
            <Route
              path="/shop-online-react/inprocess"
              element={<DevelopePage />}
            />
            <Route
              path="/shop-online-react/fenty/:id"
              element={<ProdFanty />}
            />
            <Route
              path="/shop-online-react/woman/:id"
              element={<ProdLadys />}
            />
            <Route path="/shop-online-react/man/:id" element={<ProdMan />} />
            <Route
              path="/shop-online-react/child/:id"
              element={<ProdChild />}
            />
            <Route path="/shop-online-react/cart" element={<Cart />} />
            <Route path="/shop-online-react/wishlist" element={<Wishlist />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
