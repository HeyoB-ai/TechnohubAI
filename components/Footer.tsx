
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center font-black text-3xl tracking-tighter mb-6">
              <span className="text-black">TECHNO</span>
              <span className="text-th-red">HUB</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Het expertisecentrum voor de techniek. Wij verbinden onderwijs, overheid en bedrijfsleven om innovatie in het MKB te versnellen.
            </p>
          </div>
          
          <div>
            <h4 className="text-black font-black uppercase tracking-widest text-xs mb-6">Navigatie</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/" className="text-gray-500 hover:text-th-red transition-colors">Home</Link></li>
              <li><Link to="/programma" className="text-gray-500 hover:text-th-red transition-colors">Programma</Link></li>
              <li><Link to="/metrolijnen" className="text-gray-500 hover:text-th-red transition-colors">Metrolijnen</Link></li>
              <li><Link to="/partners" className="text-gray-500 hover:text-th-red transition-colors">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-black uppercase tracking-widest text-xs mb-6">Inspiratie</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/industrial-ai" className="text-gray-500 hover:text-th-red transition-colors">Industrial AI</Link></li>
              <li><Link to="/dark-factories" className="text-gray-500 hover:text-th-red transition-colors">Dark Factories</Link></li>
              <li><a href="https://technohub.nl" target="_blank" className="text-gray-500 hover:text-th-red transition-colors">TechnoHUB.nl</a></li>
              <li><a href="https://technohub-mkbacademie.nl" target="_blank" className="text-gray-500 hover:text-th-red transition-colors">MKB Academie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-black uppercase tracking-widest text-xs mb-6">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="font-bold text-black">TechnoHUB Woerden</li>
              <li>Industrieweg 2b</li>
              <li>3442 AE Woerden</li>
              <li className="pt-4 font-bold text-th-red">info@technohub.nl</li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-th-red hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-th-red hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.599 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
          <p>© 2025 TechnoHUB Woerden. Alle rechten voorbehouden.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Cookie instellingen</a>
            <a href="#" className="hover:text-black">Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
