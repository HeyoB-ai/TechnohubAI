
import React from 'react';

const DarkFactories: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-th-red font-black tracking-widest uppercase text-sm mb-4 block">De Ultieme Visie</span>
          <h1 className="text-7xl md:text-8xl font-black mb-8 tracking-tighter">Dark <span className="text-th-red">Factories</span>.</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Een "Dark Factory" is een productielocatie waar geen verlichting nodig is omdat er geen mensen aanwezig zijn tijdens het proces. 
            Volledig autonoom, data-gedreven en 24/7 operationeel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-4xl font-black mb-8">De Roadmap naar Autonomie</h2>
            <div className="space-y-12">
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-th-red flex items-center justify-center font-black">1</div>
                <h4 className="text-xl font-bold mb-2">Connected Infrastructure</h4>
                <p className="text-gray-400">Alle machines praten met elkaar via een robuust OT/IT netwerk. Data-acquisitie is de eerste stap.</p>
              </div>
              <div className="relative pl-12 border-l-2 border-th-red/20 ml-4 pb-12">
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-black">2</div>
                <h4 className="text-xl font-bold mb-2">Augmented Intelligence</h4>
                <p className="text-gray-400">AI adviseert operators. De mens is nog 'in the loop' maar wordt ondersteund door algoritmes.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center font-black">3</div>
                <h4 className="text-xl font-bold mb-2">Lights-Out Execution</h4>
                <p className="text-gray-600 italic">De toekomst: onbemande shifts, automatische storingsafhandeling en zelf-optimaliserende lijnen.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-3xl p-12 border border-white/10">
            <h3 className="text-2xl font-black mb-6 text-th-red">Belangrijke Randvoorwaarden</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded bg-th-red/20 flex items-center justify-center text-th-red">✓</div>
                <div>
                  <h5 className="font-bold">Data Governance</h5>
                  <p className="text-sm text-gray-500">Kwaliteit en veiligheid van uw data zijn cruciaal voor autonomie.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded bg-th-red/20 flex items-center justify-center text-th-red">✓</div>
                <div>
                  <h5 className="font-bold">OT/IT Cybersecurity</h5>
                  <p className="text-sm text-gray-500">Een autonome fabriek moet ondoordringbaar zijn voor externe dreigingen.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded bg-th-red/20 flex items-center justify-center text-th-red">✓</div>
                <div>
                  <h5 className="font-bold">Realistisch ROI Model</h5>
                  <p className="text-sm text-gray-500">Stapsgewijze aanpak voorkomt onnodige investeringen zonder resultaat.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center bg-th-red p-16 rounded-[40px] shadow-2xl shadow-th-red/20">
          <h2 className="text-4xl font-black mb-6">Klaar voor de toekomst?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Vraag onze Dark Factory Roadmap aan en ontdek waar uw kansen liggen.</p>
          <a href="#/contact" className="inline-block bg-black text-white px-12 py-5 rounded-2xl text-xl font-black hover:scale-105 transition-all">
            Ontvang Dark Factory Roadmap
          </a>
        </div>
      </div>
    </div>
  );
};

export default DarkFactories;
