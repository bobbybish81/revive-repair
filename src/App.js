import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Gallery from './routes/Gallery';
import Services from './routes/Services';
import ContactUs from './routes/ContactUs';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <>
    <header className="header">
      <Nav />
    </header>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Gallery" element={<Gallery/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/ContactUs" element={<ContactUs/>}></Route>
    </Routes>
    <footer className="footer">
      <Footer />
    </footer>
    </>
  );
}

export default App;
