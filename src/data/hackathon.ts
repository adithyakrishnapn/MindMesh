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
  subtitle: "AI-POWERED 24-HOUR HACKATHON",
  tagline: "INNOVATE TODAY. TRANSFORM TOMORROW.",
  codeTagline: "< CODE · CREATE · CONQUER · TRANSFORM />",
  bottomMotto: "THINK BEYOND. BUILD BEYOND. LEAD BEYOND.",
  date: "17, 18 SEPTEMBER 2026",
  shortDate: "17 - 18 SEP 2026",
  startTime: "9:00 AM ONWARDS",
  duration: "24 Hours",
  durationTag: "ONE DAY. ENDLESS POSSIBILITIES.",
  venue: "SNS AI Campus, SNS College of Technology, Coimbatore",
  campusName: "SNS AI CAMPUS",
  mode: "In-Person 24-Hour Campus Hackathon",
  teamSize: "2 - 4 Members per team",
  
  // Registration details
  externalFee: "₹550",
  feeNote: "External Participants",
  totalPrizePool: "₹20,000",
  registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd9cj6W2z8va-97_m4DlgDVTf2vCUdbK7eGtigIMWh753ofrA/viewform?usp=send_form",
  isRegistrationUrlConfirmed: true,
  qrCodePath: "/assets/hacknext-qr.png",
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
      name: "AKSHAYA S",
      phone: "+919894906986",
      displayPhone: "9894906986",
      role: "Student Coordinator"
    }
  ] as Coordinator[],

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
      title: "EXCITING PRIZES",
      desc: "Grand cash prizes, sponsor bounties, tech kits, and accelerator opportunities for winning teams.",
      longDescription: "Compete for your share of the ₹20,000 cash prize pool, hard-earned trophies, prestigious plaques, and exclusive seed grant access via SNS 1000 I-Startups.",
      icon: "Trophy",
      highlights: [
        "Direct cash awards from ₹20,000 pool",
        "SNS 1000 I-Startups Incubation Access",
        "Official winners trophies & mementos",
        "Special AI Track & Design Thinking awards"
      ]
    },
    {
      title: "WINNER & PARTICIPATION CERTIFICATES",
      desc: "Official certified recognition for all team members endorsed by SNS College of Technology.",
      longDescription: "Every registered hacker who presents a working solution receives an officially verified Certificate of Participation endorsed by SNS College of Technology (Autonomous).",
      icon: "Award",
      highlights: [
        "Globally recognized autonomous college credential",
        "Endorsed by Department of AI & Computer Science",
        "Individual certificate for every team member",
        "Verifiable digital and hard-copy credentials"
      ]
    },
    {
      title: "MENTORING BY INDUSTRY EXPERTS",
      desc: "Live guidance, architectural feedback, and technical mentorship from leading AI and tech professionals.",
      longDescription: "Engage in dedicated 1-on-1 breakout rounds with senior machine learning engineers, AI founders, and cloud architects stationed at the SNS AI Campus throughout the 24 hours.",
      icon: "UserCheck",
      highlights: [
        "Technical architecture & pipeline reviews",
        "Live debugging & deployment assistance",
        "Pitch and demo presentation polishing",
        "Insights into real-world production AI scale"
      ]
    },
    {
      title: "NETWORKING OPPORTUNITIES",
      desc: "Connect with passionate student innovators, tech leads, startup founders, and talent recruiters.",
      longDescription: "Immerse yourself among hundreds of top student developers, AI researchers, designers, and tech leaders gathered under one roof at the SNS AI Campus.",
      icon: "Network",
      highlights: [
        "Connect with high-caliber peer builders",
        "Direct access to hiring partners & startup founders",
        "Collaborate across inter-college squads",
        "Alumni network across top tech firms"
      ]
    },
    {
      title: "BUILD SOLUTIONS THAT CREATE REAL IMPACT",
      desc: "Turn creative concepts into real, working prototypes capable of solving urgent real-world problems.",
      longDescription: "Utilize the proven SNS Design Thinking Framework to validate market problems, test technical viability, and turn 24 hours of intense hacking into long-term venture opportunities.",
      icon: "Sparkles",
      highlights: [
        "SNS Design Thinking Framework playbook",
        "Real-world healthcare, defense & green problems",
        "Pathway to 10 LPA and venture funding",
        "Deployment to live production servers"
      ]
    }
  ] as Expectation[],

  organizer: {
    college: "SNS COLLEGE OF TECHNOLOGY",
    campus: "SNS AI CAMPUS",
    location: "COIMBATORE",
    pincode: "641035",
    collegeUrl: "https://snsct.org/",
    groupUrl: "https://www.snsgroups.com/",
    department: "DEPARTMENT OF ARTIFICIAL INTELLIGENCE & COMPUTER SCIENCE",
    institutionTag: "SNSCT",
    accreditation: "An Autonomous Institution | Coimbatore - 641035",
    groupName: "SNS INSTITUTIONS",
    slogan: "Redesigning Common Minds & Business Towards Excellence",
    startupsMilestone: "Celebrating 1000 I-Startups in 10 years",
    playbookSlogan: "Design Thinking Playbook — A Pathway to 10LPA and beyond",
    frameworkTag: "Build an Entrepreneurial Mindset Through Our Design Thinking Framework"
  } as OrganizerInfo,

  stats: [
    { value: "24", unit: "HOURS", label: "Non-Stop Building", description: "One Day. Endless Possibilities." },
    { value: "18", unit: "SEP", label: "17-18 September 2026", description: "From 9:00 AM Onwards @ SNS AI Campus" },
    { value: "550", unit: "INR", label: "External Fee ₹550", description: "All-inclusive 24H hackathon experience" },
    { value: "1000", unit: "STARTUPS", label: "SNS I-Startups", description: "Celebrated in 10 Years of Innovation" }
  ],

  tracks: [
    {
      id: "gen-ai-agents",
      title: "GENAI & AUTONOMOUS AGENTS",
      category: "INTELLIGENT SYSTEMS",
      description: "Build cutting-edge autonomous AI agents, multi-agent frameworks, fine-tuned LLM workflows, and intelligent reasoning pipelines.",
      longDescription: "Harness state-of-the-art transformer architectures, autonomous reasoning loops, tool-calling agents, and enterprise RAG pipelines to automate complex multi-step human cognitive workflows.",
      iconName: "BrainCircuit",
      accentColor: "#00E5FF",
      cardStyle: "standard",
      tags: ["Agentic AI", "LLMs", "RAG", "Multi-Agent", "LangChain", "Ollama"],
      highlights: [
        "Autonomous multi-agent collaboration frameworks",
        "Low-latency streaming LLM integrations",
        "Zero-shot function calling & dynamic tools",
        "Production-grade prompt eval & safety rails"
      ]
    },
    {
      id: "vision-robotics",
      title: "COMPUTER VISION & EMBEDDED AI",
      category: "NEXT-GEN COMPUTING",
      description: "Craft spatial computing apps, real-time object detection systems, edge AI inference, and autonomous hardware prototypes.",
      longDescription: "Push computer vision to the physical edge. Build real-time perception models for autonomous robotics, spatial computing headsets, edge TPUs, and IoT sensory networks.",
      iconName: "Globe",
      accentColor: "#FFD21F",
      cardStyle: "rotated",
      tags: ["OpenCV", "Edge AI", "IoT", "Spatial", "YOLOv10", "ESP32"],
      highlights: [
        "Real-time 60FPS object detection & segmentation",
        "Edge TPU and microcontroller deployment",
        "Spatial mapping & trajectory tracking",
        "Industrial IoT anomaly detection systems"
      ]
    },
    {
      id: "healthcare-ai",
      title: "AI IN HEALTHCARE & MEDTECH",
      category: "HUMAN IMPACT",
      description: "Innovate clinical diagnostics, predictive health monitors, patient assistive AI, and intelligent bio-medical data synthesizers.",
      longDescription: "Design empathetic, clinically sound, and compliant AI solutions that empower doctors, streamline diagnostics, and make preventive healthcare accessible to millions.",
      iconName: "HeartPulse",
      accentColor: "#00E5FF",
      cardStyle: "wide",
      tags: ["Diagnostics", "MedTech", "Assistive AI", "BioInformatics", "FastAPI"],
      highlights: [
        "Multimodal clinical data synthesis & analysis",
        "Early-stage biomarker & radiology detection",
        "HIPAA/privacy-conscious local inference",
        "Assistive speech & vision interfaces for patients"
      ]
    },
    {
      id: "fintech-defense",
      title: "AI DEFENSE & FINTECH SECURITY",
      category: "FINANCIAL INTELLIGENCE",
      description: "Design automated fraud prevention systems, AI vulnerability scanners, smart audit agents, and predictive market models.",
      longDescription: "Build defensive AI architectures capable of analyzing high-frequency transaction streams, detecting sophisticated fraud rings, auditing smart contracts, and hardening cyber perimeters.",
      iconName: "ShieldCheck",
      accentColor: "#111111",
      cardStyle: "standard",
      tags: ["Fraud Detection", "Cyber Defense", "Smart Contracts", "Risk AI", "Web3"],
      highlights: [
        "Graph neural networks for financial ring fraud",
        "Real-time anomaly scoring in milli-seconds",
        "Automated smart contract vulnerability fuzzing",
        "AI honeypots & proactive threat modeling"
      ]
    },
    {
      id: "smart-sustainability",
      title: "SMART SUSTAINABILITY & CLEANTECH",
      category: "GREEN INNOVATION",
      description: "Develop AI energy dispatchers, carbon intelligence platforms, smart agricultural analytics, and circular waste systems.",
      longDescription: "Harness artificial intelligence to combat climate change, optimize renewable microgrids, automate precision agriculture, and build circular supply chains.",
      iconName: "Leaf",
      accentColor: "#00E5FF",
      cardStyle: "circle",
      tags: ["Climate AI", "Clean Energy", "Smart Agriculture", "Carbon AI", "GeoSpatial"],
      highlights: [
        "Dynamic renewable energy grid balancing",
        "Satellite vision for crop health & yield prediction",
        "Automated industrial waste sorting & reduction",
        "Verifiable corporate carbon accounting"
      ]
    },
    {
      id: "open-innovation",
      title: "OPEN AI INNOVATION",
      category: "UNBOUNDED BREAKTHROUGHS",
      description: "Have a radical disruptive AI concept outside standard verticals? Harness raw creativity to build something historic.",
      longDescription: "Unleash unbounded creativity. Whether it is brain-computer interfaces, generative music engines, quantum computing simulators, or next-gen gaming physics — build the unthinkable.",
      iconName: "Sparkles",
      accentColor: "#FFD21F",
      cardStyle: "wide",
      tags: ["Wildcard", "Neurotech", "DeepTech", "Creative AI", "Zero Limits"],
      highlights: [
        "Zero restrictions on theme, architecture or stack",
        "Judged on pure novelty, technical ambition & execution",
        "SNS Design Thinking Framework mentoring",
        "Incubation fast-track for outlier innovations"
      ]
    }
  ] as Track[],

  timeline: [
    {
      time: "09:00 AM",
      title: "CHECK-IN & KICKOFF",
      phase: "HOUR 00 — 17 SEP",
      description: "Arrival at SNS AI Campus, registration verification, participant kit collection, and electrifying opening ceremony.",
      highlight: "DOORS OPEN",
      icon: "DoorOpen"
    },
    {
      time: "10:30 AM",
      title: "HACKING COMMENCES",
      phase: "HOUR 01 — 17 SEP",
      description: "The 24-hour clock officially begins. Teams claim workstations, assemble architecture, and initialize codebases.",
      highlight: "SPRINT LAUNCH",
      icon: "Code"
    },
    {
      time: "03:00 PM",
      title: "MENTORSHIP CHECKPOINT 1",
      phase: "HOUR 06 — 17 SEP",
      description: "Industry leaders and SNS AI mentors review project architectures, stress-test logic, and offer domain guidance.",
      highlight: "EXPERT REVIEW",
      icon: "UserCheck"
    },
    {
      time: "08:00 PM",
      title: "DINNER & MID-WAY REVIEW",
      phase: "HOUR 11 — 17 SEP",
      description: "Refuel with dinner, rapid pitch tune-up, and mid-way working prototype evaluation by coordinators.",
      highlight: "MIDWAY CHECK",
      icon: "Utensils"
    },
    {
      time: "00:00 AM",
      title: "MIDNIGHT ENERGY SURGE",
      phase: "HOUR 15 — 18 SEP",
      description: "Midnight snacks, coffee boosts, energetic beats, debugging sprint, and core AI model convergence.",
      highlight: "MIDNIGHT SPRINT",
      icon: "Zap"
    },
    {
      time: "07:00 AM",
      title: "FEATURE FREEZE & DEPLOY",
      phase: "HOUR 22 — 18 SEP",
      description: "Feature lock, commit main branch, deploy live preview URLs, and synthesize 3-minute pitch decks.",
      highlight: "STABILIZE & PITCH",
      icon: "GitCommit"
    },
    {
      time: "09:00 AM",
      title: "GRAND DEMOS & CLOSING GALA",
      phase: "HOUR 24 — 18 SEP",
      description: "Teams pitch live solutions to jury. Announcement of winners, distribution of cash awards, and felicitation!",
      highlight: "FINALE & AWARDS",
      icon: "Trophy"
    }
  ] as TimelineItem[],

  prizes: [
    {
      title: "FIRST PLACE",
      amount: "WINNER",
      subtitle: "HACKNEXT'26 Champion",
      longDescription: "The supreme champions of HACKNEXT'26 SERIES 2.0. Awarded to the team that demonstrates unprecedented technical execution, exceptional model performance, and commercial viability under the SNS Design Thinking framework.",
      perks: [
        "Major Share of ₹20,000 Prize Pool",
        "Winner Trophy & Mementos",
        "SNS 1000 I-Startups Incubation Access",
        "Winner Certificates of Excellence"
      ],
      highlights: [
        "Direct cash prize disbursal upon finale ceremony",
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
        "Official Participation Certificates",
        "1-on-1 Mentoring by Industry AI Experts",
        "High-Value Networking Opportunities",
        "24-Hour Campus Experience"
      ],
      highlights: [
        "Autonomous College Certificate with official stamp",
        "Mentorship feedback from industry professionals",
        "Complimentary high-speed campus facilities & Wi-Fi",
        "Access to future SNS hackathons & accelerators"
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
      title: "SCAN QR TO OPEN FORM",
      desc: "Scan the website QR or click the register link to open the official Google Form. The ₹550 fee payment QR is provided directly inside the form."
    },
    {
      step: "02",
      title: "EMBRACE THE CHALLENGE",
      desc: "Explore AI domains, select your vertical, brainstorm via the Design Thinking playbook, and plan your architecture."
    },
    {
      step: "03",
      title: "24 HOURS OF AI BUILDING",
      desc: "Report at SNS AI Campus at 9:00 AM on 17 Sep. Hack non-stop with expert mentorship, Wi-Fi, and 24H facilities."
    },
    {
      step: "04",
      title: "DEMO, WIN & TRANSFORM",
      desc: "Pitch working solutions to the expert jury, showcase live demos, collect certificates, and claim exciting prizes!"
    }
  ],

  faqs: [
    {
      id: "faq-1",
      question: "What is HACKNEXT'26 Series 2.0?",
      answer: "HACKNEXT'26 Series 2.0 is an elite AI-Powered 24-Hour Hackathon hosted at SNS AI Campus, SNS College of Technology (SNSCT), Coimbatore. It brings together ambitious student innovators from across the country to code, create, conquer, and transform real-world problems into intelligent products."
    },
    {
      id: "faq-2",
      question: "When and where is HACKNEXT'26 taking place?",
      answer: "The hackathon will take place in-person on 17 and 18 September 2026, kicking off from 9:00 AM onwards at the SNS AI Campus, SNS College of Technology, Coimbatore - 641035."
    },
    {
      id: "faq-3",
      question: "What is the participation fee and how do I pay?",
      answer: "The participation fee is ₹550 for external participants. When you scan the website QR code or click 'OPEN REGISTRATION FORM', you are directed to the official Google Form. Inside the form, you will find the official Fee Payment QR Code to complete the ₹550 payment and upload your transaction proof."
    },
    {
      id: "faq-4",
      question: "Who can participate and what is the team size?",
      answer: "The hackathon is open to all undergraduate and postgraduate college students. Teams can comprise 2 to 4 members. Inter-departmental and inter-college team compositions are fully welcomed!"
    },
    {
      id: "faq-5",
      question: "What are the key perks and rewards?",
      answer: "Participants enjoy exciting cash prizes, official winner and participation certificates, 1-on-1 mentoring by top industry experts, networking opportunities with tech leaders and founders, and potential incubator support through the SNS 1000 I-Startups ecosystem."
    },
    {
      id: "faq-6",
      question: "Who can I contact for queries or travel assistance?",
      answer: "You can reach out directly to our student coordinators: Gugan KM (+91 9361278375) or Akshaya S (+91 9894906986)."
    }
  ] as FAQItem[],

  socials: {
    instagram: "https://instagram.com/snsinstitutions",
    linkedin: "https://linkedin.com/school/snsgroups",
    website: "https://snsct.org/"
  }
};
