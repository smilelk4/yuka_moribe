import React from 'react';
import './styles/main.scss';

import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Body/>
      <Footer />
    </div>
  );
}

export default App;
