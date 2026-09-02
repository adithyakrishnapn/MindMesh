export interface Track {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  accentColor: string;
  cardStyle: "standard" | "rotated" | "wide" | "circle";
  tags: string[];
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
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface OrganizerInfo {
  department: string;
  college: string;
  location: string;
  collegeUrl: string;
  departmentTag: string;
  accreditation: string;
}

export const hackathon = {
  name: "MINDMESH",
  subtitle: "24-HOUR HACKATHON",
  tagline: "Different minds connect to create something bigger.",
  date: "8 SEPTEMBER 2026",
  duration: "24 Hours",
  venue: "SNS College of Engineering, Coimbatore, Tamil Nadu",
  mode: "In-Person Campus Hackathon",
  teamSize: "2 - 4 Members per team",
  
  registrationUrl: "https://forms.google.com/your-official-hackathon-registration-form",

  organizer: {
    department: "DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING",
    college: "SNS COLLEGE OF ENGINEERING",
    location: "COIMBATORE",
    collegeUrl: "https://snsce.ac.in/",
    departmentTag: "CSE SNSCE",
    accreditation: "Autonomous Institution | NAAC A+ Grade"
  } as OrganizerInfo,

  stats: [
    { value: "24", unit: "HOURS", label: "Non-Stop Building", description: "From ideation to live prototype" },
    { value: "01", unit: "DAY", label: "High-Energy Sprint", description: "Intense coding, mentorship & networking" },
    { value: "08", unit: "SEP", label: "Event Date 2026", description: "Join hundreds of vibrant minds" },
    { value: "01", unit: "MISSION", label: "Solve Real Problems", description: "Turn wild concepts into real products" }
  ],

  tracks: [
    {
      id: "ai-ml",
      title: "AI & ML",
      category: "INTELLIGENT SYSTEMS",
      description: "Build cutting-edge LLM agents, computer vision pipelines, or predictive engines that transform real-world workflows.",
      iconName: "BrainCircuit",
      accentColor: "#FFD21F",
      cardStyle: "standard",
      tags: ["GenAI", "LLMs", "Vision", "Neural Nets"]
    },
    {
      id: "web-mobile",
      title: "WEB3 & APP DEV",
      category: "NEXT-GEN PLATFORMS",
      description: "Craft hyper-fast Web applications, decentralized systems, mobile experiences, or creative frontend magic.",
      iconName: "Globe",
      accentColor: "#111111",
      cardStyle: "rotated",
      tags: ["Next.js", "React Native", "PWA", "APIs"]
    },
    {
      id: "healthcare",
      title: "HEALTHCARE & MEDTECH",
      category: "HUMAN IMPACT",
      description: "Innovate smart diagnostics, remote patient monitoring systems, accessible assistive tools, and bio-data visualizers.",
      iconName: "HeartPulse",
      accentColor: "#FFD21F",
      cardStyle: "wide",
      tags: ["Telehealth", "IoMT", "Diagnostics", "Assistive"]
    },
    {
      id: "fintech",
      title: "FINTECH & SECURITY",
      category: "FINANCIAL TECH",
      description: "Reimagine digital payments, automated fraud prevention, micro-investments, and robust cybersecurity architectures.",
      iconName: "ShieldCheck",
      accentColor: "#111111",
      cardStyle: "standard",
      tags: ["Payments", "Fraud Detection", "Security", "Crypto"]
    },
    {
      id: "edtech",
      title: "EDTECH & LEARNING",
      category: "FUTURE EDUCATION",
      description: "Pioneer adaptive learning algorithms, interactive gamified education tools, and collaborative student platforms.",
      iconName: "GraduationCap",
      accentColor: "#FFD21F",
      cardStyle: "circle",
      tags: ["Gamification", "AR/VR", "AI Tutors", "LMS"]
    },
    {
      id: "sustainability",
      title: "SUSTAINABILITY & CLEANTECH",
      category: "GREEN INNOVATION",
      description: "Develop smart energy monitors, waste management tracking algorithms, and carbon footprint calculators.",
      iconName: "Leaf",
      accentColor: "#111111",
      cardStyle: "standard",
      tags: ["Clean Energy", "Carbon", "Smart City", "Recycling"]
    },
    {
      id: "open-innovation",
      title: "OPEN INNOVATION",
      category: "UNBOUNDED IDEAS",
      description: "Have a groundbreaking idea outside standard tracks? Unleash raw creativity without limits.",
      iconName: "Sparkles",
      accentColor: "#FFD21F",
      cardStyle: "wide",
      tags: ["Wildcard", "Hardware", "AR", "Robotics"]
    }
  ] as Track[],

  timeline: [
    {
      time: "08:00 AM",
      title: "CHECK-IN & KICKOFF",
      phase: "00:00 - HOUR 0",
      description: "Arrival at SNSCE Campus, registration verification, swag bag collection, and energizing opening ceremony.",
      highlight: "DOORS OPEN",
      icon: "DoorOpen"
    },
    {
      time: "10:00 AM",
      title: "HACKING COMMENCES",
      phase: "02:00 - HOUR 2",
      description: "Clocks start ticking. Teams finalize architecture, clone boilerplate repositories, and fire up development environments.",
      highlight: "HACK BEGINS",
      icon: "Code"
    },
    {
      time: "02:00 PM",
      title: "MENTORSHIP CHECKPOINT 1",
      phase: "06:00 - HOUR 6",
      description: "Industry leaders & SNSCE faculty mentors review project direction, challenge assumptions, and provide technical guidance.",
      highlight: "FEEDBACK & PIVOT",
      icon: "UserCheck"
    },
    {
      time: "07:00 PM",
      title: "MID-WAY REVIEW & DINNER",
      phase: "11:00 - HOUR 11",
      description: "Fuel up with gourmet dinner, fun mini-games, and a mid-way working prototype evaluation.",
      highlight: "MIDWAY BLAST",
      icon: "Utensils"
    },
    {
      time: "00:00 AM",
      title: "MIDNIGHT ENERGY SPRINT",
      phase: "16:00 - HOUR 16",
      description: "Midnight coffee, energetic music, red bull, emergency bug squashing, and intense deep-work hours.",
      highlight: "MIDNIGHT SPRINT",
      icon: "Zap"
    },
    {
      time: "06:00 AM",
      title: "FEATURE FREEZE",
      phase: "22:00 - HOUR 22",
      description: "Stop writing new code. Commit main branch, record video demos, write pitch deck slides, and deploy live links.",
      highlight: "STABILIZE & DEPLOY",
      icon: "GitCommit"
    },
    {
      time: "08:00 AM",
      title: "GRAND DEMOS & JUDGING",
      phase: "24:00 - HOUR 24",
      description: "Teams present working solutions to jury of tech leads and investors. Winners announced at the closing award gala!",
      highlight: "FINALE & PRIZES",
      icon: "Trophy"
    }
  ] as TimelineItem[],

  prizes: [
    {
      title: "FIRST PLACE",
      amount: "₹50,000",
      subtitle: "Grand Champion Mesh",
      perks: [
        "Cash Prize + Trophy",
        "Direct Incubator Interview",
        "Cloud Credits & Swag Kits",
        "Winner Certificate of Excellence"
      ],
      badge: "OVERALL WINNER",
      featured: true
    },
    {
      title: "RUNNER UP",
      amount: "₹30,000",
      subtitle: "Second Overall Mesh",
      perks: [
        "Cash Prize + Runner-up Trophy",
        "Mentorship Session with Tech Founders",
        "Swag Bags & Cloud Credits",
        "Certificate of Achievement"
      ],
      badge: "2ND PLACE",
      featured: false
    },
    {
      title: "BEST ALL-WOMEN TEAM",
      amount: "₹15,000",
      subtitle: "Women in Tech Special Award",
      perks: [
        "Special Cash Award",
        "Exclusive Mentorship Network",
        "Tech Community Badges & Gifts"
      ],
      badge: "SPECIAL AWARD",
      featured: false
    },
    {
      title: "MOST INNOVATIVE PRODUCT",
      amount: "₹10,000",
      subtitle: "Out-of-the-Box Creativity",
      perks: [
        "Special Cash Prize",
        "Swag Hampers & Sponsor Benefits"
      ],
      badge: "CREATIVITY",
      featured: false
    }
  ] as Prize[],

  teamRoles: [
    { id: "dev", title: "DEVELOPER", desc: "Builds bulletproof backend APIs, frontend interfaces, and system architecture.", color: "#FFD21F" },
    { id: "des", title: "DESIGNER", desc: "Crafts intuitive UI/UX, micro-animations, typography, and visual polish.", color: "#111111" },
    { id: "ide", title: "IDEATOR", desc: "Identifies core user pain points, defines product vision, and refines pitch strategy.", color: "#FFD21F" },
    { id: "bld", title: "BUILDER", desc: "Integrates APIs, hardware modules, database schemas, and AI models under pressure.", color: "#111111" },
    { id: "res", title: "RESEARCHER", desc: "Validates problem statement, market feasibility, user persona data, and analytics.", color: "#FFD21F" }
  ],

  howItWorks: [
    {
      step: "01",
      title: "REGISTER YOUR MESH",
      desc: "Assemble your squad of 2 to 4 student minds. Fill out the official Google Form before registration closes."
    },
    {
      step: "02",
      title: "FORM YOUR STRATEGY",
      desc: "Review challenge tracks, choose your tech stack, and brainstorm high-impact problem statements."
    },
    {
      step: "03",
      title: "BUILD FOR 24 HOURS",
      desc: "Arrive at SNSCE campus, connect with expert mentors, leverage APIs, and code your solution live."
    },
    {
      step: "04",
      title: "PRESENT & WIN",
      desc: "Demo your working prototype to domain experts, showcase your mesh, and claim cash rewards!"
    }
  ],

  faqs: [
    {
      id: "faq-1",
      question: "What is MindMesh?",
      answer: "MindMesh is a premium 24-hour state-level hackathon organized by the Department of Computer Science and Engineering at SNS College of Engineering (SNSCE), Coimbatore. It brings together brilliant student minds to build innovative software & hardware solutions."
    },
    {
      id: "faq-2",
      question: "Who can participate?",
      answer: "MindMesh is open to all currently enrolled undergraduate and postgraduate students from any recognized engineering college, university, or institute. Students from any stream (CSE, IT, ECE, EEE, Mech, AI&DS, etc.) are welcome!"
    },
    {
      id: "faq-3",
      question: "What is the team size requirement?",
      answer: "Teams must consist of 2 to 4 members. You can form cross-disciplinary teams across different academic years and departments."
    },
    {
      id: "faq-4",
      question: "Is the hackathon online or offline?",
      answer: "MindMesh is a 100% in-person, on-campus hackathon held at SNS College of Engineering, Coimbatore. Accommodation, high-speed Wi-Fi, food, snacks, and lab facilities will be provided throughout the 24 hours."
    },
    {
      id: "faq-5",
      question: "What should participants bring?",
      answer: "Participants should bring their laptops, chargers, extension cords, valid college ID cards, personal toiletries, enthusiasm, and any specialized hardware components needed for their hack."
    },
    {
      id: "faq-6",
      question: "Are pre-built projects allowed?",
      answer: "No. All code, design, and implementation must be created during the 24-hour hackathon duration. You may use open-source libraries, APIs, frameworks, and public datasets."
    },
    {
      id: "faq-7",
      question: "What are the judging criteria?",
      answer: "Projects are evaluated on 4 key metrics: Innovation & Originality (25%), Technical Complexity & Execution (30%), Practical Impact & Market Viability (25%), and Presentation & Demo Clarity (20%)."
    },
    {
      id: "faq-8",
      question: "Is there any registration fee?",
      answer: "Official fee details and registration guidelines are specified on the official Google Form. Check the registration link for updated details."
    },
    {
      id: "faq-9",
      question: "When does registration close?",
      answer: "Registrations will close prior to event day. Slots are limited to ensure a high-quality experience, so register your team as early as possible!"
    }
  ] as FAQItem[],

  socials: {
    instagram: "https://instagram.com/snsinstitutions",
    linkedin: "https://linkedin.com/school/snsce",
    website: "https://snsce.ac.in/"
  }
};
