
export interface Station {
  id: string;
  order?: number;
  name: string;
  level: string;
  code?: string; // e.g. "L1-3U"
  duration_hours: number;
  outcomes: string[];
  use_cases: string[];
  deliverables: string[];
  prerequisites: string[];
  next_stations: string[];
  x: number;
  y: number;
  subLabel?: string;
}

export interface MetroLine {
  id: string;
  slug: string;
  name: string;
  color_hint: string;
  description: string;
  tags: string[];
  recommended_for_roles: string[];
  stations: Station[];
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  logo: string;
  description: string;
  ctaText: string;
  link: string;
}
