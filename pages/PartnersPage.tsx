
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
          {/* AI Panda Profile */}
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-gray-50 p-12 rounded-[40px] border border-gray-100">
            <div className="w-full lg:w-1/3">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gray-200">
                <img src="https://aipanda.nl/wp-content/uploads/2023/09/Logo-AIPanda-final555px.png" alt="AI Panda" className="w-full h-full object-contain p-8 bg-white" />
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-th-red text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Expert Partner</span>
                <h2 className="text-4xl font-black">AI Panda</h2>
              </div>
              <p className="text-th-red font-bold text-lg mb-6">Strategische AI Partner</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                AI Panda begeleidt organisaties bij het strategisch inzetten van AI. Van bewustwording en strategie tot implementatie en borging — AI Panda maakt AI toegankelijk en werkbaar voor elke organisatie.
              </p>
              <div className="flex gap-4">
                <a href="#/contact" className="bg-black text-white px-8 py-4 rounded-xl font-black hover:bg-th-red transition-all">
                  Plan kennismaking met Jack
                </a>
                <a href="https://www.aipanda.nl" target="_blank" rel="noopener noreferrer" className="border-2 border-black text-black px-8 py-4 rounded-xl font-black hover:border-th-red hover:text-th-red transition-all">
                  Bezoek website
                </a>
              </div>
            </div>
          </div>

          {/* EDIH Digital Hub Noordwest Profile */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center bg-white p-12 rounded-[40px] border border-gray-200">
            <div className="w-full lg:w-1/3">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center p-12">
                <img src="https://edih-dhnw.nl/wp-content/themes/FoundationPress-child/assets/img/EDIH-logo.svg" alt="EDIH Digital Hub Noordwest Logo" className="w-full" />
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-gray-200 text-gray-600 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Institutional Partner</span>
                <h2 className="text-4xl font-black">EDIH Digital Hub Noordwest</h2>
              </div>
              <p className="text-th-red font-bold text-lg mb-6">Europese Digitale Innovatie Hub</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                EDIH Digital Hub Noordwest is het digitale oplaadpunt voor het mkb in Utrecht, Noord-Holland en Flevoland. Als onderdeel van het Digital Europe Programme van de EU helpen zij bedrijven met prototypes, testfaciliteiten, trainingen en advies bij financiering om de digitale transitie te versnellen.
              </p>
              <div className="flex gap-4">
                <a href="#/contact" className="bg-black text-white px-8 py-4 rounded-xl font-black hover:bg-th-red transition-all">
                  Check subsidiemogelijkheden
                </a>
                <a href="https://edih-dhnw.nl" target="_blank" rel="noopener noreferrer" className="border-2 border-black text-black px-8 py-4 rounded-xl font-black hover:border-th-red hover:text-th-red transition-all">
                  Bezoek website
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
