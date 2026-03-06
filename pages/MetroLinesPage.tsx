
import React, { useState, useMemo } from 'react';
import MetroMap from '../components/MetroMap';
import MetroStationModal from '../components/MetroStationModal';
import { Station } from '../types';
import { METRO_LINES } from '../constants';

const ROLES = [
  { id: 'all', label: 'Alle Rollen' },
  { id: 'R1', label: 'Directie / CEO' },
  { id: 'R2', label: 'COO / Operations' },
  { id: 'R3', label: 'CIO / IT' },
  { id: 'R4', label: 'OT / Engineering' },
  { id: 'R6', label: 'Quality / Lean' }
];

const MetroLinesPage: React.FC = () => {
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredLines = useMemo(() => {
    if (activeFilter === 'all') return METRO_LINES;
    
    return METRO_LINES.map(line => ({
      ...line,
      stations: line.stations.filter(() => 
        line.recommended_for_roles.includes(activeFilter)
      )
    })).filter(line => line.stations.length > 0);
  }, [activeFilter]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-6xl font-black mb-6 tracking-tighter">Het <span className="text-th-red">Metrolijnen</span> Stelsel</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Dit model vormt de ruggengraat van de TechnoHUB AI aanpak. Van AI-geletterdheid tot de Dark Factory Roadmap: ontdek uw route op basis van uw rol.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 bg-gray-50 p-6 rounded-2xl border border-gray-100 items-center">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400 mr-4">Filter op rol:</label>
          <div className="flex flex-wrap gap-2">
            {ROLES.map(role => (
              <button 
                key={role.id}
                onClick={() => setActiveFilter(role.id)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${activeFilter === role.id ? 'bg-black text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-black'}`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <MetroMap onStationClick={(s) => setSelectedStation(s)} />
          {activeFilter !== 'all' && (
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-gray-200 text-xs font-bold text-gray-500">
              Filtering op rol actief
            </div>
          )}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-black mb-4">L1: Begrip & Taal</h3>
            <p className="text-gray-600 mb-6">Focus op AI Literacy en Governance. Essentieel voor management om de juiste kaders te scheppen.</p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                <span className="text-sm font-bold text-gray-800">Deliverable: AI Beleid v1</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-4">L2: Data & Pilots</h3>
            <p className="text-gray-600 mb-6">Hier gaan we de vloer op. Data readiness en de eerste pilots op basis van Computer Vision of Predictive Maintenance.</p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2" />
                <span className="text-sm font-bold text-gray-800">Deliverable: Werkend MVP Prototype</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-4">L3: Autonomie</h3>
            <p className="text-gray-600 mb-6">De Dark Factory Roadmap. Opschalen van pilots naar volledige autonome productiestromen.</p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                <span className="text-sm font-bold text-gray-800">Deliverable: 3-jarige Roadmap</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <MetroStationModal 
        station={selectedStation} 
        onClose={() => setSelectedStation(null)} 
      />
    </div>
  );
};

export default MetroLinesPage;
