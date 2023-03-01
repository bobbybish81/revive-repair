
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Gallery from './routes/Gallery';
import Services from './routes/Services';
import TandCs from './routes/TandCs';
import Error from './routes/Error';
import Nav from './components/Nav';
import Footer from './components/Footer';
import fs from 'fs-extra';
import path from 'path'
import './styles/App.css';

const App = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [images, setImages] = useState();

  const menuToggle = () => {
    openMenu === true ? setOpenMenu(false) : setOpenMenu(true);
  }

  useEffect(() => {
    const files = fs.readdirSync(path.resolve(__dirname, './assets/afterImages'))
    files.shift();
    setImages(files)
  }, [])

  return (
    <>
    <header className='header'>
      <Nav 
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
      menuToggle={menuToggle}/>
    </header>
    <main className='main-container'>
      <Routes>
        <Route path='/' element={<Home images={images}/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/gallery' element={<Gallery images={images}/>}></Route>
        <Route path='/termsandconditions' element={<TandCs/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </main>
    <footer className='footer'>
    <Footer
      setOpenMenu={setOpenMenu}/>
    </footer>
    </>
  );
}

export default App;
