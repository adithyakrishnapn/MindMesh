export interface TermsSection {
  id: string;
  num: string;
  title: string;
  content: string[];
}

export const termsData = {
  title: "TERMS & CONDITIONS",
  subtitle: "MindMesh — 24-Hour Hackathon",
  organizer: {
    department: "Department of Computer Science and Engineering",
    college: "SNS College of Engineering, Coimbatore",
  },
  disclaimer:
    "These Terms & Conditions are currently a draft for the MindMesh hackathon and are subject to final approval by the organizing team.",

  sections: [
    {
      id: "eligibility",
      num: "01",
      title: "Eligibility",
      content: [
        "Participants must meet the eligibility requirements specified by the organizers.",
        "Only eligible students and participants as defined by the official event guidelines may participate.",
        "All registered participants must possess a valid institutional or college ID card at the time of check-in.",
      ],
    },
    {
      id: "registration",
      num: "02",
      title: "Registration",
      content: [
        "Participants must provide accurate and verifiable information during the registration process.",
        "Registration must be completed through the official registration form link provided by the organizers.",
        "The organizing team reserves the right to verify registration details and identity documents.",
        "Registration does not automatically guarantee participation if the event reaches maximum capacity before confirmation.",
      ],
    },
    {
      id: "team-formation",
      num: "03",
      title: "Team Formation",
      content: [
        "Participants must follow the official team-size requirements (typically 2 to 4 members) announced by the organizers.",
        "All team members must be registered according to the official registration process.",
        "Any changes to team composition after registration approval require explicit written confirmation from the organizing committee.",
      ],
    },
    {
      id: "participation",
      num: "04",
      title: "Hackathon Participation",
      content: [
        "Participants are expected to actively participate throughout the full 24-hour hackathon sprint.",
        "Projects must be built during the permitted hackathon period unless the organizers explicitly state otherwise for pre-approved starter templates.",
        "Participants must strictly follow all event rules, lab safety procedures, and instructions provided by the organizing team and faculty coordinators.",
      ],
    },
    {
      id: "submission",
      num: "05",
      title: "Project Submission",
      content: [
        "Projects must be submitted before the official deadline communicated during the opening ceremony.",
        "Late submissions will not be considered for judging or prize evaluation under any circumstances.",
        "Participants may be required to provide project description, source code repository link, live demo video, pitch deck presentation, and technical documentation.",
      ],
    },
    {
      id: "intellectual-property",
      num: "06",
      title: "Originality & Intellectual Property",
      content: [
        "Participants must submit original work that they have created or have the legal right to use.",
        "Participants must properly acknowledge third-party libraries, APIs, datasets, assets, or open-source resources where applicable.",
        "Participants retain ownership of their original work unless otherwise specified by official event or sponsor agreement rules.",
      ],
    },
    {
      id: "code-of-conduct",
      num: "07",
      title: "Code of Conduct",
      content: [
        "All participants are expected to maintain respectful, inclusive, and professional behavior throughout the campus hackathon.",
        "Harassment, discrimination, inappropriate behavior, cheating, plagiarism, or any activity that negatively affects other participants will not be tolerated.",
        "The organizing committee reserves the right to take appropriate disciplinary action against any code of conduct violations.",
      ],
    },
    {
      id: "judging",
      num: "08",
      title: "Judging",
      content: [
        "Projects will be evaluated according to criteria announced by the organizing team (e.g., Innovation, Technical Implementation, Creativity, Impact, User Experience, Presentation).",
        "NOTE: These criteria represent current guidelines and are subject to final approval by the official jury panel.",
        "Evaluations and decisions made by the jury panel during the final presentation rounds are final.",
      ],
    },
    {
      id: "disqualification",
      num: "09",
      title: "Disqualification",
      content: [
        "The organizers reserve the right to disqualify participants or teams for rule violations, plagiarism, misrepresentation, unethical behavior, cheating, or late submission.",
        "Any activity that compromises the fairness, safety, or academic integrity of the hackathon will result in immediate team disqualification.",
      ],
    },
    {
      id: "prizes",
      num: "10",
      title: "Prizes",
      content: [
        "Prize details, track categories, and award amounts will be officially announced by the organizers.",
        "Prize distribution decisions made by the official jury and organizing committee are final and subject to event compliance.",
        "Official cash reward amounts and perks will be verified upon project validation.",
      ],
    },
    {
      id: "event-changes",
      num: "11",
      title: "Event Changes",
      content: [
        "The organizers reserve the right to modify the event schedule, venue arrangement, safety guidelines, challenge tracks, or judging criteria as necessary.",
        "Participants will be informed of significant changes through official email and campus communication channels.",
      ],
    },
    {
      id: "photography-media",
      num: "12",
      title: "Photography & Media",
      content: [
        "The event may be photographed, filmed, or live-streamed for academic, promotional, and media documentation purposes by SNSCE.",
        "Participants agree to abide by the official event media guidelines upon entering the campus premises.",
      ],
    },
    {
      id: "liability",
      num: "13",
      title: "Liability",
      content: [
        "Participants are responsible for their own belongings, laptops, extension cords, hardware kits, and personal conduct during the event.",
        "The organizers and institution are not responsible for loss or damage to personal equipment except where required by applicable law.",
      ],
    },
    {
      id: "acceptance",
      num: "14",
      title: "Acceptance",
      content: [
        "By registering for and participating in MindMesh, participants acknowledge that they have read, understood, and agreed to all event rules, guidelines, and terms.",
      ],
    },
  ] as TermsSection[],
};
