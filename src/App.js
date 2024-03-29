import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Gallery from './routes/Gallery';
import Services from './routes/Services';
import TandCs from './routes/TandCs';
import Error from './routes/Error';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  
  const [openMenu, setOpenMenu] = useState(false);

  const menuToggle = () => {
    openMenu === true ? setOpenMenu(false) : setOpenMenu(true);
  };

  const images = [];
  const req = require.context('./assets/afterImages', false, /\.jpeg$/);
    req.keys().forEach((filename) => {
      images.push(filename.substr(2));
  });

  return (
    <>
      <Header
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        menuToggle={menuToggle} />
      <main className='main-container'>
          <Routes>
            <Route path='/' element={<Home images={images} />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/gallery' element={<Gallery images={images} />}></Route>
            <Route path='/termsandconditions' element={<TandCs />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>
        </main>
      <Footer setOpenMenu={setOpenMenu}/>
    </>
  );
};

export default App;
