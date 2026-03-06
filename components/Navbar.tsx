
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <div className="flex items-center font-black text-2xl tracking-tighter">
                <span className="text-black">TECHNO</span>
                <span className="text-th-red">HUB</span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-xs font-bold uppercase tracking-widest hover:text-th-red transition-colors">Home</Link>
            <Link to="/programma" className="text-xs font-bold uppercase tracking-widest hover:text-th-red transition-colors">Programma</Link>
            <Link to="/metrolijnen" className="text-xs font-bold uppercase tracking-widest hover:text-th-red transition-colors">Metrolijnen</Link>
            <Link to="/industrial-ai" className="text-xs font-bold uppercase tracking-widest hover:text-th-red transition-colors">Industrial AI</Link>
            <Link to="/dark-factories" className="text-xs font-bold uppercase tracking-widest hover:text-th-red transition-colors">Dark Factories</Link>
            <Link to="/partners" className="text-xs font-bold uppercase tracking-widest hover:text-th-red transition-colors">Partners</Link>
            <Link to="/contact" className="bg-th-red text-white px-6 py-3 rounded-md text-xs font-bold hover:bg-black transition-all">
              Meld je aan
            </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <Link to="/" onClick={closeMenu} className="text-sm font-bold uppercase tracking-widest">Home</Link>
            <Link to="/programma" onClick={closeMenu} className="text-sm font-bold uppercase tracking-widest">Programma</Link>
            <Link to="/metrolijnen" onClick={closeMenu} className="text-sm font-bold uppercase tracking-widest">Metrolijnen</Link>
            <Link to="/industrial-ai" onClick={closeMenu} className="text-sm font-bold uppercase tracking-widest">Industrial AI</Link>
            <Link to="/dark-factories" onClick={closeMenu} className="text-sm font-bold uppercase tracking-widest">Dark Factories</Link>
            <Link to="/partners" onClick={closeMenu} className="text-sm font-bold uppercase tracking-widest">Partners</Link>
            <Link to="/contact" onClick={closeMenu} className="text-sm font-black text-th-red uppercase tracking-widest">Meld je aan</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
