
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MetroLinesPage from './pages/MetroLinesPage';
import Contact from './pages/Contact';
import Programma from './pages/Programma';
import IndustrialAI from './pages/IndustrialAI';
import DarkFactories from './pages/DarkFactories';
import PartnersPage from './pages/PartnersPage';
import Admin from './pages/Admin';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/metrolijnen" element={<MetroLinesPage />} />
            <Route path="/programma" element={<Programma />} />
            <Route path="/industrial-ai" element={<IndustrialAI />} />
            <Route path="/dark-factories" element={<DarkFactories />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
