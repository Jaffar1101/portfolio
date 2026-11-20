export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  status: 'Hackathon Prototype / Evolving MVP' | 'MVP / Active Development' | 'Product Concept / Digital Prototype' | 'Academic / Competition Project' | 'Research Project' | 'Production / Client Work';
  statusColor: string;
  summary: string;
  problem: string;
  myContribution: string[];
  techStack: string[];
  keyDecisions: string[];
  architectureFlow?: { step: string; detail: string }[];
  honestNotes?: string;
  achievement?: {
    title: string;
    event: string;
    badge?: string;
  };
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  image?: string;
  imageAlt?: string;
}

export interface Achievement {
  id: string;
  title: string;
  award: string;
  organizer: string;
  project?: string;
  year: string;
  details: string;
  location?: string;
}

export interface CommunityItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  location?: string;
  year: string;
  description: string;
  keyPoints?: string[];
  type: 'volunteer' | 'community' | 'event';
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  completionDate: string;
  credentialId?: string;
  verificationUrl?: string;
  status: 'Completed' | 'In Progress';
  note?: string;
}

export const PERSONAL_INFO = {
  name: "Jaffar Mala",
  title: "AI Product Builder & Systems-Oriented Developer",
  location: "Mumbai, Maharashtra, India",
  education: {
    degree: "B.Sc. Information Technology (Second Year)",
    institution: "Maharashtra College of Arts, Science & Commerce",
    institutionNote: "Official institutional naming to be confirmed before final publishing",
    location: "Mumbai, India",
    year: "2024 – Present"
  },
  social: {
    github: "https://github.com/Jaffar1101",
    linkedin: "https://www.linkedin.com/in/jaffar-mala/",
    email: "jaffarmala1101@gmail.com", // Configurable placeholder / contact email
    deepCheckRepo: "https://github.com/Jaffar1101/Deep_Check"
  },
  hero: {
    eyebrow: "STUDENT DEVELOPER · AI · SOFTWARE · SYSTEMS",
    headline: "I turn ideas into working systems.",
    supportingCopy: "I'm Jaffar — an IT student and AI product builder exploring the intersection of software engineering, artificial intelligence, cloud infrastructure, and connected technologies.",
    secondaryLine: "Building, experimenting, breaking things, and turning concepts into usable products.",
    philosophy: "I am interested in what happens between an idea and a working product. From designing backend architecture and integrating AI models to connecting services, managing infrastructure, and building usable interfaces, I enjoy bringing different technologies together to solve practical problems.",
    ambition: "My longer-term ambition is to become an AI orchestrator: someone who understands how to combine AI models, APIs, tools, agents, workflows, and infrastructure into useful end-to-end systems."
  }
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming & Web Development",
    description: "Core languages and web engineering foundations used across frontends and services.",
    skills: [
      { name: "Python", context: "AI agent services, data scripts, backend APIs" },
      { name: "JavaScript", context: "Modern ES6+, interactive web applications, client-side logic" },
      { name: "React", context: "Component architectures, reactive interfaces, state management" },
      { name: "FastAPI", context: "High-performance asynchronous microservices and API gateways" },
      { name: "Java", context: "OOP fundamentals, enterprise systems, Servlets & JSP" },
      { name: "HTML & CSS", context: "Semantic layout, responsive design, Tailwind engineering" }
    ]
  },
  {
    category: "AI & Application Intelligence",
    description: "Integrating intelligent reasoning layers and models into functional workflows.",
    skills: [
      { name: "AI/ML Integration", context: "Bridging model endpoints with real application pipelines" },
      { name: "Gemini API", context: "Multimodal verification, claim analysis, contextual prompt design" },
      { name: "OpenAI API", context: "Text summarization, verification routing, fallback evaluation" },
      { name: "AI-Assisted Workflows", context: "Augmenting developer iteration and real-world task automations" },
      { name: "Prediction & Analytics Concepts", context: "Air quality trends, filter degradation curves, regression models" },
      { name: "Agent-Based Architecture", context: "Decision-making loops, confidence scoring, automated actions" }
    ]
  },
  {
    category: "Backend & Databases",
    description: "Data persistence, contract-first API design, and relational integrity.",
    skills: [
      { name: "REST APIs", context: "Clean JSON contracts, validation with Pydantic, HTTP semantics" },
      { name: "MySQL", context: "Relational schema design, entity relationships, query indexing" },
      { name: "FastAPI Backend", context: "Asynchronous route handlers, CORS, background processing" },
      { name: "JDBC / Servlets / JSP", context: "Enterprise Java web architecture, MVC pattern, request dispatching" }
    ]
  },
  {
    category: "Cloud & Infrastructure Fundamentals",
    description: "Understanding deployment targets, resiliency patterns, and cloud platforms.",
    skills: [
      { name: "AWS Fundamentals", context: "EC2 instances, S3 storage, IAM concepts, VPC basics" },
      { name: "OCI Fundamentals", context: "Oracle Cloud compute, networking, security policies" },
      { name: "Multi-Cloud Architecture", context: "Cross-cloud workload concepts, vendor neutrality" },
      { name: "Active-Passive Disaster Recovery", context: "Failover strategies, replication concepts, high availability" },
      { name: "Git & GitHub", context: "Version control workflows, branching, PR reviews, release tags" },
      { name: "Deployment Basics", context: "Hosting modern SPAs, environment variables, server execution" }
    ]
  },
  {
    category: "Tools & Development Environment",
    description: "Day-to-day engineering workbench and developer tooling.",
    skills: [
      { name: "Visual Studio Code", context: "Primary IDE, debugger tooling, workspace customization" },
      { name: "Google AI Studio", context: "Prompt engineering, token optimization, safety filters" },
      { name: "GitHub", context: "Collaborative code repos, issue tracking, CI/CD foundations" },
      { name: "NetBeans", context: "Enterprise Java development, GlassFish server tooling" },
      { name: "Canva", context: "Interface prototyping, pitch decks, technical diagrams" }
    ]
  }
];

export const CURRENTLY_EXPLORING = [
  {
    name: "Advanced AI Agent Orchestration",
    tagline: "Multi-agent systems with tool-calling, autonomous recovery, and state graphs.",
    stage: "Active Study"
  },
  {
    name: "RAG & LangChain",
    tagline: "Retrieval-Augmented Generation using vector embeddings and structured document indexing.",
    stage: "Prototyping"
  },
  {
    name: "MongoDB",
    tagline: "Document database patterns, aggregation pipelines, and flexible document modeling.",
    stage: "Hands-on Practice"
  },
  {
    name: "n8n Automation",
    tagline: "Workflow automation, webhook integration, and autonomous business operations.",
    stage: "Building Workflows"
  },
  {
    name: "DevOps & Cloud Automation",
    tagline: "Containerization with Docker, CI/CD pipelines, and infrastructure as code principles.",
    stage: "Conceptual & Labs"
  },
  {
    name: "Resilient Backend Architecture",
    tagline: "Rate limiting, caching patterns with Redis, message queues, and fault tolerance.",
    stage: "Deep Dive"
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "air-sense",
    title: "Air Sense",
    tagline: "AI-powered air-quality intelligence and automated filtration control.",
    category: "AI + IoT + Environmental Intelligence",
    status: "Hackathon Prototype / Evolving MVP",
    statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    summary: "Air Sense moves beyond simply displaying pollution readings. It combines environmental telemetry, predictive pollution trends, filter degradation estimation, and automated filtration actuator triggers into a unified intelligence layer.",
    problem: "Most commercial air quality monitors are passive displays: they tell you the air is bad only after you have already breathed it, without predicting trends or calculating whether the physical filter has exhausted its real functional capacity.",
    myContribution: [
      "Designed and developed the FastAPI-based AI agent layer and software intelligence services.",
      "Implemented PollutionPredictionModel to calculate upcoming pollution trend trajectories from sensor telemetry.",
      "Built FilterHealthModel to estimate cumulative particulate stress and remaining filter life expectancy.",
      "Engineered automated input validation and anomaly correction to sanitize out-of-range sensor readings.",
      "Integrated explicit confidence metrics (0.00 – 1.00) in model outputs to ensure transparent decision-making.",
      "Constructed simulated environmental telemetry generators for rigorous testing of filtration trigger workflows."
    ],
    techStack: ["FastAPI", "Python", "React", "Prediction Models", "Telemetry Simulation", "REST APIs"],
    keyDecisions: [
      "Decoupled the AI intelligence agent from the raw sensor collector service to prevent data bottlenecks.",
      "Used explicit confidence intervals instead of black-box ratings so operators know when sensor telemetry is anomalous.",
      "Synthesized environmental data stress-tests to validate edge conditions before physical deployment."
    ],
    architectureFlow: [
      { step: "Telemetry Ingestion", detail: "PM2.5, PM10, temperature & humidity packets validated via FastAPI schemas" },
      { step: "Validation & Scrubbing", detail: "Outlier filtering, invalid-input correction, and null imputation" },
      { step: "Prediction Engine", detail: "PollutionPredictionModel projects trends; FilterHealthModel evaluates filter degradation" },
      { step: "Agent Decision Logic", detail: "Generates fan speed, filtration mode recommendations with confidence scores" },
      { step: "Dashboard & Actuators", detail: "Real-time reactive visual indicators and automated relay triggers" }
    ],
    honestNotes: "Important Note: Some prediction and filter-health demonstrations currently operate on simulated environmental telemetry for software validation. Hardware sensor integration with ESP32 microcontrollers represents the next active milestone.",
    achievement: {
      title: "2nd Runner-Up",
      event: "Build & Grow AI Hackathon 2.0 (Jio Institute, GDG Cloud Mumbai × GDG Cloud Pune)",
      badge: "National Hackathon Finalist"
    },
    links: {
      github: "https://github.com/Jaffar1101"
    }
  },
  {
    id: "deepcheck",
    title: "DeepCheck",
    tagline: "AI-assisted verification platform for investigating suspicious claims and digital media.",
    category: "AI + Misinformation + Deepfake Verification",
    status: "MVP / Active Development",
    statusColor: "text-blue-700 bg-blue-50 border-blue-200",
    summary: "DeepCheck is an AI-assisted investigative workbench designed to help users evaluate controversial assertions, check news veracity, and verify media authenticity with transparent source tracking and explainable assessments.",
    problem: "Misinformation spreads at internet speed while rigorous fact-checking requires cross-referencing multiple authoritative databases, validating media metadata, and parsing rhetorical distortions manually.",
    myContribution: [
      "Engineered the full-stack architecture connecting a React user interface with a high-throughput FastAPI backend.",
      "Structured the core verification pipeline: Claim Submission → Source Discovery → Evidence Analysis → Structured Verdict.",
      "Implemented modular entity models: Source, Claim, Verification, Explanation, Media, and User Feedback.",
      "Integrated Gemini and OpenAI API interfaces for multimodal claim comprehension and factual cross-referencing.",
      "Designed transparent verification reports showing confidence scores, citation sources, and reasoning steps."
    ],
    techStack: ["React", "FastAPI", "Python", "Gemini API", "OpenAI API", "SQLite / SQLAlchemy"],
    keyDecisions: [
      "Designed an explainable reasoning structure rather than a simple 'True/False' label to provide cognitive nuance.",
      "Maintained separated verification pipelines for pure text claims versus uploaded media files.",
      "Implemented graceful fallback reasoning when external verification APIs hit rate limits or ambiguous context."
    ],
    architectureFlow: [
      { step: "User Submission", detail: "Text claim statement or media file uploaded via responsive interface" },
      { step: "Claim Extraction", detail: "Entities, contextual timestamps, and core assertions extracted via LLM" },
      { step: "Evidence Retrieval", detail: "Querying authoritative knowledge bases and verified fact-checking records" },
      { step: "Multimodal Evaluation", detail: "Cross-checking claims against discovered evidence and metadata" },
      { step: "Explainable Verdict", detail: "Structured response detailing credibility score, citations, and analysis rationale" }
    ],
    honestNotes: "Technical Honesty: Text-based verification is functional with active API integration. The uploaded-media pathway currently uses fallback analysis heuristics while a specialized deepfake neural detection model is being wired into the pipeline.",
    links: {
      github: "https://github.com/Jaffar1101/Deep_Check"
    },
    image: `${import.meta.env.BASE_URL}assets/images/deepcheck-logo.png`,
    imageAlt: "DeepCheck Logo and Platform"
  },
  {
    id: "womens-safety-wearable",
    title: "AI-Powered Women's Safety Wearable",
    tagline: "Connected hardware, contextual risk assessment, and companion emergency orchestration.",
    category: "AI + IoT + Wearable Technology",
    status: "Product Concept / Digital Prototype",
    statusColor: "text-amber-700 bg-amber-50 border-amber-200",
    summary: "A dedicated physical safety device designed to solve the critical flaw of phone-only SOS tools: when emergency situations arise, unlocking a phone and navigating to an app is often impossible. The wearable pairs discreet physical triggers with phone-assisted intelligence.",
    problem: "Most emergency applications require conscious screen interaction, unlock codes, or conspicuous phone handling, which are dangerously impractical in high-stress or coercive situations.",
    myContribution: [
      "Designed the 3-tier system architecture: Embedded Device → BLE Connectivity → Application Intelligence.",
      "Specified the microcontroller selection: Seeed Studio XIAO ESP32-C3 for low power, compact form, and native BLE.",
      "Designed the physical activation mechanism: a deliberate four-press sequence to prevent accidental false alarms.",
      "Planned the acoustic sensing pathway utilizing an INMP441 I2S digital microphone for contextual sound classification.",
      "Drafted the companion mobile application workflow for phone-assisted GPS relay and emergency contact dispatches."
    ],
    techStack: ["XIAO ESP32-C3", "BLE (Bluetooth Low Energy)", "INMP441 Mic", "Phone GPS Relay", "System Architecture"],
    keyDecisions: [
      "Relied on phone-assisted GPS over native GPS module to drastically reduce wearable power consumption and footprint.",
      "Selected a 4-press tactile trigger rather than a single button to virtually eliminate false positives in pockets or bags.",
      "Separated immediate distress broadcasting from deep AI audio evaluation so alerts dispatch without latency."
    ],
    architectureFlow: [
      { step: "Hardware Layer", detail: "XIAO ESP32-C3 microcontroller, tactile trigger switch, INMP441 I2S microphone" },
      { step: "Connectivity Layer", detail: "Ultra-low-power BLE handshake transmitting encrypted activation tokens" },
      { step: "Phone Companion App", detail: "Fetches high-accuracy GPS coordinates and packages time-stamped location payload" },
      { step: "Emergency Dispatch", detail: "Automated SMS/Webhook alert cascade to preconfigured emergency contacts & services" },
      { step: "Contextual AI Layer (Roadmap)", detail: "On-device or edge acoustic classification to detect ambient distress signatures" }
    ],
    honestNotes: "Project Status: This is an active product concept and digital architecture prototype. Hardware schematic selection and firmware logic have been defined; physical production and deployment are future milestones.",
    links: {}
  },
  {
    id: "academia-ai",
    title: "Academia AI",
    tagline: "Predictive analytics and recommendation platform for academic performance trajectory.",
    category: "AI + EdTech + Predictive Analytics",
    status: "Academic / Competition Project",
    statusColor: "text-indigo-700 bg-indigo-50 border-indigo-200",
    summary: "Academia AI addresses reactive education by turning historical academic performance, assessment trends, and study metrics into predictive trajectories and targeted improvement recommendations for students and mentors.",
    problem: "Students and academic advisors frequently discover academic distress only after term exams have concluded, when remediation is either costly or too late to influence the outcome.",
    myContribution: [
      "Collaborated as a core team member in the NextEdge National Conclave hackathon.",
      "Contributed to data modeling for student performance metrics and historical grade trends.",
      "Assisted in designing predictive analytics workflows to correlate test milestones with future outcomes.",
      "Designed interactive analytics dashboard concepts presenting progress indicators and gamified milestones."
    ],
    techStack: ["Python", "Data Analytics", "Performance Modeling", "Educational UX", "Dashboard Analytics"],
    keyDecisions: [
      "Focused on actionable early-intervention indicators rather than passive historical GPA charts.",
      "Designed transparent progress metrics so students understand exactly which topics require additional study."
    ],
    architectureFlow: [
      { step: "Assessment Telemetry", detail: "Ingesting historical grades, quiz marks, attendance records, and study logs" },
      { step: "Pattern Identification", detail: "Statistical trend modeling to identify early signs of academic regression" },
      { step: "Predictive Trajectory", detail: "Simulating expected final outcomes under current learning velocity" },
      { step: "Personalized Roadmap", detail: "Generating targeted topic revision schedules and recommended resources" }
    ],
    honestNotes: "Collaboration & Scope: Developed in a team context for the NextEdge National Conclave. I contributed to the analytics workflows, data models, and dashboard concepts as part of a collaborative squad.",
    achievement: {
      title: "Second Prize",
      event: "NextEdge: Data Analytics & Cyber Security National Level Conclave",
      badge: "National Conclave Runner-Up"
    },
    links: {}
  },
  {
    id: "afrr-robot",
    title: "AFRR — Agro Fire Rescue Robot",
    tagline: "Robotics and sensing exploration for agricultural hazard mitigation and field safety.",
    category: "Robotics + AgriTech + Research",
    status: "Research Project",
    statusColor: "text-purple-700 bg-purple-50 border-purple-200",
    summary: "Agro Fire Rescue Robot is a research-focused engineering initiative investigating how ruggedized remote-controlled and autonomous mobile platforms can identify and suppress early-stage agricultural fires before they consume hectares of crops.",
    problem: "Agricultural fires spread rapidly in dry crops and rural terrains where conventional municipal fire services face long transit times and limited water access.",
    myContribution: [
      "Participated in research exploration and presented findings at the prestigious 20th Avishkar Research Convention.",
      "Contributed to conceptual system design, sensor placement strategies, and chassis requirements.",
      "Documented technical architecture, fail-safe protocols, and agricultural terrain constraints."
    ],
    techStack: ["Robotics Architecture", "Hazard Sensing", "Embedded Systems", "Avishkar Research Convention"],
    keyDecisions: [
      "Focused on early perimeter containment rather than complete bulk extinguishing to optimize payload weight.",
      "Designed fail-safe manual override mechanisms alongside autonomous hazard detection concepts."
    ],
    architectureFlow: [
      { step: "Field Hazard Detection", detail: "Flame sensors, smoke detection, and thermal monitoring modules" },
      { step: "Navigation & Telemetry", detail: "Ruggedized tracked chassis navigating rough agricultural soil" },
      { step: "Response Mechanism", detail: "Directional suppression payload aimed at ignition hotspots" },
      { step: "Operator Link", detail: "Long-range RF/Wi-Fi telemetry stream to base station" }
    ],
    honestNotes: "Research Status: Presented at the 20th Inter-College Avishkar Research Convention 2025–26. Represents an applied research study and mechanical/sensor prototype design rather than an autonomous production vehicle.",
    achievement: {
      title: "Convention Presentation",
      event: "20th Inter-College Avishkar Research Convention 2025–26",
      badge: "University Research Convention"
    },
    links: {},
    image: `${import.meta.env.BASE_URL}assets/images/robot.png`,
    imageAlt: "AFRR Agro Fire Rescue Robot Chassis Prototype"
  }
];

export const OTHER_PROJECTS = [
  {
    title: "Java CRM Enterprise System",
    description: "Enterprise customer relationship management system featuring user authentication, lead lifecycle tracking, contact directories, and task scheduling.",
    stack: ["Java EE", "JSP", "Servlets", "JDBC", "MySQL", "NetBeans", "GlassFish"],
    category: "Enterprise Backend",
    year: "2024",
    details: "Built clean MVC architecture separating DAO layers, SQL query execution, and session-managed JSP interfaces with relational MySQL schemas."
  },
  {
    title: "NetMinds Digital Presence",
    description: "Client web implementation focusing on responsive layout engineering, dynamic lead capture forms, and clean corporate brand alignment.",
    stack: ["WordPress", "The7 Framework", "Contact Form 7", "Custom CSS", "Responsive Design"],
    category: "Web Engineering",
    year: "2024",
    details: "Configured custom styling rules, optimized asset loading, and wired validated contact delivery channels for client inquiries."
  },
  {
    title: "RevoChat QA & Workflow Automation",
    description: "Systematic quality assurance, automated email response templates, and webhook workflow validation across transaction lifecycle states.",
    stack: ["n8n", "HTML Email Engineering", "QA Testing Checklist", "Lifecycle Validation"],
    category: "Workflow & QA",
    year: "2024",
    details: "Authored edge-case test matrices, verified payment/notification webhooks, and constructed resilient customer communication templates."
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "empresario-2026",
    title: "Gold Winner — Grand Finale",
    award: "Gold Winner Title",
    organizer: "Entrepreneurship Development Institute of India (EDII), Ahmedabad",
    project: "Tech Business Idea Pitching Competition",
    year: "2026",
    details: "Participated in the Grand Finale of the national Tech Business Idea Pitching Competition, securing the Gold Winner Title among top collegiate entrepreneurship teams from across India.",
    location: "Ahmedabad, Gujarat"
  },
  {
    id: "gdg-hackathon",
    title: "2nd Runner-Up — Build & Grow AI Hackathon 2.0",
    award: "2nd Runner-Up",
    organizer: "GDG Cloud Mumbai × GDG Cloud Pune",
    project: "Air Sense",
    year: "2025",
    details: "Presented Air Sense's AI-driven air quality prediction and filter health estimation engine at the final pitching showcase at Jio Institute, competing against regional engineering teams.",
    location: "Jio Institute, Navi Mumbai"
  },
  {
    id: "nextedge-conclave",
    title: "Second Prize — NextEdge National Conclave",
    award: "Second Prize",
    organizer: "NextEdge: Data Analytics & Cyber Security National Level Conclave",
    project: "Academia AI",
    year: "2025",
    details: "Awarded Second Prize in the Data Analytics competitive track for modeling academic performance trajectories and predictive learning interventions.",
    location: "Mumbai"
  },
  {
    id: "project-x",
    title: "First Position — Project X",
    award: "1st Place",
    organizer: "Burhani College",
    project: "Technical Innovation Showcase",
    year: "2025",
    details: "Secured top position for practical engineering prototype demonstration and technical architectural defense.",
    location: "Mumbai"
  },
  {
    id: "mumbaihacks",
    title: "Round 2 Finalist Selection",
    award: "Round 2 Selection",
    organizer: "MumbaiHacks 2025",
    project: "DeepCheck & System Prototypes",
    year: "2025",
    details: "Selected for Round 2 following competitive preliminary code review and concept evaluation at one of Mumbai's premier developer hackathons.",
    location: "Mumbai"
  },
  {
    id: "avishkar-convention",
    title: "Research Convention Presentation",
    award: "Official Selection & Defense",
    organizer: "20th Inter-College Avishkar Research Convention",
    project: "AFRR — Agro Fire Rescue Robot",
    year: "2025–26",
    details: "Presented inter-collegiate applied research on robotics-based agricultural fire detection and suppression architectures.",
    location: "Mumbai University Region"
  }
];

export const COMMUNITY_ACTIVITIES: CommunityItem[] = [
  {
    id: "genai-mumbai",
    title: "GenAI Hackathon Mumbai 2025",
    role: "Core Event Volunteer",
    organization: "GenAI Developer Community",
    location: "Mumbai",
    year: "2025",
    description: "Supported event operations, developer logistics, and participant evaluation tracks during a high-intensity generative AI build event.",
    keyPoints: [
      "Guided developer teams through technical evaluation criteria and track submissions.",
      "Coordinated with judges, mentors, and keynote speakers during judging rounds.",
      "Managed venue technical logistics, participant check-in, and photo documentation."
    ],
    type: "volunteer"
  },
  {
    id: "swift-mumbai",
    title: "Swift Mumbai Developer Community",
    role: "Active Member",
    organization: "Swift Mumbai",
    location: "Mumbai",
    year: "2024 – Present",
    description: "Participating in meetups and technical workshops covering Apple platform engineering, Swift language evolution, and cross-platform mobile paradigms.",
    type: "community"
  },
  {
    id: "swift-student-challenge",
    title: "Swift Student Challenge Ecosystem",
    role: "Student Volunteer & Participant",
    organization: "Atlas SkillTech University Ecosystem",
    location: "Mumbai",
    year: "2024",
    description: "Volunteered and engaged in student developer workshops fostering application ideas and playground submissions.",
    type: "volunteer"
  },
  {
    id: "tech-events",
    title: "Ecosystem Learning & Industry Meetups",
    role: "Active Participant",
    organization: "Industry Developer Conclaves",
    location: "Mumbai",
    year: "2024 – 2025",
    description: "Regular attendee at technical summits to study production architectures, testing methodologies, and developer platforms.",
    keyPoints: [
      "BrowserStack Developer Day Mumbai — Testing at scale, CI/CD observability, and device clouds",
      "BrowserStack Testathon — Hands-on exploratory testing and bug hunting sprints",
      "Zoho Creator Connect Mumbai — Low-code workflows and enterprise integration architectures",
      "Kong Mumbai Meetup — API gateway topologies, service mesh, and microservice traffic routing",
      "Build Beyond Screens — Exploring Swift, spatial computing, and AI integration frontiers"
    ],
    type: "event"
  }
];

export const CERTIFICATIONS: CertificateItem[] = [
  {
    id: "cert-hubspot",
    title: "Social Media Strategy Certification",
    issuer: "HubSpot Academy",
    completionDate: "Verified",
    credentialId: "Available on request / verified profile",
    status: "Completed",
    note: "Digital growth frameworks, community retention loops, and communication strategy."
  },
  {
    id: "cert-python",
    title: "Python Programming Foundation",
    issuer: "Visual Labs",
    completionDate: "Completed Course",
    credentialId: "Visual Labs Training Certificate",
    status: "Completed",
    note: "Core Python semantics, algorithmic problem-solving, data structures, and script engineering."
  },
  {
    id: "cert-security",
    title: "Ethical Hacking Fundamentals",
    issuer: "Authorized Course Provider",
    completionDate: "Completed Module",
    credentialId: "Security Training Record",
    status: "Completed",
    note: "Network vulnerability scanning, OWASP top 10 concepts, and basic penetration defense principles."
  }
];

export const LEARNING_JOURNEY = [
  {
    period: "Phase 1: Foundations",
    focus: "Programming Semantics & Web Mechanics",
    description: "Mastering Python, Java, JavaScript, and semantic HTML/CSS. Understanding control flow, data structures, and how HTTP client-server interactions work under the hood."
  },
  {
    period: "Phase 2: Backend & Enterprise Logic",
    focus: "Data Modeling, APIs & Relational Integrity",
    description: "Building enterprise CRUD applications with Java Servlets, JSP, and MySQL. Moving toward RESTful architectures, JSON contracts, and FastAPI microservices."
  },
  {
    period: "Phase 3: AI & Hardware Prototyping",
    focus: "Model Integration, IoT Sensors & Real-World Loops",
    description: "Connecting Gemini and OpenAI endpoints to real applications. Building Air Sense's intelligence layer and experimenting with ESP32 microcontrollers and acoustic sensors."
  },
  {
    period: "Phase 4: Current Focus",
    focus: "Cloud Systems, Resiliency & AI Orchestration",
    description: "Diving deep into multi-cloud disaster recovery patterns, AWS/OCI infrastructure, workflow automation with n8n, and end-to-end agentic architectures."
  }
];
