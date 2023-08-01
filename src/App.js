import React from 'react';
import './App.css';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import { Myname } from './components/Myname';
import { Home } from './components/Home';

function App() {
  return (
      <div class="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Myname' element={<Myname />}></Route>
        </Routes>
        </header>
      </div>
  );
}
export default App;
