import { Discipline, ProjectWork, PracticeInfo } from '../types';
import waterImage from '../assets/images/water_infrastructure_1788706577968.jpg';
import roadImage from '../assets/images/road_infrastructure_1788706592621.jpg';
import electricalImage from '../assets/images/electrical_infrastructure_1788706607257.jpg';

export const PRACTICE_INFO: PracticeInfo = {
  companyName: 'DENKIS',
  legalForm: 'Infrastructure Design & Engineering Consultancy',
  motto: 'Unified Civil, Hydraulic & Electrical Engineering Design',
  founder: 'D. Kiselovs, M.Sc. Eng.',
  email: 'dkiselovs@gmail.com',
  phone: '+371 29 000 000', // standard clean format, editable
  location: 'Riga, Latvia / European Union (Remote & On-Site)',
  serviceRadius: 'National & International Municipal / Private Projects',
  experienceYears: 12,
  certifications: [
    'Certified Civil & Infrastructure Design Engineer',
    'Water Supply & Wastewater System Design Lead',
    'Highways, Urban Streets & Grading Design Specialist',
    'Electrical Power Distribution & Utility Engineering',
  ],
};

export const DISCIPLINES: Discipline[] = [
  {
    id: 'water',
    title: 'Water & Wastewater Infrastructure',
    tagline: 'Hydraulic network modeling, wastewater conveyance & stormwater resilience',
    color: {
      primary: '#0284c7', // Sky blue
      light: '#f0f9ff',
      border: '#bae6fd',
      badge: 'bg-sky-50 text-sky-700 border-sky-200',
      text: 'text-sky-600',
    },
    iconName: 'Droplets',
    description:
      'Comprehensive design of municipal and industrial water networks. We develop rigorous hydraulic models, pressurized potable distribution pipelines, gravity wastewater interceptors, pumping stations, and sustainable urban drainage systems (SUDS) with attenuation basins.',
    coreServices: [
      'Potable water transmission pipelines & district distribution networks',
      'Sanitary sewer networks, gravity collectors & interceptor design',
      'Hydraulic pumping stations, pressure surge & valve chambers',
      'Stormwater retention basins, oil/grit separators & culverts',
      'Hydraulic flow simulation, pipe sizing & pressure gradient modeling',
      'Trenchless pipeline installation (HDD / microtunneling) alignment',
    ],
    designStandards: ['EN 805 / EN 752', 'EPANET / SWMM', 'Civil 3D Pipe Networks', 'ISO 9001 Quality'],
    deliverables: [
      'Longitudinal hydraulic profile drawings',
      'Hydraulic surge & network network capacity calculations',
      'Pumping station equipment & chamber structural details',
      'Bill of quantities (BOQ) & technical specifications',
    ],
  },
  {
    id: 'road',
    title: 'Road & Transportation Design',
    tagline: 'Geometric alignment, pavement engineering & multimodal corridors',
    color: {
      primary: '#059669', // Emerald / road slate
      light: '#f0fdf4',
      border: '#bbf7d0',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      text: 'text-emerald-600',
    },
    iconName: 'Navigation',
    description:
      'Precision civil engineering for urban roadways, regional highways, industrial logistics parks, and intersection retrofits. Our geometric designs prioritize road safety, optimal sightlines, vehicle turning clearance, integrated stormwater runoff, and long-term pavement durability.',
    coreServices: [
      'Highway & urban street geometric horizontal / vertical alignments',
      'Roundabouts, signalized intersections & channelized junctions',
      'Flexible & rigid pavement structure layer design (AASHTO / Eurocode)',
      'Digital terrain grading, cut/fill earthworks volume optimization',
      'Roadside drainage gutters, swales & sub-base drainage systems',
      'Traffic organization, lane marking, and regulatory signage plans',
    ],
    designStandards: ['Eurocode Civil / National Road Specs', 'AutoCAD Civil 3D', 'AutoTURN Swept Path Analysis'],
    deliverables: [
      'Detailed cross-sections every 20m with crossfall transitions',
      'Earthwork mass-haul diagrams & cut/fill balancing reports',
      'Pavement structural thickness verification calculations',
      'Traffic management & temporary detour staging documentation',
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical & Power Infrastructure',
    tagline: 'MV/LV utility distribution, substation layouts & smart streetlighting',
    color: {
      primary: '#d97706', // Amber / electrical copper
      light: '#fffbeb',
      border: '#fde68a',
      badge: 'bg-amber-50 text-amber-700 border-amber-200',
      text: 'text-amber-600',
    },
    iconName: 'Zap',
    description:
      'Robust electrical power engineering for public utilities, infrastructure corridors, and industrial facilities. We engineer Medium and Low Voltage (MV/LV) underground cable routes, distribution transformer substations, smart streetlighting networks, and municipal electrical grid integrations.',
    coreServices: [
      'Medium Voltage (10–20 kV) & Low Voltage (0.4 kV) underground distribution',
      'Compact packaged transformer substation (KTP) design & layouts',
      'Public highway & urban architectural streetlighting systems',
      'Photometric calculations and luminance optimization (DIALux)',
      'Short-circuit currents, voltage drop & cable thermal load modeling',
      'Utility corridor coordination, conduit banks & duct chambers',
    ],
    designStandards: ['IEC 60364 / EN 50110', 'DIALux evo', 'CAD Single-Line Diagrams', 'Earthing & Lightning Standards'],
    deliverables: [
      'Comprehensive single-line electrical schematics',
      'Cable routing plans with depth profiles & clearance checks',
      'Photometric isolux contour plots & pole spacing plans',
      'Substation equipment layout & earthing mesh designs',
    ],
  },
];

export const PROJECTS: ProjectWork[] = [
  {
    id: 'proj-water-treatment',
    title: 'Municipal Hydraulic Reticulation & Pumping Station',
    subtitle: 'Integrated Potable Water Supply & Pressure Boosting Facility',
    disciplineId: 'water',
    disciplineName: 'Water Infrastructure',
    imageUrl: waterImage,
    year: '2025',
    location: 'Northern Municipal District',
    category: 'Water & Wastewater',
    description:
      'Turnkey engineering design of a regional potable water pumping facility and 8.4 km trunk distribution main. Engineered to stabilize supply pressure across 18,000 households and integrate emergency storage capacity.',
    challenge:
      'Accommodating significant ground elevation variances and preventing hydraulic water hammer surges while passing through congested utility corridors.',
    solution:
      'Implemented automated variable-frequency pump sets with air-vessel surge protection. Utilized 3D coordinated pipe routing to bypass electrical conduits and highway crossings with zero field clashes.',
    deliverables: [
      'Complete EPANET hydraulic network simulation report',
      'Civil 3D longitudinal pipeline profiles with air/drain valves',
      'Station structural arrangement & wet-well pump chamber details',
      'Full technical specifications and equipment datasheets',
    ],
    metrics: [
      { label: 'Pipeline Length', value: '8.4 km' },
      { label: 'Peak Capacity', value: '420 m³/h' },
      { label: 'Network Pressure', value: '5.2 bar' },
      { label: 'Population Served', value: '18,500' },
    ],
    softwareUsed: ['AutoCAD Civil 3D', 'EPANET 2.2', 'Bentley WaterGEMS', 'MathCAD'],
  },
  {
    id: 'proj-road-corridor',
    title: 'Regional Highway Corridor & Intersection Overhaul',
    subtitle: 'Geometric Alignment, Drainage & Structural Pavement Design',
    disciplineId: 'road',
    disciplineName: 'Road Infrastructure',
    imageUrl: roadImage,
    year: '2024',
    location: 'Baltic Transit Corridor',
    category: 'Transportation Engineering',
    description:
      'Detailed civil engineering for a 6.2 km dual-lane arterial corridor retrofit, including two high-capacity roundabouts, grade-separated stormwater drainage retention swales, and pedestrian crossings.',
    challenge:
      'High ground-water table and saturated clay subgrade causing frequent frost heaves and pavement distress along the historical alignment.',
    solution:
      'Designed a multi-layer geogrid-reinforced sub-base with frost-resistant blanket layer and deep longitudinal perforated drainage collectors connected to bio-retention basins.',
    deliverables: [
      'Horizontal & vertical geometric road alignment plans',
      'Cross-sections every 20 meters with dynamic super-elevation modeling',
      'AutoTURN 3D vehicle swept-path simulation for oversized freight',
      'Comprehensive earthworks mass-haul cut/fill balance',
    ],
    metrics: [
      { label: 'Corridor Length', value: '6.2 km' },
      { label: 'Design Speed', value: '90 km/h' },
      { label: 'Pavement Life', value: '25 Years' },
      { label: 'Roundabout Outer Ø', value: '42 m' },
    ],
    softwareUsed: ['Autodesk Civil 3D', 'AutoTURN Pro', 'Vehicle Tracking', 'Drainage Design Subassembly'],
  },
  {
    id: 'proj-electrical-grid',
    title: 'Industrial Substation & 20kV Distribution Grid',
    subtitle: 'Medium Voltage Underground Cable Network & Modern Streetlighting',
    disciplineId: 'electrical',
    disciplineName: 'Electrical Infrastructure',
    imageUrl: electricalImage,
    year: '2024 – 2025',
    location: 'TechnoPark Logistics Hub',
    category: 'Power Engineering',
    description:
      'Comprehensive engineering of a 2x1600 kVA packaged transformer substation and 11.5 km of 20kV / 0.4kV underground cable network, coupled with energy-efficient LED streetlighting along all access corridors.',
    challenge:
      'Balancing high-voltage cable thermal dissipation, crossing regional gas mains, and guaranteeing N-1 redundancy for sensitive industrial tenants.',
    solution:
      'Designed dual-feed ring main topology with automated SF6 switchgear. Prepared 3D thermal dissipation simulations for multi-tier cable trench duct banks.',
    deliverables: [
      'Complete single-line schematics for 20kV / 0.4kV switchboards',
      'DIALux photometric roadway lighting calculations (Class M3/M4)',
      'Substation civil base slab and earthing grid layout',
      'Cable thermal ampacity and short-circuit withstand reports',
    ],
    metrics: [
      { label: 'Transformer Power', value: '3,200 kVA' },
      { label: 'Cable Network', value: '11.5 km' },
      { label: 'Distribution Voltage', value: '20 / 0.4 kV' },
      { label: 'LED Light Points', value: '148 units' },
    ],
    softwareUsed: ['AutoCAD Electrical', 'DIALux evo', 'ETAP Grid Analysis', 'Schneider Ecodial'],
  },
];

export const SYNERGY_POINTS = [
  {
    title: 'Zero Conflict Utility Coordination',
    description:
      'Because DENKIS designs water, road, and electrical networks under one roof, pipe crossings, storm drains, and cable ducts are clash-resolved during design—eliminating costly contractor rework on site.',
    icon: 'Layers',
  },
  {
    title: 'BIM & 3D Civil Integration',
    description:
      'All disciplines share common terrain models, horizontal alignments, and geo-referenced coordinate systems in Autodesk Civil 3D for unified municipal approvals.',
    icon: 'Boxes',
  },
  {
    title: 'Direct Principal Engineer Access',
    description:
      'Work directly with the signing engineer. No bureaucracy, no junior handoffs, and instant turnaround on technical design queries and authority reviews.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Rigorous Technical Compliance',
    description:
      'Adherence to national building codes, European standards (Eurocodes, EN standards), and local municipal utility operators’ strict technical conditions.',
    icon: 'FileCheck',
  },
];
