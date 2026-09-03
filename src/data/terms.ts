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
    "By submitting the registration form, participants confirm that they have read, understood, and agree to the Terms & Conditions.",

  sections: [
    {
      id: "accurate-information",
      num: "01",
      title: "Accurate Information",
      content: [
        "Participants must provide accurate and valid information during registration.",
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
        "Team size must be between 1 and 4 members.",
        "Inter-college and inter-specialization teams are allowed.",
      ],
    },
    {
      id: "problem-statement",
      num: "04",
      title: "Problem Statement & Duration",
      content: [
        "The problem statement will be provided on the spot.",
        "Teams must develop their solution within the 24-hour hackathon duration.",
      ],
    },
    {
      id: "organizer-guidelines",
      num: "05",
      title: "Compliance with Guidelines",
      content: [
        "Participants must follow all instructions and guidelines provided by the organizers.",
      ],
    },
    {
      id: "originality-plagiarism",
      num: "06",
      title: "Fair Play & Originality",
      content: [
        "Plagiarism, copying, cheating, or submission of previously completed projects as the primary solution may result in disqualification.",
      ],
    },
    {
      id: "personal-belongings",
      num: "07",
      title: "Personal Belongings & Responsibility",
      content: [
        "Participants are responsible for their own laptops, devices, documents, and personal belongings.",
        "The organizers will not be responsible for loss or damage.",
      ],
    },
    {
      id: "code-of-conduct",
      num: "08",
      title: "Code of Conduct",
      content: [
        "Participants must maintain appropriate and respectful conduct throughout the event.",
      ],
    },
    {
      id: "disqualification",
      num: "09",
      title: "Disqualification Rights",
      content: [
        "The organizers reserve the right to disqualify participants/teams for violation of the rules or misconduct.",
      ],
    },
    {
      id: "judging-decision",
      num: "10",
      title: "Finality of Judges' Decision",
      content: [
        "The judges' decision will be final and binding.",
      ],
    },
    {
      id: "media-consent",
      num: "11",
      title: "Media & Promotional Consent",
      content: [
        "By registering, participants consent to the use of event-related photographs, videos, and project details for promotional and documentation purposes.",
      ],
    },
    {
      id: "event-changes",
      num: "12",
      title: "Event Modifications",
      content: [
        "The organizers reserve the right to make necessary changes to the event schedule, rules, or arrangements and will communicate significant changes to participants.",
      ],
    },
    {
      id: "capacity-eligibility",
      num: "13",
      title: "Capacity & Eligibility",
      content: [
        "Registration does not guarantee participation if the event reaches its capacity or if eligibility requirements are not met.",
      ],
    },
  ] as TermsSection[],
};
