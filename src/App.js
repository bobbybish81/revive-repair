import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Gallery from './routes/Gallery';
import Services from './routes/Services';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  
  const introImages = [
    'bath.jpeg',
    'brick_tinting.jpeg',
    'composite_doors.jpeg',
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
      <Nav />
    </header>
    <Routes>
      <Route path="/" element={<Home introImages={introImages}/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/Gallery" element={<Gallery/>}></Route>
    </Routes>
    <footer className="footer">
      <Footer />
    </footer>
    </>
  );
}

export default App;
