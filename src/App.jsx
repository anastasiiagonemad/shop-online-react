import React, { Children } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Main />} />
            <Route path="/woman" element={<Ladys />} />
            <Route path="/man" element={<Mens />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/child" element={<Child />} />
            <Route path="/fenty" element={<Fenty />} />
            <Route path="/inprocess" element={<DevelopePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
