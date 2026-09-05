export interface TermsSection {
  id: string;
  num: string;
  title: string;
  content: string[];
}

export const termsData = {
  title: "TERMS & CONDITIONS",
  subtitle: "HACKNEXT'26 — SERIES 2.0 (AI-POWERED 24-HOUR HACKATHON)",
  organizer: {
    college: "SNS College of Technology, Coimbatore",
    campus: "DT Playhouse, SNS AI Campus",
    dates: "17, 18 September 2026",
    startTime: "9:00 AM Onwards",
    fee: "₹550 per external participant",
  },
  disclaimer:
    "By submitting the registration form or scanning the official QR code, participants confirm that they have read, understood, and agree to the Terms & Conditions of HACKNEXT'26 Series 2.0.",

  sections: [
    {
      id: "accurate-information",
      num: "01",
      title: "Accurate Information",
      content: [
        "Participants must provide accurate and valid information during registration (including full name, college email, phone number, and college identity).",
      ],
    },
    {
      id: "single-team",
      num: "02",
      title: "Single Team Membership",
      content: [
        "Each participant can register as a member of only one team.",
      ],
    },
    {
      id: "team-size",
      num: "03",
      title: "Team Size & Composition",
      content: [
        "Team size must be between 2 and 4 members.",
        "Inter-college and cross-specialization teams are enthusiastically permitted to foster diverse collaboration.",
      ],
    },
    {
      id: "problem-statement",
      num: "04",
      title: "Problem Statement & Duration",
      content: [
        "Problem statements and AI domain tracks are formulated to test real-world innovation under the 24-hour sprint duration.",
        "Teams must develop their solution within the official 24-hour hackathon duration starting at 9:00 AM on 17 September 2026 at DT Playhouse, SNS College of Technology, Coimbatore.",
      ],
    },
    {
      id: "registration-fee",
      num: "05",
      title: "Participation Fee & Inclusions",
      content: [
        "External participants must complete the registration fee payment of ₹550 per participant through the designated official payment gateway or on-campus desk.",
        "The registration fee covers 24-hour hackathon access, high-speed Wi-Fi, mentorship sessions, participation certificates, and lab facilities at DT Playhouse, SNS AI Campus.",
      ],
    },
    {
      id: "organizer-guidelines",
      num: "06",
      title: "Compliance with Guidelines",
      content: [
        "Participants must follow all instructions, security protocols, and timelines provided by the SNS College of Technology organizing committee.",
      ],
    },
    {
      id: "originality-plagiarism",
      num: "07",
      title: "Fair Play & Originality",
      content: [
        "All code, design, and implementation must be created during the 24-hour hackathon. Plagiarism, copying, cheating, or submission of previously completed turnkey projects as the primary solution will result in immediate disqualification.",
        "Open-source libraries, frameworks, APIs, and AI models may be used provided they are properly documented in the project repository.",
      ],
    },
    {
      id: "personal-belongings",
      num: "08",
      title: "Personal Belongings & Responsibility",
      content: [
        "Participants are strictly responsible for their own laptops, hardware kits, chargers, valid college ID cards, and personal belongings.",
        "The host institution and organizers will not be held liable for loss or damage of personal equipment.",
      ],
    },
    {
      id: "code-of-conduct",
      num: "09",
      title: "Code of Conduct",
      content: [
        "Participants must maintain professional, inclusive, and respectful conduct throughout the entire duration of the hackathon.",
      ],
    },
    {
      id: "disqualification",
      num: "10",
      title: "Disqualification Rights",
      content: [
        "The organizers reserve the right to disqualify participants or teams for violation of the rules, non-compliance, or behavioral misconduct.",
      ],
    },
    {
      id: "judging-decision",
      num: "11",
      title: "Finality of Judges' Decision",
      content: [
        "The evaluation panel's decisions regarding rankings, bounties, and awards are final and binding on all participating teams.",
      ],
    },
    {
      id: "media-consent",
      num: "12",
      title: "Media & Promotional Consent",
      content: [
        "By participating, candidates consent to event photography, video recording, and showcase of prototypes for promotional and documentation purposes by SNS Institutions.",
      ],
    },
    {
      id: "event-changes",
      num: "13",
      title: "Event Modifications & Capacity",
      content: [
        "The organizers reserve the right to adjust schedules or venue arrangements if necessitated by operational requirements.",
        "Registration slots are limited to ensure a premium hackathon experience; participation is confirmed on a rolling basis.",
      ],
    },
  ] as TermsSection[],
};
