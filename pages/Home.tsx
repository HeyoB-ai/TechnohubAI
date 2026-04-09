
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MetroMap from '../components/MetroMap';
import MetroStationModal from '../components/MetroStationModal';
import { Station } from '../types';
import { PARTNERS } from '../constants';

const Home: React.FC = () => {
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-th-red/5 rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-th-red/10 text-th-red text-sm font-bold uppercase tracking-widest mb-6 animate-in slide-in-from-bottom-2 duration-500">
              Start nog dit voorjaar: Concreet aan de slag met AI.
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-black mb-8 animate-in slide-in-from-bottom-4 duration-700">
              Strategische AI voor bedrijven. <br/>
              <span className="text-th-red">AI</span> voor productie en techniek.
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl animate-in slide-in-from-bottom-6 duration-1000">
              AI is geen speeltje, het is de kern van uw toekomstige bedrijfsstrategie. 
              Bouw aan een toekomstbestendige organisatie met de experts van TechnoHUB.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
              <Link to="/contact" className="bg-th-red text-white px-8 py-5 rounded-lg text-lg font-black hover:bg-black transition-all shadow-xl shadow-th-red/20 text-center">
                Meld je aan — Start nu
              </Link>
              <a href="#" className="border-2 border-black text-black px-8 py-5 rounded-lg text-lg font-bold hover:bg-black hover:text-white transition-all text-center">
                Download PDF Overzicht
              </a>
            </div>

            <div className="mt-10 animate-in slide-in-from-bottom-8 duration-1000 delay-300">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Zij starten als eerste:</p>
              <div className="flex flex-wrap gap-2">
                {["Heeren Bouwmeester", "Amstel Engineering", "Brouwer Sign", "Stone Cold", "Elektro Internationaal", "Schalkwijk Totaalafbouw"].map((bedrijf) => (
                  <span key={bedrijf} className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full">
                    {bedrijf === "Heeren Bouwmeester" ? (
                      <img
                        src="https://deheerenbouwmeester.nl/wp-content/uploads/2024/04/cropped-logo-DHB-rgb-website-2-1-300x86.png"
                        alt="Heeren Bouwmeester logo"
                        className="h-5 object-contain flex-shrink-0"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling?.classList.remove("hidden");
                        }}
                      />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-th-red flex-shrink-0" />
                    )}
                    <span className="text-sm font-bold text-gray-700">{bedrijf}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Decorative Elements */}
        <div className="hidden lg:block absolute right-0 bottom-0 w-1/3 h-full -z-10 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 600">
             <path d="M0 0 L400 0 L400 600 Z" fill="#E30613" />
          </svg>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">Waarom nu?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex-shrink-0 flex items-center justify-center text-th-red font-bold text-xl">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">AI-geletterdheid is essentieel</h4>
                    <p className="text-gray-600">Zonder basiskennis missen managers de kansen die de concurrentie wel pakt.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex-shrink-0 flex items-center justify-center text-th-red font-bold text-xl">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Data-driven Operations</h4>
                    <p className="text-gray-600">Van 'gut-feeling' naar beslissingen op basis van real-time machine data.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex-shrink-0 flex items-center justify-center text-th-red font-bold text-xl">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Smart & Dark Factories</h4>
                    <p className="text-gray-600">Autonome productie is geen science fiction meer, maar een ROI-vriendelijke realiteit.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/factory/800/600" alt="Industrial AI" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-th-red text-white p-8 rounded-xl shadow-xl">
                <p className="text-3xl font-black">24/7</p>
                <p className="text-sm font-bold uppercase tracking-wider opacity-80">Productie Visie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metro Lines Section - THE CORE FEATURE */}
      <section id="metro-preview" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Navigeer door de <span className="text-th-red">AI-Toekomst</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Het Metrolijnen model van TechnoHUB: kies uw route, bezoek de stations en transformeer uw bedrijf stap voor stap.
            </p>
          </div>
          
          <MetroMap onStationClick={(s) => setSelectedStation(s)} />
          
          <div className="mt-12 flex justify-center">
            <Link to="/metrolijnen" className="inline-flex items-center space-x-2 text-th-red font-black hover:space-x-4 transition-all">
              <span>Bekijk uitgebreide map & filters</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black mb-4 tracking-tight">Onze Trusted Experts</h2>
              <p className="text-lg text-gray-600">
                TechnoHUB werkt samen met de scherpste geesten in de markt om uw AI-implementatie te garanderen.
              </p>
            </div>
            <Link to="/partners" className="mt-6 md:mt-0 text-gray-900 font-bold border-b-2 border-black pb-1 hover:text-th-red hover:border-th-red transition-all">
              Bekijk alle partners
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTNERS.map(partner => (
              <div key={partner.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-32 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-2">
                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full grayscale hover:grayscale-0 transition-all" />
                  </div>
                  <span className="bg-th-red/10 text-th-red text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Expert Partner</span>
                </div>
                <h3 className="text-2xl font-black mb-1">{partner.name}</h3>
                <p className="text-th-red text-sm font-bold mb-4">{partner.role}</p>
                <p className="text-gray-600 mb-8">{partner.description}</p>
                <Link to="/contact" className="inline-block bg-black text-white px-6 py-3 rounded font-bold hover:bg-th-red transition-all">
                  {partner.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">Word onderdeel van de <span className="text-th-red">AI-Community</span></h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Geen eenmalige cursus, maar een netwerk van gelijkgestemde directieleden die elkaar scherp houden op weg naar de 'Dark Factory'.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-th-red text-white px-10 py-5 rounded-lg text-xl font-black hover:scale-105 transition-all">
              Plan een Intake
            </Link>
            <Link to="/programma" className="bg-white text-black px-10 py-5 rounded-lg text-xl font-black hover:scale-105 transition-all">
              Bekijk Programma
            </Link>
          </div>
        </div>
      </section>

      <MetroStationModal 
        station={selectedStation} 
        onClose={() => setSelectedStation(null)} 
      />
    </div>
  );
};

export default Home;
