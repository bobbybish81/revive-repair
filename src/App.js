// import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <>
    <header className="header">
      <Nav />
    </header>
    <main>
      <Main />
    </main>
    <footer className="footer">
    <Footer />
    </footer>
    </>
  );
}

export default App;
