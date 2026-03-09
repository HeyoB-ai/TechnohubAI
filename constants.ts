
import { MetroLine, Partner } from './types';

export const COLORS = {
  blue: '#2F6BFF',
  teal: '#2CC9B6',
  purple: '#B060FF',
  orange: '#FF8A2A',
  red: '#E30613',
  pink: '#F9B9B9',
  green: '#2ECC71',
  black: '#222222',
  th_red: '#E30613'
};

export const METRO_LINES: MetroLine[] = [
  {
    id: "main_path",
    slug: "strategische-route",
    name: "AI BREED IN HET BEDRIJF",
    color_hint: COLORS.red,
    description: "De hoofdroute voor strategische AI verankering.",
    tags: ["strategie", "cultuur"],
    recommended_for_roles: ["R1", "R2"],
    stations: [
      { id: "st_geletterdheid", name: "AI Geletterdheid", level: "Basis", duration_hours: 3, x: 150, y: 200, subLabel: "E-learning", outcomes: [], use_cases: [], deliverables: [], prerequisites: [], next_stations: ["st_workshop"] },
      { id: "st_workshop", name: "Workshop", level: "Basis", duration_hours: 4, x: 250, y: 200, subLabel: "Concreet aan de slag", outcomes: [], use_cases: [], deliverables: [], prerequisites: [], next_stations: ["st_fase1"] },
      { id: "st_fase1", name: "Fase 1: Mindset & Draagvlak", level: "L2", duration_hours: 8, x: 500, y: 200, subLabel: "AI Kansen", outcomes: [], use_cases: [], deliverables: [], prerequisites: [], next_stations: ["st_fase2"] },
      { id: "st_fase2", name: "Fase 2: Vaardigheden", level: "L2", duration_hours: 12, x: 650, y: 200, subLabel: "Experimenten", outcomes: [], use_cases: [], deliverables: [], prerequisites: [], next_stations: ["st_fase3"] },
      { id: "st_fase3", name: "Fase 3: Brede uitrol", level: "L3", duration_hours: 16, x: 800, y: 200, subLabel: "Verankering", outcomes: [], use_cases: [], deliverables: [], prerequisites: [], next_stations: ["st_cirkel"] },
      { id: "st_cirkel", name: "AI Cirkel", level: "L3", duration_hours: 0, x: 950, y: 350, subLabel: "Blijven leren", outcomes: [], use_cases: [], deliverables: [], prerequisites: [], next_stations: [] }
    ]
  },
  {
    id: "branch_usecase",
    slug: "use-case-route",
    name: "SPECIFIEKE USE CASE",
    color_hint: COLORS.pink,
    description: "De route voor diepe technische implementatie.",
    tags: ["techniek", "poc"],
    recommended_for_roles: ["R4", "R6"],
    stations: [
      { id: "st_poc", name: "Proof of Concept", level: "L1", duration_hours: 8, x: 350, y: 350, subLabel: "Concretisering", outcomes: [], use_cases: [], deliverables: [], prerequisites: [], next_stations: ["st_student"] },
      { id: "st_student", name: "Studentenproject", level: "L2", duration_hours: 40, x: 550, y: 400, subLabel: "Onderzoek", outcomes: [], use_cases: [], deliverables: [], prerequisites: [], next_stations: ["st_pov"] },
      { id: "st_pov", name: "Proof of Value", level: "L2", duration_hours: 20, x: 750, y: 400, subLabel: "Business case", outcomes: [], use_cases: [], deliverables: [], prerequisites: [], next_stations: ["st_impl"] },
      { id: "st_impl", name: "Implementatie", level: "L3", duration_hours: 40, x: 950, y: 450, subLabel: "In gebruik nemen", outcomes: [], use_cases: [], deliverables: [], prerequisites: [], next_stations: [] }
    ]
  },
  {
    id: "hub_ideation",
    slug: "ideation",
    name: "IDEATION HUB",
    color_hint: COLORS.pink,
    description: "Startpunt voor nieuwe ideeën.",
    tags: ["creativiteit"],
    recommended_for_roles: ["all"],
    stations: [
      { id: "st_ideation", name: "AI Ideation", level: "L1", duration_hours: 2, x: 100, y: 400, outcomes: [], use_cases: [], deliverables: [], prerequisites: [], next_stations: [] },
      { id: "st_agentic", name: "Agentic AI", level: "L1", duration_hours: 4, x: 120, y: 500, outcomes: [], use_cases: [], deliverables: [], prerequisites: [], next_stations: [] },
      { id: "st_prompt", name: "Prompt engineering", level: "L1", duration_hours: 4, x: 150, y: 530, subLabel: "& Chatbots", outcomes: [], use_cases: [], deliverables: [], prerequisites: [], next_stations: [] }
    ]
  }
];

export const PARTNERS: Partner[] = [
  {
    id: 'aipanda',
    name: 'AI Panda',
    role: 'Strategische AI Partner',
    logo: 'https://aipanda.nl/wp-content/uploads/2023/09/Logo-AIPanda-final555px.png',
    description: 'AI Panda begeleidt organisaties bij het strategisch inzetten van AI. Van bewustwording en strategie tot implementatie en borging — AI Panda maakt AI toegankelijk en werkbaar voor elke organisatie.',
    ctaText: 'Plan kennismaking met Jack',
    link: 'https://www.aipanda.nl'
  },
  {
    id: 'edih',
    name: 'EDIH Digital Hub Noordwest',
    role: 'Europese Digitale Innovatie Hub',
    logo: 'https://edih-dhnw.nl/wp-content/themes/FoundationPress-child/assets/img/EDIH-logo.svg',
    description: 'EDIH Digital Hub Noordwest is het digitale oplaadpunt voor het mkb in Utrecht, Noord-Holland en Flevoland. Als onderdeel van het Digital Europe Programme van de EU helpen zij bedrijven met prototypes, testfaciliteiten, trainingen en advies bij financiering om de digitale transitie te versnellen.',
    ctaText: 'Check EDIH-ondersteuning',
    link: 'https://edih-dhnw.nl'
  }
];
