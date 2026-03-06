
import React from 'react';

const MetrolijnInteractief: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#1a1a2e] flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="mb-6">
          <h1 className="text-3xl font-black text-white tracking-tighter">
            Interactieve <span className="text-th-red">Metrolijn</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm">Klik op een station voor meer informatie.</p>
        </div>
      </div>
      <div className="flex-grow w-full">
        <iframe
          src="/metrolijn_interactief.html"
          className="w-full h-full border-0"
          style={{ minHeight: 'calc(100vh - 160px)' }}
          title="Interactieve Metrolijn"
        />
      </div>
    </div>
  );
};

export default MetrolijnInteractief;
