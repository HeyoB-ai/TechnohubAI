
import React from 'react';
import { Station } from '../types';

interface MetroStationModalProps {
  station: Station | null;
  onClose: () => void;
}

const MetroStationModal: React.FC<MetroStationModalProps> = ({ station, onClose }) => {
  if (!station) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-th-red/10 text-th-red text-xs font-bold uppercase tracking-wider mb-2">
                Level {station.level} | {station.duration_hours} uur
              </span>
              <h2 className="text-3xl font-black text-black">{station.name}</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Concrete Use Cases</h4>
              <ul className="space-y-2 mb-6">
                {station.use_cases.map((uc, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                    <span className="text-th-red font-bold mt-0.5">•</span>
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Deliverables</h4>
              <ul className="space-y-2">
                {station.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="space-y-4 mb-6">
                <div>
                  <h5 className="text-xs font-bold text-gray-400 uppercase mb-2">Belangrijkste Outcomes</h5>
                  <div className="flex flex-wrap gap-2">
                    {station.outcomes.map((out, i) => (
                      <span key={i} className="bg-white px-3 py-1 border border-gray-200 rounded-md text-[11px] font-bold text-gray-800">
                        {out}
                      </span>
                    ))}
                  </div>
                </div>
                {station.prerequisites.length > 0 && (
                  <div>
                    <h5 className="text-xs font-bold text-gray-400 uppercase mb-1">Prerequisites</h5>
                    <p className="text-[11px] text-gray-500 italic">Vereist station: {station.prerequisites[0]}</p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h5 className="text-xs font-bold text-gray-400 uppercase mb-2">Next Step</h5>
                <p className="text-sm text-th-red font-bold mb-4">
                  {station.next_stations[0] || "Programma afronding"}
                </p>
                <a 
                  href="#/contact"
                  className="block w-full text-center bg-black text-white py-3 rounded-lg font-bold hover:bg-th-red transition-all"
                  onClick={onClose}
                >
                  Plan dit traject
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
};

export default MetroStationModal;
