
import React from 'react';
import { PARTNERS } from '../constants';

const PartnersPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h1 className="text-6xl font-black mb-6">Onze <span className="text-th-red">Partners</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Bij TechnoHUB geloven we in de kracht van het ecosysteem. We werken samen met specialisten die hun sporen hebben verdiend in zowel de techniek als in AI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {/* AIPanda Profile */}
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-gray-50 p-12 rounded-[40px] border border-gray-100">
            <div className="w-full lg:w-1/3">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gray-200">
                <img src="https://picsum.photos/seed/jack/600/600" alt="Jack Korsten" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-th-red text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Expert Partner</span>
                <h2 className="text-4xl font-black">Jack Korsten</h2>
              </div>
              <p className="text-th-red font-bold text-lg mb-6">CEO van AIPanda & Strategisch AI Adviseur</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Jack Korsten is een pionier in het vertalen van complexe algoritmes naar bruikbare business strategieën. Met AIPanda helpt hij TechnoHUB partners om de 'hype' van AI te scheiden van de werkelijke ROI. Zijn aanpak is no-nonsense: direct resultaat, heldere doelen.
              </p>
              <div className="flex gap-4">
                <a href="#/contact" className="bg-black text-white px-8 py-4 rounded-xl font-black hover:bg-th-red transition-all">
                  Plan kennismaking met Jack
                </a>
              </div>
            </div>
          </div>

          {/* EDIH Profile */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center bg-white p-12 rounded-[40px] border border-gray-200">
            <div className="w-full lg:w-1/3">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center p-12">
                <img src="https://picsum.photos/seed/edih-logo/400/200" alt="EDIH Logo" className="w-full grayscale" />
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-gray-200 text-gray-600 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Institutional Partner</span>
                <h2 className="text-4xl font-black">EDIH</h2>
              </div>
              <p className="text-th-red font-bold text-lg mb-6">European Digital Innovation Hub</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                De EDIH ondersteunt productiebedrijven in Nederland bij de overstap naar slimme technologieën. Dankzij Europese subsidies kunnen we trajecten vaak tegen gereduceerd tarief aanbieden. Daarnaast biedt EDIH toegang tot een breed Europees netwerk van testfaciliteiten.
              </p>
              <div className="flex gap-4">
                <a href="#/contact" className="bg-black text-white px-8 py-4 rounded-xl font-black hover:bg-th-red transition-all">
                  Check subsidiemogelijkheden
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
