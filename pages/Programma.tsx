
import React from 'react';

const Programma: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-20">
          <span className="text-th-red font-black tracking-widest uppercase text-sm mb-4 block">Exclusief voor TechnoHUB Partners</span>
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-[0.9]">Programma <span className="text-th-red">"Concreet aan de slag met AI"</span>: AI als Strategie.</h1>
          <p className="text-xl text-gray-600">
            Het programma "Concreet aan de slag met AI" is bedoeld voor directieleden en managers die de stap willen maken naar toekomstbestendige, data-gedreven processen en de kracht van AI centraal willen stellen in hun bedrijfsvoering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-black mb-4">Voor wie?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Directeuren, eigenaars en operations managers van technische MKB-bedrijven die de regie willen nemen over hun digitale toekomst.</p>
            <ul className="space-y-3">
              <li className="flex gap-2 font-bold text-sm"><span className="text-th-red">✓</span> Beslissers</li>
              <li className="flex gap-2 font-bold text-sm"><span className="text-th-red">✓</span> Innovatie Managers</li>
              <li className="flex gap-2 font-bold text-sm"><span className="text-th-red">✓</span> Technisch Directeuren</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black mb-8">Agenda & Opbouw</h3>
            <div className="space-y-6">
              {[
                { date: '9 Maart', title: 'De Kick-off: AI Readiness', desc: 'Waar staan we? Nulmeting van data en cultuur.' },
                { date: '23 Maart', title: 'Lijn 1: Strategie & Governance', desc: 'Ethiek, wetgeving en uw strategische roadmap.' },
                { date: '13 April', title: 'Lijn 2: Industrial AI in Praktijk', desc: 'Live demo\'s van Vision AI en Predictive Maintenance.' },
                { date: '11 Mei', title: 'Lijn 3: De Roadmap naar Dark Factory', desc: 'Eindpresentaties en community-vorming.' }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200">
                  <div className="flex-shrink-0 w-24 text-th-red font-black pt-1">{step.date}</div>
                  <div>
                    <h4 className="text-xl font-black mb-1">{step.title}</h4>
                    <p className="text-gray-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-[40px] p-12 md:p-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-black mb-6">Wat levert het op?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-th-red text-white flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <p className="text-gray-700 font-medium leading-relaxed">Een concrete AI-roadmap voor uw eigen bedrijf, gevalideerd door experts.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-th-red text-white flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <p className="text-gray-700 font-medium leading-relaxed">Directe toegang tot een netwerk van collega-ondernemers met dezelfde uitdagingen.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-th-red text-white flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <p className="text-gray-700 font-medium leading-relaxed">Inzicht in financiering en subsidies (via EDIH) voor uw AI-projecten.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-10 rounded-3xl shadow-xl">
            <h4 className="text-2xl font-black mb-6">Meld je aan</h4>
            <p className="text-gray-500 mb-8">Er is plaats voor maximaal 15 bedrijven per batch om kwaliteit te waarborgen.</p>
            <a href="#/contact" className="block w-full bg-th-red text-white text-center py-5 rounded-xl font-black text-xl hover:bg-black transition-all">
              Reserveer een plek
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programma;