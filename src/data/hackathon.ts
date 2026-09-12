export interface Track {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  iconName: string;
  accentColor: string;
  cardStyle: "standard" | "rotated" | "wide" | "circle";
  tags: string[];
  highlights?: string[];
}

export interface TimelineItem {
  time: string;
  title: string;
  phase: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface Prize {
  title: string;
  amount: string;
  subtitle: string;
  perks: string[];
  badge?: string;
  featured?: boolean;
  longDescription?: string;
  highlights?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Coordinator {
  name: string;
  phone: string;
  displayPhone: string;
  role: string;
}

export interface FacultyCoordinator {
  name: string;
  role: string;
}

export interface Pillar {
  id: string;
  title: string;
  action: string;
  subAction: string;
  desc: string;
  icon: string;
}

export interface Expectation {
  title: string;
  desc: string;
  icon: string;
  longDescription?: string;
  highlights?: string[];
}

export interface OrganizerInfo {
  department: string;
  streamCluster: string;
  college: string;
  campus: string;
  location: string;
  pincode: string;
  collegeUrl: string;
  groupUrl: string;
  institutionTag: string;
  accreditation: string;
  groupName: string;
  slogan: string;
  startupsMilestone: string;
  playbookSlogan: string;
  frameworkTag: string;
}

export const hackathon = {
  name: "HACKNEXT'26",
  edition: "SERIES 2.0",
  subtitle: "24 HOURS HACKATHON",
  tagline: "IDEAS TODAY | IMPACT TOMORROW",
  codeTagline: "< IDEATE · BUILD · COLLABORATE · CODE />",
  bottomMotto: "A BRIGHTER TOMORROW",
  date: "08 - 09 OCTOBER 2026",
  shortDate: "08 - 09 OCT 2026",
  startTime: "9:00 AM ONWARDS",
  duration: "24 Hours",
  durationTag: "ONE DAY. ENDLESS POSSIBILITIES.",
  venue: "DT Playhouse, SNS AI Campus, Coimbatore",
  venueHall: "DT PLAYHOUSE",
  campusName: "SNS AI CAMPUS, COIMBATORE",
  mode: "In-Person 24-Hour Campus Hackathon",
  teamSize: "1 - 4 Members per team",
  
  // Registration details
  externalFee: "₹500 / PERSON",
  feeNote: "Registration Fee ₹500 / Person",
  totalPrizePool: "UP TO ₹20,000",
  registrationUrl: "https://wa.me/919361278375?text=Hi%20Gugan%2C%20I%20want%20to%20register%20for%20HACKNEXT%2726%20Series%202.0.%20Please%20share%20the%20registration%20and%20payment%20details.",
  whatsappCommunityUrl: "https://chat.whatsapp.com/HackNext2 Community",
  isRegistrationUrlConfirmed: true,
  qrCodePath: "/assets/registration-form-qr.png",
  formQrPath: "/assets/registration-form-qr.png",
  communityQrPath: "/assets/whatsapp-community-qr.jpg",
  slotsNote: "LIMITED SLOTS! REGISTER NOW!",

  // Student Coordinators from Poster
  coordinators: [
    {
      name: "GUGAN KM",
      phone: "+919361278375",
      displayPhone: "9361278375",
      role: "Student Coordinator"
    },
    {
      name: "AKSHAYA R",
      phone: "+919894906986",
      displayPhone: "9894906986",
      role: "Student Coordinator"
    },
    {
      name: "MOHAN RAJ. R",
      phone: "+919025886070",
      displayPhone: "9025886070",
      role: "Student Coordinator"
    }
  ] as Coordinator[],

  // Faculty Coordinator from Poster
  facultyCoordinator: {
    name: "Mrs. K. Kalaivani",
    role: "Faculty Coordinator"
  } as FacultyCoordinator,

  // 4 Core Pillars from the Poster
  pillars: [
    {
      id: "code",
      title: "CODE",
      action: "WRITE LOGIC.",
      subAction: "BUILD INTELLIGENCE.",
      desc: "Architect neural logic, optimize algorithmic pipelines, and craft high-performance AI engines under the clock.",
      icon: "Brain"
    },
    {
      id: "create",
      title: "CREATE",
      action: "DESIGN SOLUTIONS.",
      subAction: "CRAFT EXPERIENCES.",
      desc: "Translate complex AI capabilities into intuitive, accessible, and delightful human experiences.",
      icon: "Users"
    },
    {
      id: "conquer",
      title: "CONQUER",
      action: "SOLVE CHALLENGES.",
      subAction: "BREAK LIMITS.",
      desc: "Tackle high-stakes industry bottlenecks, overcome technical constraints, and out-innovate the ordinary.",
      icon: "Lightbulb"
    },
    {
      id: "transform",
      title: "TRANSFORM",
      action: "MAKE AN IMPACT.",
      subAction: "SHAPE THE FUTURE.",
      desc: "Deploy viable solutions that address real societal problems and create long-term technological impact.",
      icon: "Rocket"
    }
  ] as Pillar[],

  // "What To Expect" from the Poster
  whatToExpect: [
    {
      title: "PRIZE POOL UP TO ₹20,000",
      desc: "Grand cash prize pool up to ₹20,000, sponsor bounties, tech kits, and accelerator opportunities.",
      longDescription: "Compete for your share of the ₹20,000 cash prize pool, hard-earned trophies, prestigious plaques, and exclusive seed grant access via SNS 1000 I-Startups.",
      icon: "Trophy",
      highlights: [
        "Prize Pool Up To ₹20,000",
        "SNS 1000 I-Startups Incubation Access",
        "Official winners trophies & mementos",
        "Special AI Track & Design Thinking awards"
      ]
    },
    {
      title: "PARTICIPATION CERTIFICATE FOR ALL",
      desc: "Official certified recognition for all team members endorsed by SNS College of Technology.",
      longDescription: "Every registered hacker who presents a working solution receives an officially verified Certificate of Participation endorsed by SNS College of Technology (Autonomous).",
      icon: "Award",
      highlights: [
        "Participation Certificate for All",
        "Globally recognized autonomous college credential",
        "Endorsed by IV CS Stream Cluster & Department of AI/CS",
        "Individual certificate for every team member"
      ]
    },
    {
      title: "TOP TEAM GETS AN INTERNSHIP OPPORTUNITY",
      desc: "Exclusive internship offer for the winning squad with top tech firms and AI startup partners.",
      longDescription: "The top winning team gains direct internship placement opportunities to build production AI systems with leading startup partners and SNS AI incubators.",
      icon: "Briefcase",
      highlights: [
        "Direct internship placement for top winning team",
        "1-on-1 mentorship with tech founders",
        "Fast-track incubation at SNS 1000 I-Startups",
        "Real-world AI deployment experience"
      ]
    },
    {
      title: "FOOD & BEVERAGES (3 MEALS + 4 REFRESHMENTS)",
      desc: "Complete 24-hour food & beverage coverage including 3 full meals and 4 refreshment breaks.",
      longDescription: "Stay energized throughout the 24 hours with complimentary high-protein meals, midnight coffee, snacks, and 4 scheduled refreshment breaks provided at SNS AI Campus.",
      icon: "Utensils",
      highlights: [
        "3 Gourmet Meals (Lunch, Dinner, Breakfast)",
        "4 Refreshment & Coffee Breaks",
        "Midnight snack surge & energy boosters",
        "100% complimentary for all registered participants"
      ]
    },
    {
      title: "REGISTRATION FEE ₹500 / PERSON",
      desc: "Affordable ₹500 per person entry fee covering 24-hour campus facilities, meals, Wi-Fi, and mentoring.",
      longDescription: "All-inclusive registration fee of ₹500 per person giving complete 24-hour access to DT Playhouse, high-speed Wi-Fi, lab equipment, 3 meals, 4 refreshments, and certificates.",
      icon: "CreditCard",
      highlights: [
        "Flat ₹500 per person fee",
        "Includes 3 meals + 4 refreshments",
        "Covers full 24-hour campus lab access",
        "Participation certificate for every builder"
      ]
    }
  ] as Expectation[],

  organizer: {
    streamCluster: "IV CS STREAM CLUSTER",
    department: "DEPARTMENT OF ARTIFICIAL INTELLIGENCE & COMPUTER SCIENCE",
    college: "SNS COLLEGE OF TECHNOLOGY",
    campus: "SNS AI CAMPUS",
    location: "COIMBATORE",
    pincode: "641035",
    collegeUrl: "https://snsct.org/",
    groupUrl: "https://www.snsgroups.com/",
    institutionTag: "SNSCT",
    accreditation: "An Autonomous Institution | Coimbatore - 641035",
    groupName: "SNS INSTITUTIONS",
    slogan: "Redesigning Common Minds & Business Towards Excellence",
    startupsMilestone: "Celebrating 1000 I-Startups in 10 years",
    playbookSlogan: "Design Thinking Playbook — A Pathway to 10LPA and beyond",
    frameworkTag: "1st GenAI Powered Design Thinking FrameWork"
  } as OrganizerInfo,

  stats: [
    { value: "24", unit: "HOURS", label: "Non-Stop Building", description: "One Day. Endless Possibilities." },
    { value: "08-09", unit: "OCT", label: "08-09 October 2026", description: "From 9:00 AM Onwards @ SNS AI Campus" },
    { value: "500", unit: "INR", label: "Fee ₹500 / Person", description: "Includes 3 meals, 4 refreshments & 24H access" },
    { value: "20K", unit: "INR", label: "Prize Pool Up To ₹20,000", description: "Plus Internship Opportunity for Top Team" }
  ],

  tracks: [
    {
      id: "medtech-healthtech",
      title: "MEDTECH / BIOTECH / HEALTHTECH",
      category: "HEALTHCARE & LIFE SCIENCES",
      description: "Build clinical diagnostics, bio-signal monitoring, genomic analysis, assistive medical hardware, and AI predictive healthcare.",
      longDescription: "Transform modern healthcare through AI-assisted diagnosis, telemedicine, wearable biomedical sensors, computer vision pathology, and personalized health recommendation engines.",
      iconName: "HeartPulse",
      accentColor: "#00E5FF",
      cardStyle: "standard",
      tags: ["MedTech", "BioTech", "Diagnostics", "Computer Vision", "Wearables", "HIPAA"],
      highlights: [
        "Real-time patient vital anomaly detection",
        "AI-assisted radiology & pathology imaging",
        "Genomic sequence & biological data modeling",
        "Affordable rural healthcare diagnostic kits"
      ]
    },
    {
      id: "smart-automation",
      title: "SMART AUTOMATION",
      category: "ROBOTICS & INTELLIGENT SYSTEMS",
      description: "Engineer autonomous robotic workflows, industrial IoT intelligence, agentic process automation, and intelligent edge control.",
      longDescription: "Design next-gen automation engines connecting hardware controllers, vision pipelines, predictive machinery maintenance, and autonomous multi-agent task execution.",
      iconName: "Cpu",
      accentColor: "#FFD21F",
      cardStyle: "rotated",
      tags: ["Robotics", "Industrial IoT", "Edge AI", "Agentic Automation", "Microcontrollers", "YOLO"],
      highlights: [
        "Autonomous industrial robotics & cobots",
        "Predictive equipment maintenance & digital twins",
        "Vision-guided quality inspection pipelines",
        "Low-latency edge microcontroller inference"
      ]
    },
    {
      id: "clean-green-tech",
      title: "CLEAN AND GREEN TECHNOLOGY",
      category: "SUSTAINABILITY & CLIMATE",
      description: "Develop renewable energy microgrids, carbon footprint intelligence, automated waste segregation, and circular economy platforms.",
      longDescription: "Empower planetary sustainability through AI microgrid management, satellite crop & water monitoring, automated recyclable sorting, and transparent corporate emission tracking.",
      iconName: "Leaf",
      accentColor: "#00E5FF",
      cardStyle: "circle",
      tags: ["CleanTech", "Renewable Energy", "Smart Agriculture", "Waste AI", "Carbon Accounting", "GeoAI"],
      highlights: [
        "Smart renewable microgrid load balancing",
        "Automated computer-vision waste segregation",
        "Precision agriculture & soil moisture analytics",
        "Verifiable corporate carbon tracking"
      ]
    },
    {
      id: "disaster-management",
      title: "DISASTER MANAGEMENT",
      category: "PUBLIC SAFETY & RESILIENCE",
      description: "Architect early warning flood/earthquake systems, autonomous search & rescue drones, emergency mesh networks, and relief dispatchers.",
      longDescription: "Deliver life-saving situational awareness in high-stakes crises. Combine satellite imagery, GIS sensory feeds, real-time rescue communication mesh, and predictive casualty forecasting.",
      iconName: "ShieldAlert",
      accentColor: "#FFD21F",
      cardStyle: "wide",
      tags: ["Disaster AI", "Search & Rescue", "Early Warning", "Drones", "GIS / Satellite", "Mesh Networks"],
      highlights: [
        "Predictive flood, cyclone & wildfire forecasting",
        "Thermal drone vision for survivor search & rescue",
        "Decentralized offline mesh communication",
        "Dynamic emergency supplies dispatch logistics"
      ]
    },
    {
      id: "transportation-logistics",
      title: "TRANSPORTATION & LOGISTICS",
      category: "MOBILITY & SUPPLY CHAIN",
      description: "Optimize autonomous fleet dispatch, real-time urban traffic routing, cold-chain monitoring, and multi-modal supply chain logistics.",
      longDescription: "Pioneer next-generation smart mobility. Build dynamic route optimization models, port and warehouse automation systems, vehicle-to-everything (V2X) safety tech, and last-mile delivery frameworks.",
      iconName: "Truck",
      accentColor: "#00E5FF",
      cardStyle: "standard",
      tags: ["Smart Mobility", "Supply Chain", "V2X", "Fleet AI", "Route Optimization", "Cold Chain"],
      highlights: [
        "Real-time urban traffic congestion dissipation",
        "Predictive multi-modal supply chain optimization",
        "Autonomous last-mile delivery tracking",
        "Cold-chain pharmaceutical temperature monitors"
      ]
    },
    {
      id: "cybersecurity",
      title: "CYBERSECURITY",
      category: "DIGITAL DEFENSE & TRUST",
      description: "Build AI intrusion detection shields, automated zero-day vulnerability scanners, privacy-preserving cryptographic pipelines, and fraud prevention.",
      longDescription: "Harden global cyber defense infrastructure. Deploy generative threat modeling, automated binary exploit detection, decentralized identity verification, and adversarial neural defense mechanisms.",
      iconName: "ShieldCheck",
      accentColor: "#111111",
      cardStyle: "wide",
      tags: ["Zero Trust", "Threat Intelligence", "Fraud AI", "DevSecOps", "Anomaly Detection", "Cryptography"],
      highlights: [
        "Automated real-time network anomaly detection",
        "Generative threat hunting & honeypot defense",
        "Smart contract vulnerability fuzzing",
        "Privacy-preserving federated machine learning"
      ]
    }
  ] as Track[],

  timeline: [
    {
      time: "08 OCT — 09:00 AM",
      title: "CHECK-IN, KIT COLLECTION & KICKOFF CEREMONY",
      phase: "08 OCT • 09:00 AM",
      description: "Arrival at DT Playhouse, SNS AI Campus, registration verification, kit collection, swag distribution, and electrifying kickoff ceremony.",
      highlight: "CHECK-IN & KICKOFF",
      icon: "DoorOpen"
    },
    {
      time: "08 OCT — 10:30 AM",
      title: "HACKING COMMENCES",
      phase: "08 OCT • 10:30 AM",
      description: "The 24-hour clock officially begins! Teams claim workstations, assemble architecture, and initialize codebases.",
      highlight: "24H CLOCK STARTS",
      icon: "Code"
    },
    {
      time: "08 OCT — 03:00 PM",
      title: "MENTORSHIP CHECKPOINT 1",
      phase: "08 OCT • 03:00 PM",
      description: "Architecture review with domain experts and SNS AI mentors to stress-test logic and offer domain guidance.",
      highlight: "ARCHITECTURE REVIEW",
      icon: "UserCheck"
    },
    {
      time: "08 OCT — 08:00 PM",
      title: "DINNER & MID-WAY PROTOTYPE EVALUATION",
      phase: "08 OCT • 08:00 PM",
      description: "Refuel with gourmet dinner, rapid pitch tune-up, and mid-way working prototype evaluation by mentors and coordinators.",
      highlight: "MID-WAY EVALUATION",
      icon: "Utensils"
    },
    {
      time: "09 OCT — 00:00 AM",
      title: "MIDNIGHT ENERGY SURGE & BUG SQUASHING",
      phase: "09 OCT • 00:00 AM",
      description: "Midnight coffee boosts, energetic beats, rapid bug squashing sprint, midnight snacks, and core AI model convergence.",
      highlight: "MIDNIGHT ENERGY SURGE",
      icon: "Zap"
    },
    {
      time: "09 OCT — 07:00 AM",
      title: "FEATURE FREEZE, GITHUB COMMIT & DECK SUBMISSION",
      phase: "09 OCT • 07:00 AM",
      description: "Feature freeze! Push final commits to GitHub, deploy live preview URLs, and synthesize pitch deck slides.",
      highlight: "FEATURE FREEZE",
      icon: "GitCommit"
    },
    {
      time: "09 OCT — 10:30 AM",
      title: "GRAND DEMOS TO JURY, WINNER FELICITATION & CLOSING GALA",
      phase: "09 OCT • 10:30 AM",
      description: "Grand live project presentations to jury panel, winner felicitation ceremony, and closing gala!",
      highlight: "GRAND DEMOS & FELICITATION",
      icon: "Trophy"
    }
  ] as TimelineItem[],

  prizes: [
    {
      title: "FIRST PLACE",
      amount: "WINNER",
      subtitle: "HACKNEXT'26 Champion",
      longDescription: "The supreme champions of HACKNEXT'26 SERIES 2.0. Awarded to the team that demonstrates unprecedented technical execution, exceptional model performance, and commercial viability under the 1st GenAI Powered Design Thinking framework.",
      perks: [
        "Major Share of Prize Pool Up To ₹20,000",
        "Top Team Gets An Internship Opportunity",
        "Winner Trophy & Mementos",
        "SNS 1000 I-Startups Incubation Access",
        "Winner Certificates of Excellence"
      ],
      highlights: [
        "Direct cash prize disbursal upon finale ceremony",
        "Top winning team receives exclusive internship offers",
        "Champion trophy engraved with team identity",
        "Direct venture pre-seed fast-track at SNS Incubation",
        "Priority media feature & campus recognition"
      ],
      badge: "CHAMPION",
      featured: true
    },
    {
      title: "SECOND PLACE",
      amount: "RUNNER UP",
      subtitle: "Second Overall Winner",
      longDescription: "Celebrates the runner-up squad that pushed the boundaries of engineering, design polish, and real-world problem solving.",
      perks: [
        "Runner-Up Cash Award from ₹20,000 Pool",
        "Runner-up Trophy",
        "Mentorship with Tech Founders",
        "Certificates of Achievement"
      ],
      highlights: [
        "Substantial cash reward from the ₹20,000 pool",
        "Runner-up trophy and physical mementos",
        "Direct founder mentorship sessions",
        "Certificates of Achievement for all squad members"
      ],
      badge: "2ND PLACE",
      featured: false
    },
    {
      title: "SPECIAL AWARDS",
      amount: "PERKS",
      subtitle: "Innovation & Design Thinking",
      longDescription: "Recognizing outlier teams demonstrating extraordinary design thinking prowess, novel architectural creativity, and green sustainability impacts.",
      perks: [
        "Special Recognition Award",
        "SNS AI Campus Accelerator Support",
        "Design Thinking Excellence Badge",
        "Cloud Credits & Swag Kits"
      ],
      highlights: [
        "Design Thinking Excellence honor by SNSCT",
        "AI Campus Accelerator track interview",
        "Special developer swag and cloud compute perks",
        "Endorsement badges on team portfolio"
      ],
      badge: "EXCELLENCE",
      featured: false
    },
    {
      title: "ALL PARTICIPANTS",
      amount: "CERTIFIED",
      subtitle: "Guaranteed Recognition",
      longDescription: "Every single builder who codes through the 24 hours gains verifiable institutional credentials, lifelong networks, and battle-tested hacking experience.",
      perks: [
        "Participation Certificate for All",
        "Food & Beverages (3 Meals + 4 Refreshments)",
        "1-on-1 Mentoring by Industry AI Experts",
        "24-Hour Campus Experience"
      ],
      highlights: [
        "Autonomous College Certificate with official stamp",
        "Includes 3 Meals + 4 Refreshments",
        "Mentorship feedback from industry professionals",
        "Complimentary high-speed campus facilities & Wi-Fi"
      ],
      badge: "FOR EVERYONE",
      featured: false
    }
  ] as Prize[],

  teamRoles: [
    { id: "ai", title: "AI/ML ARCHITECT", desc: "Builds model logic, prompts, fine-tuning, embeddings, and intelligent agents.", color: "#00E5FF" },
    { id: "dev", title: "FULLSTACK DEVELOPER", desc: "Builds bulletproof backend APIs, scalable microservices, and responsive web/mobile apps.", color: "#FFD21F" },
    { id: "des", title: "UI/UX DESIGNER", desc: "Crafts intuitive human-AI interactions, micro-animations, design tokens, and sleek pitch decks.", color: "#111111" },
    { id: "str", title: "PRODUCT STRATEGIST", desc: "Applies Design Thinking framework to identify market pain points and validate unit viability.", color: "#00E5FF" }
  ],

  howItWorks: [
    {
      step: "01",
      title: "SCAN QR TO REGISTER",
      desc: "Scan the website QR or click the register button to message a coordinator on WhatsApp. Registration fee is ₹500 per person."
    },
    {
      step: "02",
      title: "EMBRACE THE CHALLENGE",
      desc: "Explore AI domains, select your vertical, brainstorm via the Design Thinking playbook, and plan your architecture."
    },
    {
      step: "03",
      title: "24 HOURS OF AI BUILDING",
      desc: "Report at DT Playhouse, SNS AI Campus at 9:00 AM on 08 October 2026. Hack non-stop with 3 meals, 4 refreshments, mentorship, and Wi-Fi."
    },
    {
      step: "04",
      title: "DEMO, WIN & TRANSFORM",
      desc: "Pitch working solutions to the expert jury, showcase live demos, collect certificates, and claim exciting prizes up to ₹20,000!"
    }
  ],

  faqs: [
    {
      id: "faq-1",
      question: "What is HACKNEXT'26 Series 2.0?",
      answer: "HACKNEXT'26 Series 2.0 is an elite 24-hour hackathon organized by the IV CS Stream Cluster at DT Playhouse, SNS AI Campus, SNS College of Technology (SNSCT), Coimbatore. It brings together ambitious student innovators to code, create, conquer, and transform real-world problems into intelligent products under the 1st GenAI Powered Design Thinking Framework."
    },
    {
      id: "faq-2",
      question: "When and where is HACKNEXT'26 taking place?",
      answer: "The hackathon will take place in-person on 08 and 09 October 2026, kicking off from 9:00 AM onwards at SNS AI Campus, SNS College of Technology, Coimbatore - 641035."
    },
    {
      id: "faq-3",
      question: "What is the participation fee and what does it include?",
      answer: "The registration fee is ₹500 per person. It includes 24-hour campus access, high-speed Wi-Fi, 3 meals (lunch, dinner, breakfast), 4 refreshment breaks, mentorship, and participation certificates for all."
    },
    {
      id: "faq-4",
      question: "Who can participate and what is the team size?",
      answer: "The hackathon is open to all college students. Teams can comprise 1 to 4 members. Inter-departmental and inter-college team compositions are fully welcomed!"
    },
    {
      id: "faq-5",
      question: "What are the key perks and rewards?",
      answer: "Participants compete for a prize pool up to ₹20,000, internship opportunities for top teams, participation certificates for all, 3 meals + 4 refreshments, and potential incubator support through SNS 1000 I-Startups."
    },
    {
      id: "faq-6",
      question: "Who can I contact for queries or travel assistance?",
      answer: "You can reach out directly to our student coordinators: Gugan KM (+91 93612 78375), Akshaya R (+91 98949 06986), or Mohan Raj. R (+91 90258 86070)."
    }
  ] as FAQItem[],

  socials: {
    instagram: "https://instagram.com/snsinstitutions",
    linkedin: "https://linkedin.com/school/snsgroups",
    website: "https://snsct.org/"
  }
};
