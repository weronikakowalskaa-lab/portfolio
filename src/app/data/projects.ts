export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  caseStudy: {
    heroImage: string;
    overview: string;
    role: string;
    duration: string;
    tools: string[];
    challenge: string;
    process: {
      title: string;
      description: string;
      image: string;
    }[];
    outcome: string;
    results: { label: string; value: string }[];
  };
}

export const projects: ProjectData[] = [
  {
    id: 1,
    slug: "petcare-app",
    title: "PetCare App",
    description:
      "UX research and mobile app design for managing pet health and veterinary communication.",
    tags: ["UX Research", "UX Design", "UI Design"],
    image:
      "https://images.unsplash.com/photo-1625279138836-e7311d5c863a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwcGV0JTIwaGVhbHRoJTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjY2MDU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-[#F9A8D4]/10 to-[#C084FC]/10",
    caseStudy: {
      heroImage:
        "https://images.unsplash.com/photo-1625279138836-e7311d5c863a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwcGV0JTIwaGVhbHRoJTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjY2MDU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      overview:
        "PetCare is a mobile application designed to help pet owners manage their pets' health records, schedule veterinary appointments, and communicate directly with their vet clinic. The goal was to create an intuitive, stress-free experience for pet parents who often struggle with keeping track of vaccinations, medications, and check-ups.",
      role: "Lead UX/UI Designer",
      duration: "8 weeks",
      tools: ["Figma", "Miro", "Maze", "Google Forms"],
      challenge:
        "Pet owners often juggle multiple systems to manage their pets' health - paper records, phone calls to the vet, and scattered reminders. Research showed that 73% of pet owners have missed or delayed a vaccination or check-up due to disorganization. The challenge was to unify these fragmented experiences into one seamless mobile app that feels as natural as messaging a friend.",
      process: [
        {
          title: "Discovery & Research",
          description:
            "Conducted 12 in-depth user interviews with pet owners and 4 interviews with veterinary staff. Created user personas and journey maps to identify key pain points: forgotten appointments, unclear medication schedules, and difficulty reaching the vet for quick questions.",
          image:
            "https://images.unsplash.com/photo-1596865249308-2472dc5807d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXclMjB3aGl0ZWJvYXJkJTIwbm90ZXN8ZW58MXx8fHwxNzczMzQwNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Wireframing & Prototyping",
          description:
            "Developed low-fidelity wireframes for 24 screens, then iterated into high-fidelity prototypes. Key features included a health timeline, smart appointment reminders, and an in-app messaging system with the vet clinic.",
          image:
            "https://images.unsplash.com/photo-1627757818592-ce2649563a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWUlMjBVWCUyMGRlc2lnbiUyMHByb2Nlc3N8ZW58MXx8fHwxNzczMzQwNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Usability Testing & Iteration",
          description:
            "Ran 2 rounds of moderated usability tests with 8 participants. Key findings led to simplifying the onboarding flow (reduced from 6 to 3 steps) and redesigning the appointment booking to show available time slots in a calendar view instead of a list.",
          image:
            "https://images.unsplash.com/photo-1742796674961-a5e833a6f0c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwcm90b3R5cGUlMjB1c2FiaWxpdHklMjB0ZXN0aW5nJTIwaGFuZHN8ZW58MXx8fHwxNzczMzQwNjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
      outcome:
        "The final design received overwhelmingly positive feedback during validation testing. Users praised the clean interface, intuitive navigation, and the peace of mind that comes with having all pet health information in one place.",
      results: [
        { label: "Task Success Rate", value: "94%" },
        { label: "SUS Score", value: "87/100" },
        { label: "Onboarding Completion", value: "91%" },
        { label: "User Satisfaction", value: "4.8/5" },
      ],
    },
  },
  {
    id: 2,
    slug: "little-lemon",
    title: "Little Lemon",
    description:
      "Restaurant booking UX case study focused on improving the reservation flow and usability.",
    tags: ["UX Research", "UX Design", "UI Design"],
    image:
      "https://images.unsplash.com/photo-1768982463473-9d94547f8814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZWxlZ2FudCUyMGRpbmluZyUyMHRhYmxlJTIwcmVzZXJ2YXRpb258ZW58MXx8fHwxNzcyNjYwNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-[#93C5FD]/10 to-[#C084FC]/10",
    caseStudy: {
      heroImage:
        "https://images.unsplash.com/photo-1765894711185-63800b16dbba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBjb3p5JTIwbW9kZXJuJTIwYW1iaWFuY2V8ZW58MXx8fHwxNzczMzQwNjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      overview:
        "Little Lemon is a family-owned Mediterranean restaurant that needed a modern digital presence. This case study focuses on redesigning their reservation system to reduce no-shows, streamline the booking process, and enhance the overall dining experience from the moment a customer decides to visit.",
      role: "UX/UI Designer",
      duration: "6 weeks",
      tools: ["Figma", "FigJam", "Optimal Workshop", "Hotjar"],
      challenge:
        "The restaurant's existing booking system was phone-based, leading to long wait times, double bookings, and a 25% no-show rate. Customers frequently abandoned the process due to frustration. The challenge was to design a digital reservation flow that felt personal and warm (matching the restaurant's brand) while being efficient and reducing operational overhead.",
      process: [
        {
          title: "Competitive Analysis & Research",
          description:
            "Analyzed 8 competitor restaurant booking systems and conducted surveys with 45 potential customers. Key insight: users want to see real-time availability, estimated wait times, and the ability to customize their dining experience (seating preference, special occasions) during booking.",
          image:
            "https://images.unsplash.com/photo-1596865249308-2472dc5807d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXclMjB3aGl0ZWJvYXJkJTIwbm90ZXN8ZW58MXx8fHwxNzczMzQwNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Information Architecture & Wireframes",
          description:
            "Created a streamlined 3-step booking flow: Select Date & Party Size, Choose Time Slot & Preferences, Confirm & Get Reminder. Card sorting with 15 users validated the information hierarchy and navigation structure.",
          image:
            "https://images.unsplash.com/photo-1627757818592-ce2649563a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWUlMjBVWCUyMGRlc2lnbiUyMHByb2Nlc3N8ZW58MXx8fHwxNzczMzQwNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Visual Design & Testing",
          description:
            "Developed a warm, inviting UI that reflects the Mediterranean brand identity. Conducted A/B testing on two confirmation screen variants and usability tests with 10 participants, achieving a 95% task completion rate on the final design.",
          image:
            "https://images.unsplash.com/photo-1742796674961-a5e833a6f0c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwcm90b3R5cGUlMjB1c2FiaWxpdHklMjB0ZXN0aW5nJTIwaGFuZHN8ZW58MXx8fHwxNzczMzQwNjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
      outcome:
        "The redesigned booking system dramatically improved the restaurant's operations. The intuitive flow reduced booking time by 60% and the automated reminder system cut no-shows in half. The restaurant reported a 40% increase in online reservations within the first month.",
      results: [
        { label: "Booking Time Reduced", value: "60%" },
        { label: "No-show Rate Drop", value: "50%" },
        { label: "Online Bookings Up", value: "+40%" },
        { label: "User Satisfaction", value: "4.7/5" },
      ],
    },
  },
];
