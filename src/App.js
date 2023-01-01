
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Gallery from './routes/Gallery';
import Services from './routes/Services';
import TandCs from './routes/TandCs';
import Error from './routes/Error';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {

  const workImages = [
    'baths.jpeg',
    'brick_tinting.jpeg',
    'composite_doors.jpeg',
    'window_frames.webp',
    'foil_wrapped_UPVC.jpeg',
    'garage_door_respray.jpeg',
    'GRP.jpeg',
    'stone_restoration.jpeg',
    'tiles.jpeg',
    'UPVC_colour change.jpeg',
    'white_UPVC.jpeg',
    'wood_veneer.jpeg'
  ]

  return (
    <>
    <header className="header">
      <Nav/>
    </header>
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Home workImages={workImages}/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Gallery" element={<Gallery workImages={workImages}/>}></Route>
        <Route path="/Terms_and_Conditions" element={<TandCs/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </main>
    <footer className="footer">
      <Footer/>
    </footer>
    </>
  );
}

export default App;
