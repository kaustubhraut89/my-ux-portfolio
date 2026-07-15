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
  problemStatement?: string;
  personas?: {
    title: string;
    description: string;
    needs: string[];
  }[];
  process: {
    title: string;
    description: string;
    image?: string;
    deliverable?: string;
  }[];
  outcomes: {
    metric: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  } | null;
  figmaLink?: string;
  targetUsers?: {
    type: string;
    description: string;
  }[];
  keyDesignDecisions?: {
    decision: string;
    rationale: string;
  }[];
  competitiveAnalysis?: {
    name: string;
    rating: string;
    strengths: string;
    weaknesses: string;
  }[];
  researchInsights?: string[];
  screens?: {
    section: string;
    description: string;
    images: string[];
  }[];
  colorPalette?: {
    name: string;
    hex: string;
  }[];
  behanceUrl?: string;
  appStoreUrl?: string;
}
import MetroThumbnail from "../assets/Metero_thumbnail.png"
import SkillpilotsThumbnail from "../assets/Skillpilots_thumbnail.png"
import SapphireThumbnail from "../assets/Sapphire_mobile_cover.png"
import EventGoThumbnail from "../assets/Cover_for_EG.png"
import Watchlist1 from "../assets/watchlist1.png"
import Watchlist2 from "../assets/Watchlist2.png"
import Trade1 from "../assets/Trades1.png"
import Trade2 from "../assets/Trades2.png"
import Trade3 from "../assets/Trades3.png"
import Order1 from "../assets/Order1.png"
import Order2 from "../assets/Order2.png"
import Order3 from "../assets/Order3.png"
import Holding1 from "../assets/Holding1.png"
import Holding2 from "../assets/Holding2.png"
import Holding3 from "../assets/Holding3.png"
import Acc1 from '../assets/Acc1.png'
import Acc2 from '../assets/Acc2.png'
import Acc3 from '../assets/Acc3.png'
import Signup1 from "../assets/EG_signup1.png"
import Signup2 from "../assets/EG_signup2.png"
import Signup3 from "../assets/EG_signup3.png"
import Dash1 from "../assets/EG_Dash.png"
import Dash2 from "../assets/EG_Dash2.png"
import EvntMan1 from "../assets/EVman1.png"
import EvntMan2 from "../assets/EVman2.png"
import EvntMan3 from "../assets/EVman3.png"
import Exp1 from "../assets/EXP1.png"
import Exp2 from '../assets/EXP2.png'
import Analytics from '../assets/Anaylytics.png'



export const projects: ProjectData[] = [
{
  slug: "matero-customer-app",
  title: "Matero Customer App",
  category: "Mobile App Design",
  description:
    "Designing the end-to-end ordering experience for contractors, " +
    "builders, and homeowners to browse, order, and track construction " +
    "material deliveries — directly to their site, from their phone.",
  image: MetroThumbnail,
  hero: MetroThumbnail,
  year: "2026",
  role: "UI/UX Designer",
  duration: "20 days (8 April – 28 April 2026)",
  team: "1 Designer (me), 2 Full Stack Developers, 1 Project Lead",

  overview:
    "Matero is a multi-city quick-commerce platform for construction " +
    "materials — cement, sand, steel, bricks, tiles, and more — delivered " +
    "from dark stores (called Materos) directly to construction sites. " +
    "Before this platform existed, contractors had to visit multiple " +
    "suppliers, negotiate prices manually, and arrange their own transport. " +
    "I designed the complete Customer App (Android + iOS) — covering " +
    "product browsing, cart with automatic weight-based vehicle assignment, " +
    "checkout with full charge transparency, real-time order tracking, " +
    "OTP-based delivery confirmation, and invoice download.",

  challenge:
    "The core problem was not just 'ordering materials online.' " +
    "Construction procurement is B2B-heavy, weight-sensitive, and " +
    "trust-dependent. A contractor ordering 1,300 KG of cement and sand " +
    "needs to know: which vehicle will carry this? What will it cost? " +
    "Will it actually reach the site? The existing process had no " +
    "digital layer — it ran entirely on phone calls, manual negotiation, " +
    "and informal transport arrangements. The design challenge was to " +
    "make a complex, logistics-heavy ordering flow feel as simple and " +
    "trustworthy as consumer e-commerce.",

  targetUsers: [
    {
      type: "Contractors & Engineers",
      description:
        "Managing active construction projects. Need bulk orders, " +
        "GST invoices, and reliable delivery ETAs.",
    },
    {
      type: "Real Estate Builders",
      description:
        "Running multiple sites across a city. Need multi-address " +
        "management and project-linked invoicing.",
    },
    {
      type: "Individual Homeowners",
      description:
        "Building or renovating. Need a simple experience " +
        "without GST complexity.",
    },
  ],

  process: [
    {
      title: "Understanding the ordering problem",
      description:
        "The product spec defined 15 objectives and a 29-step order " +
        "journey — from city selection to invoice download. My first task " +
        "was mapping this against what a real customer actually needs to " +
        "see and do at each step. The key complexity: the system " +
        "auto-calculates vehicle assignment based on total order weight " +
        "(e.g. 10 bags cement × 50 KG = 500 KG, system assigns smallest " +
        "eligible vehicle). This logic had to be visible to the customer " +
        "in real time — not hidden in the backend. " +
        "← Add: what specific user flow decisions you made here. " +
        "What did you simplify or restructure from the spec?",
    },
    {
      title: "Cart & weight calculation — the hardest UX problem",
      description:
        "The cart is not a standard e-commerce cart. As the customer " +
        "adds products, the system recalculates total order weight " +
        "instantly and reassigns the vehicle category. This meant the " +
        "cart screen had to show: total weight, assigned vehicle type, " +
        "and delivery charge — all updating live. Too much information " +
        "causes anxiety; too little causes distrust at checkout. " +
        "← Add: how you designed this. What layout did you choose? " +
        "How did you show weight and vehicle info without overwhelming " +
        "the user? Did you test any variations?",
    },
    {
      title: "Checkout — 6-part charge breakdown",
      description:
        "The checkout shows: Base Fare + Extra Distance Charge + " +
        "Zone Surcharge + Unloading Charge (optional) + Platform Fee + " +
        "GST (optional). Six line items before the Grand Total. " +
        "The design had to make this transparent without feeling " +
        "intimidating. Additionally, customers could toggle GST on/off " +
        "per order, and select from 4 address categories " +
        "(Residential / Commercial / Construction Site / Government) " +
        "which changes the invoice format. " +
        "← Add: how you structured the checkout screen. " +
        "How did you handle the GST toggle UX? " +
        "What did you prioritise above the fold?",
    },
    {
      title: "Order tracking & OTP delivery confirmation",
      description:
        "The tracking screen shows a 6-stage status bar " +
        "(Order Placed → Matero Assigned → Packed → Driver Assigned → " +
        "Out for Delivery → Delivered), a live map with driver location " +
        "updating every 30 seconds, driver details, masked contact, " +
        "and — critically — the 6-digit OTP the customer must share " +
        "verbally with the driver to confirm delivery. " +
        "The OTP is the delivery confirmation mechanism. " +
        "If the customer loses it, they can regenerate once. " +
        "← Add: how you designed this screen. " +
        "How prominent is the OTP? What happens visually when " +
        "the driver is near? Did you consider edge cases like " +
        "'customer not available'?",
    },
  ],

  keyDesignDecisions: [
    {
      decision: "Live weight + vehicle display in cart",
      rationale:
        "Weight-based vehicle assignment is invisible system logic. " +
        "Making it visible builds trust and reduces checkout abandonment.",
    },
    {
      decision: "OTP as the delivery close mechanism",
      rationale:
        "Puts delivery confirmation control in the customer's hands. " +
        "Driver cannot fake a completed delivery without the real OTP.",
    },
    {
      decision: "Address category selection",
      rationale:
        "4 address types (Residential / Commercial / Site / Government) " +
        "auto-switch the invoice format. One decision at address entry " +
        "eliminates all invoice disputes later.",
    },
    {
      decision: "GST toggle — per order and permanent",
      rationale:
        "B2C homeowners don't need GST. B2B contractors need it on " +
        "every order. One toggle at checkout, one permanent setting " +
        "in profile — serves both without forcing either.",
    },
  ],

  outcomes: [
    {
      metric: "All screens designed & handed off",
      value: "20 days",
    },
    {
      metric: "Key flows covered",
      value: "Registration, Browse, Cart, Checkout, Tracking, Invoice",
    },
    {
      metric: "← Testing / validation result",
      value: "← Add honest outcome",
    },
  ],
  figmaLink: "https://www.figma.com/proto/pSGIDqr8ar5wsmKuLL6zQs/METERO?node-id=309-702&p=f&viewport=372%2C226%2C0.04&t=JzyOKT614dAblFaW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=309%3A702&show-proto-sidebar=1&page-id=0%3A1",

  testimonial: null,
 },
 {
  slug: "skillpilots",
  title: "SkillPilots",
  category: "Web Application",
  description:
    "A multi-stakeholder career readiness and talent intelligence platform connecting students, institutions, and corporates through structured assessments, intelligent career guidance, and automated hiring workflows.",
  image: SkillpilotsThumbnail,
  hero: SkillpilotsThumbnail,
  year: "2024",
  role: "UI/UX Designer",
  duration: "Ongoing",
  team: "Cross-functional (Design, Engineering, Product)",

  overview:
  "SkillPilots is a shipped B2B/B2C platform available on the Google Play Store with 150+ downloads. It closes the structural gap between student skill development, institutional placement tracking, and corporate hiring accuracy — serving three distinct user types from a shared assessment and profile infrastructure.",
  problemStatement:
    "India's talent ecosystem has a critical mismatch: students apply with unverified resumes, colleges track placements through spreadsheets, and companies hire from profiles with no signal beyond self-declaration. No single platform addressed all three stakeholders with shared, verified readiness data. Internship certificates were issued manually — typed, printed, physically signed, and scanned — taking days per intern with no consistency.",

  challenge:
    "Designing one platform for three radically different mental models was the central challenge. Students needed confidence-building, progressive journeys. TPOs needed governance structures, hierarchy management, and accreditation-ready reports. HR teams needed high-signal shortlisting with minimal friction. Every shared component — assessments, profiles, certificates — had to serve all three without compromising any one persona's experience.",

  personas: [
    {
      title: "Student",
      description: "Final-year or pre-final-year student seeking internships or jobs. Lacks confidence in self-assessment.",
      needs: [
        "Know if they're ready to apply",
        "Structured preparation with milestones",
        "Verifiable proof of skills",
        "Safe space to practice interviews"
      ]
    },
    {
      title: "TPO / Campus Coordinator",
      description: "Training and placement officer managing 100s of students across departments.",
      needs: [
        "Department-wise readiness visibility",
        "Managed internship and placement drives",
        "NAAC, NBA, NEP 2020 aligned reports",
        "Internship completion tracking"
      ]
    },
    {
      title: "Corporate HR",
      description: "HR manager running internship programs or lateral hiring. Time-pressured, needs signal over noise.",
      needs: [
        "Pre-evaluated candidate pools",
        "Fast, fair shortlisting tools",
        "Automated certificate issuance",
        "Intern-to-hire conversion data"
      ]
    }
  ],

  process: [
    {
      title: "Multi-persona journey mapping",
      description:
        "Mapped three end-to-end journeys — candidate, TPO, and corporate HR — and identified where they intersect: assessment data, candidate profiles, internship listings, and certificate issuance. These intersection points became the shared design system components.",
      deliverable: "Journey map per persona + intersection matrix",
    },
    {
      title: "Information architecture for role-based access",
      description:
        "Designed a three-tier hierarchy for institutions (TPO → Department Coordinator → HOD) and a parallel structure for corporates (HR → Manager → Hiring Team). Mapped which data each role could view, edit, or approve. Defined shared entities that rendered differently per role.",
      deliverable: "AI map + role-permission matrix",
    },
    {
      title: "Assessment framework UX design",
      description:
        "Designed the four-layer evaluation system — psychometric (quarterly), foundational (unlimited attempts, 30 marks each), and technical at three levels (Basic / Intermediate / Advanced with 10 / 5 / 3 attempts respectively). Each layer required distinct interaction patterns: psychometric is situational, technical is progressive, foundational is remedial-friendly.",
      deliverable: "Assessment flow per layer + attempt logic specs",
    },
    {
      title: "Career roadmap system — the 7-7-7 framework",
      description:
        "Designed the 21-day sprint system where post-assessment score determines roadmap level. Each sprint has 3–4 daily micro-tasks paired with videos and 10-question quizzes requiring 50% to unlock the next day. Sprint completion triggers a domain-aware project submission: GitHub for tech, Figma for design, Drive for non-tech, AutoCAD for engineering.",
      deliverable: "Daily task flow + domain-type submission screens",
    },
    {
      title: "Platform integrity features",
      description:
        "Designed four layered integrity flows: profile picture gate with server-side face detection; live webcam face-match at session start (75% confidence threshold, 3-attempt limit before flagging); annual qualification update modal in June (non-dismissable, blocks all platform routes until submitted); and pursuit qualification rules preventing multiple concurrent active qualifications.",
      deliverable: "Verification flow specs + edge case handling table",
    },
    {
      title: "Automated certificate flow",
      description:
        "Replaced a fully manual process (individual creation, printing, signing, scanning per intern) with a one-time company setup. Designed the letterhead/signature upload panel, the completion-trigger logic, the auto-generated PDF with student data and performance feedback, and the blocked state UX for when company assets are missing.",
      deliverable: "Certificate setup flow + generation state screens + API spec reference",
    }
  ],

  keyDesignDecisions: [
    {
      decision: "Progressive retry logic per assessment layer",
      rationale: "10 attempts at Basic, 5 at Intermediate, 3 at Advanced — decreasing attempts signal increasing stakes without making early-stage learners feel locked out."
    },
    {
      decision: "Non-dismissable blocking modal for annual qualification update",
      rationale: "Stale academic year data caused internship mismatches. A soft nudge would be ignored. The modal blocks all routes until submission, but only triggers once per year in June — high stakes, low frequency."
    },
    {
      decision: "Domain-aware project submission fields",
      rationale: "A GitHub link is meaningless for a Civil Engineering student. Project submission UI adapts to domain_type stored in the user profile — tech gets GitHub, design gets Figma, agriculture optionally captures GPS coordinates."
    },
    {
      decision: "Readiness levels shown instead of raw scores to employers",
      rationale: "Raw scores invite gaming and misinterpretation. Employers see High / Moderate / Emerging alignment indicators, which are harder to inflate and easier to act on."
    }
  ],

  outcomes: [
    { metric: "Live on Google Play Store & App store", value: "Shipped" },
    { metric: "Downloads", value: "150+" },
    { metric: "User personas served", value: "3" },
    { metric: "Assessment layers designed", value: "4" },
    { metric: "Manual steps post-setup for certificates", value: "0" },
    { metric: "Accreditation frameworks supported", value: "NAAC, NBA, NEP 2020" },
  ],
  // No testimonial — the documentation contains no verifiable user quotes
  appStoreUrl: "https://apps.apple.com/in/app/skillpilots/id6757995819",
},
{
  slug: "sapphire-broking",
  title: "Sapphire Broking",
  category: "Mobile Application",
  description:
    "A seamless and engaging stock trading experience redesign for Sapphire Broking — simplifying complex financial workflows for first-time and experienced traders alike.",
  image: SapphireThumbnail,
  hero: SapphireThumbnail,
  year: "2025",
  role: "UI/UX Designer",
  duration: "5 Months (Oct – Mar 2025)",
  team: "1 Designer (me), 1 Product Manager, 3 Frontend Developers, 2 Backend Developers",

  overview:
    "Sapphire Broking is a stock trading platform redesign focused on making equity trading accessible, fast, and trustworthy for Indian retail investors. The project involved end-to-end UX design — from competitive research and user interviews through information architecture, wireframes, and high-fidelity screens across Watchlist, Trades, Orders, Holdings, and Account flows.",

  problemStatement:
    "Stock trading apps in India are either too complex for beginners or too stripped-down for active traders. First-time investors feel overwhelmed by jargon-heavy interfaces, while experienced traders lose time navigating poorly structured workflows. Sapphire Broking needed a ground-up UX redesign that served both segments without compromise.",

  challenge:
    "Designing a financial product that reduces cognitive load without sacrificing depth. Trading involves real money and real-time data — errors in UX design directly translate to financial loss for users. Every interaction had to be fast, clear, and confidence-inspiring, especially for order placement and portfolio tracking.",

  competitiveAnalysis: [
    {
      name: "Zerodha",
      rating: "4.5/5",
      strengths: "Extremely reliable execution, powerful charts (TradingView/ChartIQ Integration), clean order book.",
      weaknesses: "High cognitive load for beginners, separate apps for mutual funds (Coin) and trading (Kite).",
    },
    {
      name: "Groww",
      rating: "4.2/5",
      strengths: "Very simple onboarding, unified dashboard for stocks and mutual funds, friendly for beginners.",
      weaknesses: "Lacks advanced charting tools, slower order execution during peak hours, limited F&O features.",
    },
    {
      name: "Angel One",
      rating: "4.0/5",
      strengths: "Strong advisory features, comprehensive research reports, good offline sub-broker network support.",
      weaknesses: "Cluttered UI with too many promotional banners, confusing navigation for novice users.",
    },
    {
      name: "Upstox",
      rating: "4.1/5",
      strengths: "Robust API integrations, strong option chain analysis tools, fast watchlist filters.",
      weaknesses: "Frequent UI updates disrupt muscle memory, customer support response times can be high.",
    },
  ],

  personas: [
    {
      title: "The First-Time Investor",
      description:
        "22–28 years old, salaried professional, just opened a demat account. Intimidated by charts and order types. Wants simplicity and guidance.",
      needs: [
        "Simple onboarding with no jargon",
        "Clear buy/sell flow with confirmation",
        "Portfolio summary at a glance",
        "Educational nudges at key moments",
      ],
    },
    {
      title: "The Active Trader",
      description:
        "30–45 years old, experienced with equity and F&O. Trades daily. Values speed, data density, and keyboard/gesture shortcuts.",
      needs: [
        "Fast order placement with minimal taps",
        "Real-time watchlist with price alerts",
        "Detailed holdings and P&L breakdown",
        "Quick access to trade history",
      ],
    },
  ],

  researchInsights: [
    "Users abandoned order flows when confirmation screens were unclear about quantity and price.",
    "Watchlist management was cited as the most-used and most-frustrating feature across competing apps.",
    "First-time investors specifically wanted a 'total invested vs current value' summary visible without navigation.",
    "Active traders wanted one-tap access to the order book from any screen.",
  ],

  process: [
    {
      title: "Competitive analysis",
      description:
        "Audited four major Indian broking apps — Zerodha, Groww, Angel One, and Upstox — across onboarding, watchlist management, order placement, holdings view, and account management. Mapped strengths and gaps to identify design opportunities for Sapphire.",
      deliverable: "Competitor audit matrix with ratings and feature comparison",
    },
    {
      title: "User research & personas",
      description:
        "Conducted user interviews with first-time investors and active traders. Synthesized findings into two primary personas representing the spectrum of Sapphire's target users. Identified core pain points around order complexity, portfolio clarity, and watchlist friction.",
      deliverable: "2 user personas + pain point map",
    },
    {
      title: "Information architecture",
      description:
        "Restructured the app's navigation around five primary sections: Watchlist, Trades, Orders, Holdings, and Account. Designed a bottom navigation model with quick-access order placement accessible from every tab. Mapped full user flows for the critical paths: stock search → add to watchlist, watchlist → place order, and portfolio → individual stock detail.",
      deliverable: "IA diagram + user flow maps",
    },
    {
      title: "Wireframes",
      description:
        "Created low-fidelity wireframes for all primary screens before moving to high fidelity. Tested wireframe flows with users to validate navigation structure and order placement clarity before investing in visual design.",
      deliverable: "Low-fidelity wireframes across all 5 sections",
    },
    {
      title: "Visual design system",
      description:
        "Built a design system grounded in Sapphire's brand: primary green (#00B074), tech core, law core, tax core, and white core. Typography hierarchy established for data-dense screens where readability at small sizes is critical. High-contrast color choices for buy (green) and sell (red) states following Indian market conventions.",
      deliverable: "Color palette, typography scale, component library",
    },
    {
      title: "High fidelity screens",
      description:
        "Designed complete high-fidelity screens across all sections: Watchlist (real-time price list, search, alerts), Trades (order history, filters), Order placement (buy/sell form, confirmation), Holdings (portfolio summary, individual stock detail), Account (profile, settings, linked banks), and additional utility screens.",
      deliverable: "50+ high-fidelity screens across 5 core sections",
    },
  ],

  screens: [
    {
      section: "Watchlist",
      description:
        "Real-time stock price list with search, sorting, and quick-add. Designed for fast scanning with clear price change indicators.",
      images: [
        Watchlist1,
        Watchlist2,
      ],
    },
    {
      section: "Trades",
      description:
        "Complete trade history with filters by date, segment, and status. Designed for active traders who review their activity daily.",
      images: [
        Trade1,
        Trade2,
        Trade3,
      ],
    },
    {
      section: "Order",
      description:
        "Buy and sell order placement with clear quantity, price, and order type inputs. Confirmation screen shows exact cost breakdown before execution.",
      images: [
        Order1,
        Order2,
        Order3,
      ],
    },
    {
      section: "Holdings",
      description:
        "Portfolio overview showing total invested, current value, and day P&L at the top. Individual stock cards show quantity, average price, and return percentage.",
      images: [
        Holding1,
        Holding2,
        Holding3
      ],
    },
    {
      section: "Account",
      description:
        "Profile, linked bank accounts, segment activation, and settings. Designed to be rarely visited but easy to navigate when needed.",
      images: [
        Acc1,
        Acc2,
        Acc3
      ]
    },
  ],

  keyDesignDecisions: [
    {
      decision: "Bottom navigation with persistent order button",
      rationale:
        "Order placement is the most critical action in a trading app. A floating action button accessible from every tab reduces the tap count from 3–4 to 1 for placing an order from any screen.",
    },
    {
      decision: "Buy/sell color convention follows NSE standard (green/red)",
      rationale:
        "Indian traders are conditioned to NSE/BSE color standards. Deviating would introduce cognitive friction at the moment of financial decision-making — a risk not worth taking.",
    },
    {
      decision: "Confirmation screen before every order execution",
      rationale:
        "User research showed order errors (wrong quantity, wrong price type) were a top complaint across competitor apps. A mandatory confirmation screen adds one tap but prevents irreversible mistakes.",
    },
    {
      decision: "Portfolio summary pinned at top of Holdings tab",
      rationale:
        "First-time investors specifically asked for total invested vs current value visible without scrolling. Pinning this summary at the top answered the most common 'how am I doing?' question instantly.",
    },
  ],

  colorPalette: [
    { name: "Primary Core (Brand Green)", hex: "#00B074" },
    { name: "Tech Core (Ocean Navy)", hex: "#0E1E38" },
    { name: "Law Core (Slate Gray)", hex: "#64748B" },
    { name: "Tax Core (Soft Mint)", hex: "#E8F7F2" },
    { name: "White Core", hex: "#FFFFFF" },
    { name: "Dark Text", hex: "#1E293B" },
  ],

  outcomes: [
    { metric: "Screens designed", value: "100+" },
    // { metric: "Core user flows", value: "5" },
    // { metric: "Personas researched", value: "2" },
    { metric: "Competitors audited", value: "4" },
    { metric: "Published on Behance", value: "Live" },
  ],

  behanceUrl: "https://www.behance.net/gallery/224380145/Sapphire-Broking-UIUX-Case-Study",
},
{
  slug: "events-go",
  
  title: "Events GO",
  category: "Mobile Application Redesign",
  description:
    "A complete UI redesign of Events GO — an event management app for photographers and event companies — transforming a cluttered, outdated interface into a modern, dark-themed product built for real business workflows.",
  image: EventGoThumbnail,
    hero: EventGoThumbnail,
  year: "2025",
  role: "UI/UX Designer",
  duration: "placeholder",
  team: "Solo Designer",

  overview:
    "Events GO is a mobile application built for event photography businesses and event management companies. It handles the full business workflow — from creating events and managing customers to tracking payments, logging expenses, managing staff exposings, and sharing photo galleries with clients. The existing app had a functional backend but a poor UI that felt unpolished and untrustworthy for a business-facing product. I redesigned the entire interface with a modern dark purple aesthetic, improved information hierarchy, and cleaner interaction patterns across every screen.",

  problemStatement:
    "The original Events GO interface was built to be functional, not professional. For a B2B tool used by photographers and event companies to manage real client relationships and real money, the UI communicated the wrong level of trust and quality. Business owners couldn't confidently show this app to clients or use it during live events without friction.",

  challenge:
    "Event management apps carry dual complexity: they serve the business operator (who needs dashboards, analytics, and financial tracking) and indirectly serve the client (who receives gallery access and payment information). Every screen had to feel premium enough for client-facing moments while staying efficient for operator-heavy workflows like creating events, logging expenses, and managing staff.",

  researchInsights: [
    "Event photographers manage 5–15 active events simultaneously — the dashboard needed to surface the most urgent information without scrolling.",
    "Payment tracking was the most business-critical flow — operators needed to see package amount, advanced paid, and remaining due at a glance.",
    "Photo gallery sharing with clients was a trust moment — the gallery screen needed to feel premium, not utilitarian.",
    "Staff exposing lists (candid photographers, videographers) are referenced during live events on mobile — the list needed to be scannable under time pressure.",
    "Analytics (income vs expenses vs profit) was a key decision-making screen for pricing packages — it needed clear visual hierarchy, not just raw numbers.",
  ],

  process: [
    {
      title: "Audit of existing UI",
      description:
        "Mapped all existing screens and flows to understand the full scope of the product before redesigning. Identified screens that were purely operator-facing (dashboard, analytics, expenses) vs client-facing (gallery, payment summary) — these required different visual treatments.",
      deliverable: "Screen inventory + flow map + problem annotations",
    },
    {
      title: "Visual direction — dark luxury aesthetic",
      description:
        "Chose a deep dark background (#0D0D0D) with violet/purple (#7C3AED range) as the primary brand color. This direction was deliberate: dark themes signal premium quality in photography and media tools (Adobe, Lightroom, Final Cut), aligning Events GO with the professional tools its users already trust. Purple differentiated it from the flat-white aesthetic of generic business apps.",
      deliverable: "Color palette + typography scale + component decisions",
    },
    {
      title: "Navigation architecture",
      description:
        "Designed a bottom navigation bar with four tabs — Home, Event, Analytics, My Profile — each with distinct active/inactive states using purple highlight and icon fill. The nav bar remains consistent across all primary screens to reduce disorientation during fast task-switching, which is common during live events.",
      deliverable: "Nav bar component with 4 active states",
    },
    {
      title: "Onboarding flow redesign",
      description:
        "Redesigned the three-step sign up flow: Personal Details → Company Details (with brand logo upload, services selection, address) → Set Password. Each step is a full screen with a single focused task and a persistent Continue CTA at the bottom. The login screen uses a minimal centered card layout with mobile number + password.",
      deliverable: "Splash → Login → Sign up (3-step) → Dashboard flow",
    },
    {
      title: "Dashboard and event management screens",
      description:
        "Redesigned the home dashboard with a personalized greeting, six quick-action tiles (New Events, Show Events, Exposings, Customers, Payments, Expenses), and a live events list showing upcoming event cards with date badges and tab filtering (All, Haldi, Wedding, Reception). Event creation form was restructured into three clear sections: Event Details, Customer Details, and Event Package — with a date/time picker and package selector.",
      deliverable: "Dashboard, event list, create event, event detail screens",
    },
    {
      title: "Financial tracking flows",
      description:
        "Designed the Payments screen showing due amount, package breakdown, and payment history. Add Payment screen pre-fills package information (Silver — ₹35,000 final, ₹10,000 advanced, ₹25,000 remaining) and only asks for payment date and amount. Expenses screen separates Vendor and Employee expense types with clear tagging, contact numbers, and running totals. Analytics report shows income vs expenses vs total profit with a transaction timeline.",
      deliverable: "Payments, Add Payment, Expenses, Add Expense, Analytics screens",
    },
    {
      title: "Gallery and client-facing screens",
      description:
        "Designed the event photo gallery with a cover image, photo/video count, and masonry grid. Added QR code sharing — clients can scan to access the gallery directly without needing the app. The exposing list screen shows staff by event tab (Haldi, Wedding, Reception) with name, mobile, role (Candid/Videographer), and price per person — designed to be read quickly during on-ground coordination.",
      deliverable: "Gallery, QR share, Exposing list, My Packages screens",
    },
  ],

  screens: [
    {
      section: "Onboarding",
      description:
        "3-step Sign Up (Personal Details, Company Details, Set Password). Clean centered layout with full-bleed dark background and purple CTA buttons.",
      images: [
       Signup1,
       Signup2,
       Signup3
      ],
    },
    {
      section: "Dashboard",
      description:
        "Personalized greeting with 6 quick-action tiles and a live events list with upcoming event cards, date badges, and tab filters.",
      images: [
        Dash1,
        Dash2
      ],
    },
    {
      section: "Event Management",
      description:
        "Create event form (3 sections: Event Details, Customer Details, Event Package), event detail view with sub-event tabs (Haldi, Wedding, Reception), and date range picker.",
      images: [
        EvntMan1,
        EvntMan2,
        EvntMan3
      ],
    },
    {
      section: "Payments & Expenses",
      description:
        "Payment due summary with package breakdown, Add Payment form, Expenses list with Vendor/Employee tags, and Add Expense forms for both types.",
      images: [
        Exp1,
        Exp2
      ],
    },
    {
      section: "Analytics",
      description:
        "Business analytics report showing Income, Expenses, and Total Profit with a transaction-level breakdown and date range filter.",
      images: [
        Analytics
      ],
    },
  ],

  outcomes: [
    { metric: "Screens redesigned", value: "25+" },
    { metric: "Core workflows covered", value: "7" },
    { metric: "Visual direction", value: "Dark luxury" },
    { metric: "Financial flows designed", value: "Payments, Expenses, Analytics" },
  ],
}
]