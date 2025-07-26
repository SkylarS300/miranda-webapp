import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ask from './pages/Ask';
import KnowYourRights from './pages/KnowYourRights';
import Resources from './pages/Resources';
import About from './pages/About';
import './styles/globals.css'; // just in case

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/rights" element={<KnowYourRights />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
