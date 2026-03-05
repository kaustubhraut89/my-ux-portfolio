export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  hero: string;
  year: string;
  role: string;
  duration: string;
  team: string;
  overview: string;
  challenge: string;
  process: {
    title: string;
    description: string;
    image: string;
  }[];
  outcomes: {
    metric: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: ProjectData[] = [
  {
    slug: "spotify-playlist-discovery",
    title: "Spotify Playlist Discovery",
    category: "Mobile App Design",
    description:
      "Reimagining how users discover and curate playlists through AI-powered recommendations and social features.",
    image:
      "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=800&h=600&fit=crop",
    hero: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=1600&h=900&fit=crop",
    year: "2025",
    role: "Lead UX Designer",
    duration: "4 months",
    team: "3 Designers, 5 Engineers, 1 PM",
    overview:
      "Spotify's playlist discovery was fragmented across multiple touchpoints, making it difficult for users to find music that truly resonated with their taste. I led the redesign of the playlist discovery experience, introducing AI-powered recommendations and social listening features that transformed how 50M+ users find new music.",
    challenge:
      "Users were spending an average of 12 minutes searching for new playlists, with a 40% abandonment rate. The existing recommendation engine surfaced generic results that didn't account for context—time of day, activity, or social listening habits. We needed to create a discovery experience that felt personal, effortless, and socially connected.",
    process: [
      {
        title: "Research & Discovery",
        description:
          "Conducted 40+ user interviews across 6 markets, analyzed listening patterns of 100K users, and ran diary studies to understand contextual music discovery behaviors. Key insight: 73% of users discover their favorite playlists through friends, not algorithms.",
        image:
          "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop",
      },
      {
        title: "Ideation & Prototyping",
        description:
          "Ran 3 design sprints exploring social-first discovery, context-aware recommendations, and collaborative playlist creation. Created 15 low-fi concepts, refined to 4 high-fidelity prototypes tested with 200 participants.",
        image:
          "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop",
      },
      {
        title: "Visual Design & System",
        description:
          "Developed a new visual language for the discovery experience that balanced playfulness with clarity. Created reusable components integrated into Spotify's design system, ensuring consistency across platforms.",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
      },
      {
        title: "Testing & Iteration",
        description:
          "Ran A/B tests with 5% of users over 6 weeks. Iterated on the recommendation algorithm feedback loop based on qualitative and quantitative data. Refined the social features based on privacy concerns surfaced during testing.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      },
    ],
    outcomes: [
      { metric: "Discovery time reduced", value: "67%" },
      { metric: "Playlist saves increased", value: "3.2×" },
      { metric: "User satisfaction (CSAT)", value: "92%" },
      { metric: "Monthly active users impacted", value: "50M+" },
    ],
    testimonial: {
      quote:
        "Sarah's ability to translate complex user behaviors into elegant design solutions is remarkable. The playlist discovery redesign exceeded every metric we set.",
      author: "Marcus Rivera",
      role: "VP of Product, Spotify",
    },
  },
  {
    slug: "fintech-dashboard-redesign",
    title: "Fintech Dashboard Redesign",
    category: "Web Application",
    description:
      "A comprehensive redesign of a financial analytics platform, improving data visualization and user workflow.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
    year: "2024",
    role: "Senior UX Designer",
    duration: "6 months",
    team: "2 Designers, 8 Engineers, 2 PMs",
    overview:
      "A B2B fintech platform serving 10,000+ financial advisors needed a complete dashboard overhaul. The existing interface was data-dense but lacked actionable insights. I redesigned the entire analytics experience, creating a modular dashboard that adapts to each advisor's workflow.",
    challenge:
      "Financial advisors were using 4-5 different tools alongside the platform because the dashboard couldn't surface the right data at the right time. Task completion times averaged 23 minutes for common workflows. We needed to consolidate tools while maintaining the depth of data that professionals require.",
    process: [
      {
        title: "Stakeholder Alignment",
        description:
          "Facilitated workshops with 15 stakeholders across product, engineering, and compliance. Mapped the entire advisor journey across a typical workday to identify critical moments and pain points.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      },
      {
        title: "Information Architecture",
        description:
          "Conducted card sorting with 30 advisors to restructure the data hierarchy. Created a modular widget system that allows advisors to customize their dashboard based on their specialization and client base.",
        image:
          "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
      },
      {
        title: "Data Visualization Design",
        description:
          "Partnered with data scientists to design visualization components that make complex financial data accessible. Developed an alert system that proactively surfaces actionable insights.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      },
      {
        title: "Iterative Refinement",
        description:
          "Ran 4 rounds of usability testing with practicing advisors. Each round focused on specific workflow scenarios, from portfolio review to client reporting. Achieved a 95% task success rate by the final round.",
        image:
          "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&h=500&fit=crop",
      },
    ],
    outcomes: [
      { metric: "Task completion time", value: "-58%" },
      { metric: "Tools consolidated", value: "4→1" },
      { metric: "User retention", value: "+34%" },
      { metric: "NPS score improvement", value: "+41pts" },
    ],
    testimonial: {
      quote:
        "The redesigned dashboard has become our biggest competitive advantage. Advisors tell us it's the reason they switched from legacy platforms.",
      author: "Elena Park",
      role: "CPO, FinanceFlow",
    },
  },
  {
    slug: "healthcare-booking-system",
    title: "Healthcare Booking System",
    category: "End-to-End UX",
    description:
      "Streamlining the patient experience with an intuitive appointment scheduling and telehealth platform.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    hero: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&h=900&fit=crop",
    year: "2024",
    role: "UX Lead",
    duration: "5 months",
    team: "2 Designers, 6 Engineers, 1 PM, 1 Clinical Advisor",
    overview:
      "A regional healthcare network with 200+ providers needed a unified booking and telehealth platform. I led the UX from research through launch, designing a system that reduced no-show rates by 35% and made healthcare access more equitable for underserved communities.",
    challenge:
      "Patients faced a fragmented booking experience—phone calls, multiple portals, and no visibility into availability. No-show rates were at 28%, costing the network $2M annually. The platform also needed to serve patients with varying levels of digital literacy and language needs.",
    process: [
      {
        title: "Community Research",
        description:
          "Partnered with community health workers to conduct contextual interviews with 60 patients across diverse demographics. Mapped accessibility barriers including language, digital literacy, and device constraints.",
        image:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop",
      },
      {
        title: "Inclusive Design",
        description:
          "Designed the booking flow to work seamlessly across devices with WCAG AAA compliance. Implemented smart defaults based on patient history, reducing booking steps from 8 to 3. Added multilingual support for 5 languages.",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
      },
      {
        title: "Telehealth Integration",
        description:
          "Designed a frictionless telehealth experience that required zero downloads or account creation. Created a waiting room experience that reduced perceived wait times through educational content and pre-visit preparation.",
        image:
          "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=500&fit=crop",
      },
      {
        title: "Pilot & Scale",
        description:
          "Launched with 3 pilot clinics, gathering feedback from 500+ patients over 8 weeks. Iterated on reminder systems and rebooking flows before scaling to all 200+ providers across the network.",
        image:
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
      },
    ],
    outcomes: [
      { metric: "No-show rate reduced", value: "35%" },
      { metric: "Booking completion rate", value: "94%" },
      { metric: "Patient satisfaction", value: "4.8/5" },
      { metric: "Annual cost savings", value: "$700K" },
    ],
    testimonial: {
      quote:
        "Sarah didn't just design a booking system—she designed a more equitable way for our community to access healthcare. The impact has been profound.",
      author: "Dr. Amara Osei",
      role: "Chief Medical Officer, CareFirst Network",
    },
  },
  {
    slug: "ecommerce-mobile-experience",
    title: "E-commerce Mobile Experience",
    category: "UX Research & Design",
    description:
      "Creating a seamless shopping journey with personalized recommendations and frictionless checkout.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop",
    year: "2023",
    role: "Senior UX Designer",
    duration: "3 months",
    team: "2 Designers, 4 Engineers, 1 PM",
    overview:
      "A DTC fashion brand with $50M in annual revenue was losing 68% of mobile users at checkout. I redesigned the entire mobile shopping experience, from product discovery to post-purchase, resulting in a 45% increase in mobile conversion rates.",
    challenge:
      "Mobile accounted for 70% of traffic but only 30% of revenue. The existing mobile experience was a responsive afterthought—slow, cluttered, and with a checkout flow that required 14 taps to complete. We needed a mobile-first experience that matched the brand's premium positioning.",
    process: [
      {
        title: "Analytics Deep Dive",
        description:
          "Analyzed 6 months of session recordings, heatmaps, and funnel data. Identified 7 critical drop-off points in the mobile journey. Conducted competitive analysis of 12 leading DTC brands to benchmark best practices.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      },
      {
        title: "Mobile-First Redesign",
        description:
          "Designed a gesture-driven browsing experience with swipeable product galleries and contextual filters. Reduced checkout to 4 taps with saved preferences, Apple Pay integration, and smart address completion.",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      },
      {
        title: "Personalization Engine",
        description:
          "Collaborated with ML engineers to design the recommendation UI—recently viewed, style matches, and 'complete the look' modules. Designed onboarding that captured style preferences without friction.",
        image:
          "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=500&fit=crop",
      },
      {
        title: "Performance Optimization",
        description:
          "Worked with engineering to optimize image loading, implement skeleton screens, and reduce time-to-interactive. The redesigned experience loads in under 2 seconds on 3G connections.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      },
    ],
    outcomes: [
      { metric: "Mobile conversion rate", value: "+45%" },
      { metric: "Checkout completion", value: "+62%" },
      { metric: "Average order value", value: "+18%" },
      { metric: "Page load time", value: "<2s" },
    ],
    testimonial: {
      quote:
        "Our mobile experience went from our biggest weakness to our strongest channel. Sarah's research-driven approach gave us confidence in every design decision.",
      author: "Jordan Lee",
      role: "Head of Digital, MAISON",
    },
  },
];
