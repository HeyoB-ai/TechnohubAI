
import React from 'react';
import { Station } from '../types';

interface MetroMapProps {
  onStationClick: (station: Station) => void;
  interactive?: boolean;
}

const MetroMap: React.FC<MetroMapProps> = () => {
  return (
    <iframe
      src="/metrolijn_interactief.html"
      width="100%"
      style={{ border: 'none', aspectRatio: '16/9' }}
      title="AI met TechnoHUB Metrolijn"
    />
  );
};

export default MetroMap;
