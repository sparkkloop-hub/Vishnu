export type ProgrammeCategory =
  | 'Engineering & Computing'
  | 'Arts & Sciences'
  | 'Management & Commerce';

export interface Programme {
  id: string;
  code: string;
  title: string;
  degree: string;
  category: ProgrammeCategory;
  duration: string;
  intake: number;
  accreditation: string;
  eligibility: string;
  departmentChair: string;
  medianCtc: string;
  overview: string;
  coreModules: string[];
  laboratories: string[];
}

export interface CampusFacility {
  id: string;
  indexLabel: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  caption: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
}

export interface PlacementRecord {
  department: string;
  eligible: number;
  placed: number;
  rate: string;
  medianCtc: string;
  highestCtc: string;
}

export interface PlacementCycle {
  year: '2025–26' | '2024–25' | '2023–24';
  overallRate: string;
  totalOffers: number;
  recruitingPartners: number;
  highestPackage: string;
  medianPackage: string;
  records: PlacementRecord[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  outcome: string;
}

export const CAMPUS_IMAGES = {
  hero: '/assets/aistudio/image_15d8ef59.png',
  library: '/assets/aistudio/image_6cba0e45.png',
  robotics: '/src/assets/images/krishna_robotics_lab_clean_1794810258509.jpg',
  quadrangle: '/src/assets/images/krishna_quadrangle_clean_1794810258465.jpg',
};

export const PROGRAMMES: Programme[] = [
  {
    id: 'be-cse',
    code: 'KC-CSE-101',
    title: 'Computer Science & Engineering',
    degree: 'B.E.',
    category: 'Engineering & Computing',
    duration: '4 Years (8 Semesters)',
    intake: 180,
    accreditation: 'NBA Accredited · Autonomous',
    eligibility: '10+2 with Physics, Chemistry & Mathematics (TNEA Code: 2722)',
    departmentChair: 'Dr. R. Subramanian, Ph.D. (IIT Madras)',
    medianCtc: '₹8.4 LPA',
    overview:
      'Built around systems architecture, distributed computing, and compiler foundations, preparing engineers for product engineering teams and foundational research.',
    coreModules: [
      'Operating Systems & Kernel Architecture',
      'Distributed Systems & Cloud Infrastructure',
      'Database Internals & Query Optimization',
      'Algorithm Design & Formal Verification',
    ],
    laboratories: [
      'Centre for Distributed Computing',
      'Cloud Native & DevSecOps Studio',
      'Linux Systems & Networks Lab',
    ],
  },
  {
    id: 'btech-aids',
    code: 'KC-AIDS-104',
    title: 'Artificial Intelligence & Data Science',
    degree: 'B.Tech.',
    category: 'Engineering & Computing',
    duration: '4 Years (8 Semesters)',
    intake: 120,
    accreditation: 'AICTE Approved · Autonomous',
    eligibility: '10+2 with Physics, Chemistry & Mathematics (min. 50% aggregate)',
    departmentChair: 'Dr. Meenakshi Sundaram, Ph.D.',
    medianCtc: '₹9.1 LPA',
    overview:
      'Combines statistical learning theory, large-scale data engineering, and applied machine learning with mandatory industry capstone projects in Coimbatore and Bengaluru.',
    coreModules: [
      'Statistical Learning & Convex Optimization',
      'Deep Neural Architectures & Computer Vision',
      'Natural Language Processing & Retrieval Systems',
      'Production MLOps & Data Pipelines',
    ],
    laboratories: [
      'NVIDIA GPU Computing Cluster',
      'Applied Vision & Speech Lab',
      'Data Engineering Workbench',
    ],
  },
  {
    id: 'be-ece',
    code: 'KC-ECE-102',
    title: 'Electronics & Communication Engineering',
    degree: 'B.E.',
    category: 'Engineering & Computing',
    duration: '4 Years (8 Semesters)',
    intake: 120,
    accreditation: 'NBA Accredited · Autonomous',
    eligibility: '10+2 with Physics, Chemistry & Mathematics',
    departmentChair: 'Dr. K. Vetrivel, Ph.D. (IISc Bengaluru)',
    medianCtc: '₹7.2 LPA',
    overview:
      'Focused on semiconductor device physics, RTL verification, RF engineering, and real-time embedded systems tailored to South India’s electronics corridor.',
    coreModules: [
      'Analog & Digital CMOS VLSI Design',
      'Embedded Firmware & RTOS',
      'Digital Signal & Image Processing',
      '5G Wireless & Antenna Systems',
    ],
    laboratories: [
      'Cadence VLSI & Chip Verification Lab',
      'ARM & RISC-V Embedded Systems Centre',
      'RF & Microwave Instrumentation Lab',
    ],
  },
  {
    id: 'be-mech',
    code: 'KC-MECH-103',
    title: 'Mechanical & Mechatronics Engineering',
    degree: 'B.E.',
    category: 'Engineering & Computing',
    duration: '4 Years (8 Semesters)',
    intake: 90,
    accreditation: 'NBA Accredited · Autonomous',
    eligibility: '10+2 with Physics, Chemistry & Mathematics',
    departmentChair: 'Dr. S. Karthikeyan, Ph.D.',
    medianCtc: '₹6.5 LPA',
    overview:
      'Deeply anchored in Coimbatore’s precision manufacturing, pump, and automotive cluster, uniting thermal engineering with industrial robotics and CAD/CAM.',
    coreModules: [
      'Finite Element Analysis & Structural Mechanics',
      'Industrial Automation & PLC Robotics',
      'Precision CNC & Additive Manufacturing',
      'Electric Powertrain & Thermal Systems',
    ],
    laboratories: [
      'Festo Mechatronics & Hydraulics Centre',
      '5-Axis CNC & Rapid Prototyping Studio',
      'Fluid Machinery & Pump Testing Rig',
    ],
  },
  {
    id: 'bsc-cs',
    code: 'KC-SCS-201',
    title: 'Computer Science & Cognitive Systems',
    degree: 'B.Sc.',
    category: 'Arts & Sciences',
    duration: '3 Years (6 Semesters)',
    intake: 120,
    accreditation: 'Bharathiar University Affiliated · NAAC A+',
    eligibility: '10+2 in Science or Commerce with Mathematics / Computer Science',
    departmentChair: 'Prof. N. Kavitha, M.Phil., Ph.D.',
    medianCtc: '₹5.2 LPA',
    overview:
      'Rigorous undergraduate science degree balancing software craftsmanship, discrete mathematics, and enterprise application engineering.',
    coreModules: [
      'Data Structures & Object-Oriented Systems',
      'Full-Stack Web & Mobile Engineering',
      'Applied Probability & Operations Research',
      'Enterprise Software Testing & Security',
    ],
    laboratories: [
      'Software Engineering Studio',
      'Open-Source Computing Lab',
    ],
  },
  {
    id: 'ba-econ',
    code: 'KC-ECO-204',
    title: 'Applied Economics & Econometrics',
    degree: 'B.A.',
    category: 'Arts & Sciences',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    accreditation: 'NAAC A+ Accredited',
    eligibility: '10+2 in any stream with Mathematics or Economics',
    departmentChair: 'Dr. P. Janaki Raman, Ph.D.',
    medianCtc: '₹5.4 LPA',
    overview:
      'Quantitative humanities curriculum integrating macroeconomic policy, industrial economics, and statistical modelling in R and Python.',
    coreModules: [
      'Microeconomic Theory & Game Theory',
      'Time-Series Econometrics & R Modelling',
      'Indian Public Finance & Trade Policy',
      'Development Economics Field Practicum',
    ],
    laboratories: [
      'Econometric Data & Policy Lab',
      'Regional Industrial Research Archive',
    ],
  },
  {
    id: 'bcom-analytics',
    code: 'KC-COM-301',
    title: 'Commerce with Business Analytics',
    degree: 'B.Com.',
    category: 'Management & Commerce',
    duration: '3 Years (6 Semesters)',
    intake: 180,
    accreditation: 'NAAC A+ Accredited',
    eligibility: '10+2 in Commerce, Accountancy, or Mathematics',
    departmentChair: 'Dr. V. Rajeshwari, Ph.D.',
    medianCtc: '₹5.0 LPA',
    overview:
      'Modernizes chartered accounting fundamentals and corporate taxation with financial modelling, ERP workflows, and audit analytics.',
    coreModules: [
      'Corporate Financial Reporting & Ind-AS',
      'Direct & Indirect Taxation (GST)',
      'Financial Modelling & Equity Valuation',
      'SAP ERP & Audit Analytics',
    ],
    laboratories: [
      'Bloomberg-Style Financial Markets Terminal',
      'Accounting & Tally Prime Practice Suite',
    ],
  },
  {
    id: 'mba-global',
    code: 'KC-MBA-401',
    title: 'Master of Business Administration',
    degree: 'M.B.A.',
    category: 'Management & Commerce',
    duration: '2 Years (4 Semesters)',
    intake: 120,
    accreditation: 'AICTE Approved · Autonomous',
    eligibility: 'Any Bachelor’s degree (50%+) with TANCET / CAT / MAT score',
    departmentChair: 'Dr. A. Balasubramaniam, Ph.D.',
    medianCtc: '₹7.8 LPA',
    overview:
      'Case-method graduate management programme featuring dual specializations in Finance, Supply Chain Operations, and People Analytics.',
    coreModules: [
      'Corporate Finance & Capital Markets',
      'Global Supply Chain & Lean Operations',
      'B2B Marketing & Industrial Strategy',
      'Executive Decision Modelling',
    ],
    laboratories: [
      'Case Study & Boardroom Simulation Hall',
      'Supply Chain Analytics Studio',
    ],
  },
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'library',
    indexLabel: '01',
    title: 'Central Knowledge Centre',
    subtitle: 'Quiet Research & Archival Reading Hall',
    image: CAMPUS_IMAGES.library,
    imageAlt: 'Vankatram Learning Centre central library building and landscaped stone courtyard at Krishna College Coimbatore',
    caption: 'Fig. 1 — Vankatram Learning Centre and Central Library, Kuniamuthur Campus.',
    description:
      'Designed around natural clerestory daylighting and acoustic teakwood study bays, the three-tier library houses over 84,000 print volumes alongside full campus access to IEEE Xplore, ACM Digital Library, JSTOR, and SpringerLink.',
    specs: [
      { label: 'Print Collection', value: '84,500+ Volumes & Bound Journals' },
      { label: 'Digital Subscriptions', value: 'IEEE, ACM, Springer, JSTOR' },
      { label: 'Reading Capacity', value: '620 Simultaneous Seats' },
      { label: 'Operating Hours', value: '07:30 – 21:30 (Exam Weeks till 23:00)' },
    ],
  },
  {
    id: 'labs',
    indexLabel: '02',
    title: 'Robotics, VLSI & Computing Labs',
    subtitle: 'Industry-Co-Created Engineering Facilities',
    image: CAMPUS_IMAGES.robotics,
    imageAlt: 'Engineering students and faculty testing embedded circuit boards and robotic arm prototypes',
    caption: 'Fig. 2 — Embedded Systems & Autonomous Robotics bench during undergraduate lab practicum.',
    description:
      'Fourteen specialized research studios built in collaboration with regional and global engineering partners give undergraduates direct hands-on time with 6-axis industrial manipulators, mixed-signal oscilloscopes, and Cadence EDA suites.',
    specs: [
      { label: 'Hardware Workstations', value: '1,450+ High-Memory Nodes' },
      { label: 'Specialised Centres', value: '14 Industry-Supported Labs' },
      { label: 'Annual Patent Filings', value: '38 Published (2025–26 Cycle)' },
      { label: 'Access Policy', value: 'Open Project Access for All Semesters' },
    ],
  },
  {
    id: 'quadrangle',
    indexLabel: '03',
    title: 'Kuniamuthur Quadrangle & Amphitheatre',
    subtitle: '42-Acre Green Campus at the Foot of the Western Ghats',
    image: CAMPUS_IMAGES.quadrangle,
    imageAlt: 'Sunlit stone amphitheatre and shaded colonnaded walkways surrounded by campus gardens in Coimbatore',
    caption: 'Fig. 3 — Stone amphitheatre and terracotta colonnade between academic blocks.',
    description:
      'Set along Palakkad Main Road with clear views of the Western Ghats, the campus is planned around shaded sandstone colonnades, rainwater-harvested botanical courtyards, and open amphitheatres that host student colloquia and cultural festivals.',
    specs: [
      { label: 'Campus Footprint', value: '42 Acres · 72% Open Green Cover' },
      { label: 'Student Residential Halls', value: 'Separate Men’s & Women’s Hostels (2,400 Beds)' },
      { label: 'Coimbatore Transit', value: '48 College Buses across 18 City Routes' },
      { label: 'Athletics Complex', value: '400m Track, Turf Cricket, Indoor Badminton' },
    ],
  },
  {
    id: 'incubation',
    indexLabel: '04',
    title: 'Innovation & Enterprise Incubation Cell',
    subtitle: 'Coimbatore Manufacturing & SaaS Venture Studio',
    image: CAMPUS_IMAGES.hero,
    imageAlt: 'Architectural view of Krishna College Coimbatore academic blocks against the Western Ghats',
    caption: 'Fig. 4 — Academic Block & Innovation Directorate overlooking the central campus lawn.',
    description:
      'Bridging Coimbatore’s deep precision-engineering heritage with modern software startups, the Incubation Cell awards annual pre-seed prototyping grants and connects student founders with MSME mentors and angel networks.',
    specs: [
      { label: 'Active Student Ventures', value: '24 Incubated Teams' },
      { label: 'Prototyping Seed Fund', value: 'Up to ₹5,00,000 per Venture' },
      { label: 'Industry Mentors', value: '35+ Founders & Senior Engineers' },
      { label: 'Co-Working Seats', value: '110 Dedicated Desks' },
    ],
  },
];

export const PLACEMENT_CYCLES: PlacementCycle[] = [
  {
    year: '2025–26',
    overallRate: '96.4%',
    totalOffers: 1142,
    recruitingPartners: 148,
    highestPackage: '₹44.0 LPA',
    medianPackage: '₹7.2 LPA',
    records: [
      {
        department: 'Computer Science & Engineering',
        eligible: 174,
        placed: 171,
        rate: '98.3%',
        medianCtc: '₹8.4 LPA',
        highestCtc: '₹44.0 LPA',
      },
      {
        department: 'Artificial Intelligence & Data Science',
        eligible: 116,
        placed: 113,
        rate: '97.4%',
        medianCtc: '₹9.1 LPA',
        highestCtc: '₹38.5 LPA',
      },
      {
        department: 'Electronics & Communication',
        eligible: 115,
        placed: 110,
        rate: '95.7%',
        medianCtc: '₹7.2 LPA',
        highestCtc: '₹24.0 LPA',
      },
      {
        department: 'Mechanical & Mechatronics',
        eligible: 86,
        placed: 81,
        rate: '94.2%',
        medianCtc: '₹6.5 LPA',
        highestCtc: '₹16.8 LPA',
      },
      {
        department: 'M.B.A. & Commerce Analytics',
        eligible: 280,
        placed: 268,
        rate: '95.7%',
        medianCtc: '₹6.8 LPA',
        highestCtc: '₹18.5 LPA',
      },
    ],
  },
  {
    year: '2024–25',
    overallRate: '95.1%',
    totalOffers: 1086,
    recruitingPartners: 136,
    highestPackage: '₹39.0 LPA',
    medianPackage: '₹6.8 LPA',
    records: [
      {
        department: 'Computer Science & Engineering',
        eligible: 172,
        placed: 167,
        rate: '97.1%',
        medianCtc: '₹7.9 LPA',
        highestCtc: '₹39.0 LPA',
      },
      {
        department: 'Artificial Intelligence & Data Science',
        eligible: 112,
        placed: 108,
        rate: '96.4%',
        medianCtc: '₹8.4 LPA',
        highestCtc: '₹32.0 LPA',
      },
      {
        department: 'Electronics & Communication',
        eligible: 118,
        placed: 111,
        rate: '94.1%',
        medianCtc: '₹6.8 LPA',
        highestCtc: '₹21.5 LPA',
      },
      {
        department: 'Mechanical & Mechatronics',
        eligible: 88,
        placed: 82,
        rate: '93.2%',
        medianCtc: '₹6.1 LPA',
        highestCtc: '₹14.5 LPA',
      },
      {
        department: 'M.B.A. & Commerce Analytics',
        eligible: 274,
        placed: 258,
        rate: '94.2%',
        medianCtc: '₹6.4 LPA',
        highestCtc: '₹16.0 LPA',
      },
    ],
  },
  {
    year: '2023–24',
    overallRate: '93.8%',
    totalOffers: 1014,
    recruitingPartners: 124,
    highestPackage: '₹34.5 LPA',
    medianPackage: '₹6.4 LPA',
    records: [
      {
        department: 'Computer Science & Engineering',
        eligible: 170,
        placed: 163,
        rate: '95.9%',
        medianCtc: '₹7.4 LPA',
        highestCtc: '₹34.5 LPA',
      },
      {
        department: 'Artificial Intelligence & Data Science',
        eligible: 108,
        placed: 103,
        rate: '95.4%',
        medianCtc: '₹7.8 LPA',
        highestCtc: '₹28.0 LPA',
      },
      {
        department: 'Electronics & Communication',
        eligible: 114,
        placed: 106,
        rate: '93.0%',
        medianCtc: '₹6.4 LPA',
        highestCtc: '₹19.0 LPA',
      },
      {
        department: 'Mechanical & Mechatronics',
        eligible: 84,
        placed: 77,
        rate: '91.7%',
        medianCtc: '₹5.8 LPA',
        highestCtc: '₹13.2 LPA',
      },
      {
        department: 'M.B.A. & Commerce Analytics',
        eligible: 268,
        placed: 249,
        rate: '92.9%',
        medianCtc: '₹6.0 LPA',
        highestCtc: '₹15.0 LPA',
      },
    ],
  },
];

export const RECRUITER_NAMES = [
  'Zoho Corporation',
  'Bosch Global Software',
  'Caterpillar India',
  'TCS Digital',
  'Freshworks',
  'L&T Technology Services',
  'PayPal India',
  'Deloitte Consulting',
  'Cognizant GenC Next',
  'Ashok Leyland',
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Before joining the Embedded & VLSI research studio in my third semester, I had only worked on theoretical circuit diagrams. Two years of hands-on RTL verification and faculty mentorship helped me clear core semiconductor interviews directly on campus.',
    name: 'Harini Natarajan',
    role: 'B.E. ECE, Class of 2025 · Associate Silicon Engineer',
    organization: 'Bosch Global Software Technologies, Coimbatore',
    outcome: 'Placed 8 months prior to graduation with a ₹14.5 LPA core offer.',
  },
  {
    id: 't2',
    quote:
      'Graduates from Krishna College consistently arrive with strong systems fundamentals and practical debugging discipline. Over the past three recruiting cycles, our Coimbatore engineering centre has hired 34 full-time developers from the campus.',
    name: 'Senthil Kumar Velusamy',
    role: 'Director of Engineering Talent',
    organization: 'Zoho Corporation, Tamil Nadu',
    outcome: '34 full-time engineering hires across 2023–2026.',
  },
];

export const ADMISSIONS_TIMELINE = [
  {
    step: '01. Online Registration',
    window: 'April – June 2026',
    detail: 'Submit academic transcripts and programme preferences through the admissions desk or TNEA portal (Code: 2722).',
  },
  {
    step: '02. Merit & Scholarship Review',
    window: 'Within 5 Working Days',
    detail: 'Board marks, TNEA/TANCET ranks, and merit-cum-means scholarship tiers (25% to 100% tuition waiver) are evaluated.',
  },
  {
    step: '03. Campus Counselling in Coimbatore',
    window: 'June – July 2026',
    detail: 'Meet department chairs at Kuniamuthur Campus for laboratory tours, syllabus briefings, and seat allotment.',
  },
  {
    step: '04. Enrollment & Induction',
    window: 'August 2026',
    detail: 'Complete hostel/transport allocation and attend the three-week foundational bridge programme.',
  },
];
