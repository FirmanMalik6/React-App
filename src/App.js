import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/page1' element={<Page1 />}></Route>
        <Route path='/page2' element={<Page2 />}></Route>
        <Route path='/page3' element={<Page3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;