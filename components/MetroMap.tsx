
import React, { useState } from 'react';
import { METRO_LINES, COLORS } from '../constants';
import { Station } from '../types';

interface MetroMapProps {
  onStationClick: (station: Station) => void;
  interactive?: boolean;
}

const MetroMap: React.FC<MetroMapProps> = ({ onStationClick, interactive = true }) => {
  const [hoveredStation, setHoveredStation] = useState<string | null>(null);

  const getLinePath = (stations: Station[]) => {
    if (stations.length === 0) return "";
    return `M ${stations[0].x} ${stations[0].y} ` + 
           stations.slice(1).map(s => `L ${s.x} ${s.y}`).join(" ");
  };

  return (
    <div className="relative w-full aspect-[1200/650] bg-[#F5F6F8] rounded-3xl border border-gray-200 overflow-hidden shadow-2xl">
      <svg
        viewBox="0 0 1200 650"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background Diagonal Stripes - Image 2 Style */}
        <path d="M 0 650 L 1200 100 L 1200 0 L 0 550 Z" fill="#EAEBEC" />
        <path d="M 0 550 L 1200 0 L 1000 0 L 0 450 Z" fill="#E1E2E4" />
        
        {/* Branding Markers */}
        <text x="1100" y="80" className="text-[14px] font-black fill-gray-400">AI Panda</text>
        <text x="250" y="620" className="text-[14px] font-black fill-gray-400">EDIH</text>

        {/* Directions & Zone Labels */}
        <g transform="translate(300, 240)">
          <path d="M 0 0 L 30 0" stroke={COLORS.red} strokeWidth="6" />
          <path d="M 25 -5 L 35 0 L 25 5 Z" fill={COLORS.red} />
          <text x="45" y="0" className="text-[12px] font-black fill-red-800">Richting 1</text>
          <text x="45" y="15" className="text-[10px] font-bold fill-red-400 uppercase">Begeleid traject AI breed in het bedrijf</text>
        </g>

        <g transform="translate(350, 260) rotate(45)">
          <path d="M 0 0 L 30 0" stroke={COLORS.pink} strokeWidth="6" />
          <path d="M 25 -5 L 35 0 L 25 5 Z" fill={COLORS.pink} />
          <text x="45" y="0" transform="rotate(-45)" className="text-[12px] font-black fill-pink-800">Richting 2</text>
          <text x="45" y="15" transform="rotate(-45)" className="text-[10px] font-bold fill-pink-400 uppercase">Verkenning van een specifieke use case</text>
        </g>

        {/* Connecting Lines (Strategic Choice) */}
        <path d="M 250 200 L 350 350" stroke={COLORS.pink} strokeWidth="12" strokeDasharray="1 2" fill="none" opacity="0.3" />

        {/* Render Lines */}
        {METRO_LINES.map((line) => (
          <g key={line.id}>
            <path
              d={getLinePath(line.stations)}
              fill="none"
              stroke={line.color_hint}
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="metro-line opacity-90 transition-all duration-300"
            />
          </g>
        ))}

        {/* Goals / Doelstellingen */}
        <g transform="translate(1000, 200)">
          <path d="M 0 0 L 100 0" stroke={COLORS.red} strokeWidth="12" strokeLinecap="round" />
          <text x="110" y="0" className="text-[14px] font-black fill-red-800">Doelstelling</text>
          <text x="110" y="15" className="text-[12px] font-bold fill-red-700">AI als integraal</text>
          <text x="110" y="30" className="text-[12px] font-bold fill-red-700">onderdeel van de</text>
          <text x="110" y="45" className="text-[12px] font-bold fill-red-700">bedrijfsvoering</text>
        </g>

        <g transform="translate(1000, 450)">
          <path d="M 0 0 L 100 0" stroke={COLORS.pink} strokeWidth="12" strokeLinecap="round" />
          <text x="110" y="0" className="text-[14px] font-black fill-pink-800">Doelstelling</text>
          <text x="110" y="15" className="text-[12px] font-bold fill-pink-700">Een specifieke use</text>
          <text x="110" y="30" className="text-[12px] font-bold fill-pink-700">case in gebruik</text>
          <text x="110" y="45" className="text-[12px] font-bold fill-pink-700">nemen</text>
        </g>

        {/* Render Stations */}
        {METRO_LINES.map((line) => (
          <g key={`${line.id}-stations`}>
            {line.stations.map((station) => (
              <g
                key={station.id}
                className="cursor-pointer group"
                onClick={() => interactive && onStationClick(station)}
                onMouseEnter={() => setHoveredStation(station.id)}
                onMouseLeave={() => setHoveredStation(null)}
              >
                <circle
                  cx={station.x}
                  cy={station.y}
                  r="12"
                  fill="white"
                  stroke={line.color_hint}
                  strokeWidth="4"
                  className="transition-all duration-200"
                />
                
                {/* Slanted / Vertical Labels based on position */}
                <g transform={`translate(${station.x}, ${station.y - 18}) rotate(-25)`}>
                  <text x="0" y="-12" className="text-[10px] font-bold fill-gray-400 uppercase tracking-tighter">
                    {station.subLabel}
                  </text>
                  <text x="0" y="0" className={`text-[12px] font-black transition-all ${hoveredStation === station.id ? 'fill-black' : 'fill-gray-700'}`}>
                    {station.name}
                  </text>
                </g>
              </g>
            ))}
          </g>
        ))}

        {/* Ideation Branch Connector */}
        <path d="M 100 400 L 100 530 L 150 530" stroke={COLORS.pink} strokeWidth="8" fill="none" strokeLinecap="round" />

        {/* Specific "AI Cirkel" Terminal */}
        <g transform="translate(950, 350)">
           <circle r="18" fill={COLORS.red} className="animate-pulse" />
           <circle r="12" fill="white" />
           <g transform="translate(30, -5) rotate(-25)">
              <text x="0" y="0" className="text-[14px] font-black fill-red-600">AI Cirkel</text>
              <text x="0" y="10" className="text-[10px] font-bold fill-gray-400 italic">Van elkaar blijven leren</text>
           </g>
        </g>
      </svg>
      
      {/* Legend / Overlay */}
      <div className="absolute top-8 left-8">
        <div className="bg-white/90 backdrop-blur p-4 rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-xl font-black mb-1">AI met TechnoHUB</h4>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Powered by WTT</p>
        </div>
      </div>
    </div>
  );
};

export default MetroMap;
