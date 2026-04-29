import { useMemo, useState } from "react";

const ICONS = {
  arrowRight: "→",
  barChart: "▥",
  book: "📘",
  briefcase: "▣",
  chevronRight: "›",
  download: "↓",
  file: "□",
  mail: "✉",
  menu: "☰",
  shield: "🛡",
  sparkles: "✦",
  target: "◎",
  users: "👥",
  x: "×",
};

const VIEWS = ["home", "projectDetail", "blog", "blogPost", "resume", "contact"];
const CONTACT_EMAIL = "keneishawiggan8@gmail.com";
const LINKEDIN_URL = "linkedin.com/in/keneisha-wiggan";
const RESUME_PDF_PATH = "/Keneisha_Wiggan_resume_top5_layout.pdf";
const HEADSHOT_PATH = "/kwiggan-headshot.jpg";

const projects = [
  {
    id: "ai-studio-homepage-docs",
    title: "Microsoft AI Studio Homepage, Documentation + Getting Started",
    label: "Microsoft AI Studio • GA 2024",
    category: "Learning Experience Design",
    summary:
      "Improved the Microsoft AI Studio homepage, documentation, tutorials, and getting-started guidance to help GenAI developers find resources and reach value faster.",
    skillTags: ["Learning experience design", "Documentation strategy", "User research", "Activation"],
    star: {
      situation:
        "Microsoft AI Studio had high monthly traffic, but many users struggled to discover getting-started materials, models, deployments, API keys, playgrounds, new features, and AI service capabilities.",
      task:
        "Redesign the homepage and learning guidance to improve discoverability, reduce onboarding confusion, and make key resources easier to access.",
      action:
        "Led design reviews and sprints, partnered with Azure OpenAI, AI Services, research, design, content, engineering, and product owners, updated documentation and tutorials, and surfaced key getting-started resources in one click.",
      result:
        "Launched the improved homepage and Learn tab at GA; 59.9% of homepage visitors used the getting-started Learn tab, showing that users could access and find value in the resource.",
    },
    recruiterWhy:
      "Strongest Chegg-aligned project: it shows learning strategy, adult learner support, content systems, activation, and measurable engagement.",
  },
  {
    id: "ai-studio-tutorials",
    title: "Microsoft AI Studio End-to-End Tutorials",
    label: "Microsoft AI Studio • Public Preview 2023",
    category: "Skill-Building + Scaffolding",
    summary:
      "Created scenario-based tutorials that taught AI developers how key GenAI tools work together in an end-to-end journey.",
    skillTags: ["Scaffolding", "Tutorial design", "Bug bash validation", "Content quality"],
    star: {
      situation:
        "AI developers found it difficult to understand how different tools and features interacted inside the new Microsoft AI Studio experience.",
      task:
        "Create tutorials that reduced confusion and helped new users learn the platform through a practical, guided journey.",
      action:
        "Created a copilot, participated in bug bashes, analyzed user studies, gathered feedback from documentation and feature PMs, and built step-by-step tutorials with images and deep links.",
      result:
        "Delivered tutorials validated through a 12-person bug bash, receiving positive feedback that the documentation was helpful and giving users a clearer end-to-end learning path.",
    },
    recruiterWhy:
      "Shows I can create structured learning paths, validate effectiveness, and help users build confidence with complex tools.",
  },
  {
    id: "workspace-landing-page",
    title: "Azure Machine Learning Workspace Landing Page + QuickStart",
    label: "Azure Machine Learning • Public Preview/GA",
    category: "New User Journey",
    summary:
      "Improved the Azure Machine Learning landing page and QuickStart experience so users could find resources, tutorials, and resume work faster.",
    skillTags: ["Golden path", "Competitive analysis", "Heuristic evaluation", "Learning resources"],
    star: {
      situation:
        "Azure Machine Learning users struggled to get started, find tutorials, locate the studio, and understand how to quickly ramp up on the machine learning lifecycle.",
      task:
        "Improve the getting-started golden path through landing page updates, sample tutorials, clearer entry points, and better learning resources.",
      action:
        "Applied user research, SWOT analysis, heuristic evaluation, competitor insights, documentation updates, a QuickStart tutorial, and a call-to-action strategy with marketing to reduce navigation friction.",
      result:
        "The public preview landing page reached 5,823 customer activations, and the getting-started sample attracted 14% of new users who activated the workspace landing page in the measured launch window.",
    },
    recruiterWhy:
      "Shows user research, learning design, growth strategy, and evidence-backed onboarding improvements.",
  },
  {
    id: "notification-center",
    title: "Microsoft AI Foundry Notification Center",
    label: "Microsoft AI Foundry • Ignite 2025 (Microsoft Developer Conference)",
    category: "Product Strategy + Engagement",
    summary:
      "Consolidated critical product, governance, agent, and model lifecycle alerts into a unified in-product notification hub.",
    skillTags: ["Product strategy", "Behavioral engagement", "Compliance visibility", "Cross-team alignment"],
    star: {
      situation:
        "Users had to navigate multiple Azure portals to locate policy and governance alerts, which delayed awareness and created friction for important product states.",
      task:
        "Lead the strategy, design, and delivery of a unified Notification Center for Microsoft AI Foundry in time for Ignite 2025 Public Preview.",
      action:
        "Conducted competitive analysis, partnered with App Workload and Alerts Management teams, prototyped the experience, aligned PM/design/engineering, and defined success metrics such as weekly active users, bell engagement, quick actions, and return usage.",
      result:
        "Launched the MVP with a notification bell and governance alert page, giving users one-click access to critical alerts and creating a foundation for multi-channel delivery and personalization.",
    },
    recruiterWhy:
      "Shows I can drive product engagement, reduce friction, and turn complex enterprise workflows into actionable user experiences.",
  },
  {
    id: "data-index",
    title: "Microsoft AI Foundry Data + Index Experience",
    label: "Microsoft AI Foundry • Ignite 2025",
    category: "Information Architecture",
    summary:
      "Led the lift-and-shift of Data and Index experiences into Microsoft AI Foundry, improving navigation, consistency, and discoverability.",
    skillTags: ["Information architecture", "Partner alignment", "Product storytelling", "Data onboarding"],
    star: {
      situation:
        "Data-related surfaces across Microsoft AI Foundry were fragmented across datasets, Azure OpenAI files, stored completions, synthetic data, indexes, and vector stores.",
      task:
        "Create a more cohesive data management experience for the Ignite 2025 release while aligning multiple partner teams.",
      action:
        "Identified UX gaps, authored user stories, facilitated design sessions, prototyped flows with AI tools, aligned PM/design/engineering, and drove product review for leadership approval.",
      result:
        "Delivered a unified Data, Index, and Knowledge page direction that improved discoverability, reduced navigation gaps, and clarified ownership across data-related experiences.",
    },
    recruiterWhy:
      "Shows I can structure complex product ecosystems into clearer user journeys and scalable systems.",
  },
  {
    id: "resource-creation",
    title: "Microsoft AI Foundry Resource Creation Redesign",
    label: "Azure Portal • Build 2025 (Microsoft Developer Conference)",
    category: "Onboarding + Enterprise Readiness",
    summary:
      "Redesigned Microsoft AI Foundry resource provisioning in Azure Portal to simplify first-time setup and reduce cognitive load.",
    skillTags: ["Onboarding", "AI prototyping", "Enterprise readiness", "User research"],
    star: {
      situation:
        "Creating a Microsoft AI Foundry setup required users to move through a 7–12 step, multi-resource flow across Azure AI Services, Hub, Key Vault, and Project setup.",
      task:
        "Simplify the setup experience for AI developers and IT admins while supporting enterprise defaults for identity, networking, and encryption.",
      action:
        "Used v0 and Microsoft Copilot to prototype due to limited design resourcing, validated concepts with IT admins and AI developers, and partnered with Azure Portal and Microsoft AI Foundry engineering teams.",
      result:
        "Reduced default project creation fields from 7 to 1 and consolidated setup into a single Microsoft AI Foundry Resource creation flow launched at Build 2025.",
    },
    recruiterWhy:
      "Shows I can reduce learning friction, design for first-run success, and use AI tools to move quickly.",
  },
  {
    id: "email-notifications",
    title: "Azure Machine Learning Email Notifications",
    label: "Azure Machine Learning • GA 2022",
    category: "Customer Feedback + Product Launch",
    summary:
      "Launched Email Notifications in Azure Machine Learning Studio by turning customer feedback into roadmap, UX, release, and measurement work.",
    skillTags: ["Customer interviews", "Roadmap", "Release readiness", "Metrics"],
    star: {
      situation:
        "Machine learning users needed instant feedback on important tasks and product events while carrying out the machine learning process.",
      task:
        "Define, validate, and launch an email notification experience from MVP through public preview and general availability.",
      action:
        "Gathered customer requirements, conducted competitive analysis, created mockups, validated with customers, authored the technical specification, partnered with UX and engineering, and completed privacy/security reviews.",
      result:
        "Delivered the notification feature through preview and GA readiness, improving user awareness, productivity, and confidence in important machine learning workflows.",
    },
    recruiterWhy:
      "Shows end-to-end product execution from research to release, with attention to compliance and performance metrics.",
  },
  {
    id: "billing-cost-management",
    title: "Microsoft AI Studio + Azure Machine Learning Billing and Cost Management",
    label: "Microsoft AI Studio + Azure Machine Learning • 2023",
    category: "Transparency + Decision Support",
    summary:
      "Designed billing and cost reporting experiences to help AI developers, machine learning professionals, and IT admins understand project and resource costs.",
    skillTags: ["Customer research", "Cost transparency", "Telemetry", "Documentation"],
    star: {
      situation:
        "Users struggled to understand project costs, identify cost-driving resources, and access cost information from the Azure Portal.",
      task:
        "Improve cost visibility so users could make better decisions and reduce confusion around AI and machine learning project costs.",
      action:
        "Reviewed feedback, tested product flows, created copilot scenarios, designed dashboard concepts, linked documentation and Azure Portal cost analysis, and hosted design sessions with UI engineering, Azure Portal cost analysis, UX, and PM partners.",
      result:
        "Delivered cost visibility improvements that helped users understand project and resource group costs, with telemetry planned to track billing page, documentation, and Azure Portal engagement.",
    },
    recruiterWhy:
      "Shows ability to turn learner/user confusion into decision support, product guidance, and measurable signals.",
  },
  {
    id: "vulnerability-dashboard",
    title: "Azure Machine Learning Vulnerability Dashboard",
    label: "Azure Machine Learning • Enterprise Risk",
    category: "Enterprise UX + Risk Visibility",
    summary:
      "Redesigned a vulnerability dashboard to help IT admins identify affected resources, understand severity, and take action.",
    skillTags: ["Enterprise UX", "Risk communication", "Customer validation", "Operational clarity"],
    star: {
      situation:
        "IT administrators had difficulty identifying and addressing vulnerabilities within Azure Machine Learning environments, contributing to repeated support cases.",
      task:
        "Improve visibility into vulnerabilities and help users understand which resources were affected and what actions to take.",
      action:
        "Revamped the dashboard with affected resource tables, severity categories, insights, and recommendations; led design reviews and co-led customer interviews to validate the experience.",
      result:
        "Improved enterprise-scale visibility and created a clearer action path, with an anticipated reduction in vulnerability-related customer support cases.",
    },
    recruiterWhy:
      "Shows I can make complex, high-stakes information understandable and actionable.",
  },
  {
    id: "keneisha-portfolio",
    title: "KeneishaWiggan.com Professional Portfolio",
    label: "Personal Project",
    category: "Personal Branding + Product Storytelling",
    summary:
      "Designed and built a professional portfolio website to showcase product strategy, case studies, and recruiter-ready storytelling.",
    skillTags: ["Personal branding", "Portfolio strategy", "AI-assisted development", "Product storytelling"],
    star: {
      situation:
        "Recruiters often struggle to quickly understand a candidate’s impact, thinking process, and alignment to roles from a traditional resume alone.",
      task:
        "Create a professional website that clearly communicates my experience, showcases projects using structured storytelling, and demonstrates how I think about product strategy and learning experiences.",
      action:
        "Designed the experience as a clickthrough product, structured projects into STAR-based case studies, used AI to generate layouts and content, built the site in Visual Studio Code, debugged errors, and managed versions through GitHub.",
      result:
        "Delivered a recruiter-friendly portfolio that turns my experience into a navigable product experience, improving clarity, differentiation, and storytelling beyond a traditional resume.",
    },
    recruiterWhy:
      "Shows I understand how to package experience for impact, think in systems, and build real, usable products—not just talk about them.",
  },
];

const blogPosts = [
  {
    id: "getting-started-learning-problem",
    title: "Getting Started Is a Learning Problem, Not Just a Product Problem",
    date: "Weekly Blog • Learning Strategy",
    category: "Learning + Onboarding",
    summary:
      "What Azure Machine Learning and Microsoft AI Studio taught me about reducing information overload and helping users build confidence faster.",
    intro:
      "One thing I have learned from working on Azure Machine Learning and Microsoft AI Studio is that getting started is not just a product problem. It is a learning problem.",
    paragraphs: [
      "When someone opens a complex product for the first time, they are not only asking, where do I click? They are also asking, what matters first, what can I ignore for now, and how do I know I am doing this correctly?",
      "I saw this when working on getting-started experiences, documentation, tutorials, and onboarding flows. Users did not always need more information. A lot of times, they needed a clearer path. They needed the product to reduce frustration, remove information overload, and respect that every person comes in with a different learning pattern and past experience.",
      "That is why I care so much about guided learning, contextual help, sample tutorials, and clear entry points. These are not just support materials. They are part of the product experience. They help users build confidence, understand the workflow, and take action without feeling like they have to figure everything out alone.",
      "My approach is simple: find where users slow down, listen to what they are confused about, define the learning gap, and then design the next step so it feels easier to move forward.",
    ],
    takeaway:
      "If a user is stuck, the answer is not always to add more content. Sometimes the answer is to sequence the experience better so the user can build confidence one step at a time.",
  },
  {
    id: "feedback-to-product-strategy",
    title: "How Customer Feedback Becomes Product Strategy",
    date: "Weekly Blog • Product Strategy",
    category: "Customer Feedback",
    summary:
      "A reflection on turning interviews, competitive research, mockups, and validation into product decisions that actually matter.",
    intro:
      "Customer feedback is powerful, but only if you know how to turn it into a clear product decision.",
    paragraphs: [
      "When I worked on Email Notifications in Azure Machine Learning Studio, I learned how important it is to stay anchored on the customer problem.",
      "The goal was not just to launch a feature. The goal was to help machine learning users receive important feedback about tasks they cared about during the machine learning process.",
      "One lesson I took from that work is that feedback can become noisy fast. Different customers may want different things. Stakeholders may have different opinions. The job of a product strategist is to find the pattern, define the problem clearly, prioritize the highest-impact needs, and translate that into a roadmap or specification the team can build against.",
      "This is also where measurement matters. When we know what outcome matters, it becomes easier to make better tradeoffs.",
    ],
    takeaway:
      "Good product strategy is not collecting every request. It is turning the right customer evidence into a focused problem, a clear decision, and a measurable outcome.",
  },
  {
    id: "hands-on-learning-product-thinking",
    title: "Hands-On Learning Changed How I Think About Product Experiences",
    date: "Weekly Blog • Growth Mindset",
    category: "Hands-On Learning",
    summary:
      "Why using the product end-to-end helped me understand users, ask better questions, and design stronger learning experiences.",
    intro:
      "Earlier in my product career, I realized that reading about a product is not the same as learning it hands-on.",
    paragraphs: [
      "When I was ramping up on Azure Machine Learning, I spent time using sample notebooks, tutorials, Jupyter notebooks, Git Bash, Anaconda, SDK, CLI, and the user interface.",
      "It also helped me build empathy. When you personally go through the steps, hit confusion, pause, reread documentation, and try again, you start to see where the experience needs more support.",
      "That changed how I think about learning product strategy. I do not want to design from a distance. I want to use the product, understand the user journey, listen to customers, review telemetry, and then create experiences that make the next step clearer.",
      "It also taught me that growth mindset is not just a nice phrase. It is part of how good product work happens. You learn, test, get feedback, adjust, and keep going until the experience becomes easier for the next person.",
    ],
    takeaway:
      "The best learning experiences often come from doing the work yourself first, then turning that friction into better guidance for the user.",
  },
];

function Icon({ name, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center font-bold leading-none ${className}`}
    >
      {ICONS[name] || "•"}
    </span>
  );
}

function runClickthroughTests() {
  const requiredIcons = [
    "arrowRight",
    "barChart",
    "book",
    "briefcase",
    "chevronRight",
    "download",
    "file",
    "mail",
    "menu",
    "shield",
    "sparkles",
    "target",
    "users",
    "x",
  ];
  const missingIcons = requiredIcons.filter((name) => !ICONS[name]);
  const missingViews = VIEWS.filter((view) => !view);

  return {
    validViewsPass: missingViews.length === 0,
    iconsPass: missingIcons.length === 0,
    contactInfoPass: CONTACT_EMAIL.includes("@") && LINKEDIN_URL.includes("linkedin.com/in/"),
    missingIcons,
    missingViews,
  };
}

export default function App() {
  const [view, setView] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState("ai-studio-homepage-docs");
  const [selectedBlogId, setSelectedBlogId] = useState("getting-started-learning-problem");
  const testResults = useMemo(() => runClickthroughTests(), []);

  const navItems = [
    ["About", "home", "about-section"],
    ["Learning Strategy", "home", "learning-strategy-section"],
    ["Projects", "home", "featured-work"],
    ["Blog", "blog", null],
    ["Resume", "resume", null],
    ["Contact", "contact", null],
  ];

  function goTo(target) {
    if (!VIEWS.includes(target)) return;
    setView(target);
    setMobileOpen(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openProject(projectId) {
    setSelectedProjectId(projectId);
    setView("projectDetail");
    setMobileOpen(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToSection(sectionId) {
    if (!sectionId) return;
    const scroll = () => {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (view !== "home") {
      setView("home");
      setMobileOpen(false);
      setTimeout(scroll, 80);
      return;
    }
    setMobileOpen(false);
    scroll();
  }

  function handleNavClick(target, sectionId) {
    if (sectionId) return scrollToSection(sectionId);
    goTo(target);
  }

  function Header() {
    return (
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <button
            type="button"
            onClick={() => goTo("home")}
            className="font-serif text-3xl font-black tracking-tight text-[#6C4EF6]"
          >
            KW
          </button>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
            {navItems.map(([label, target, sectionId]) => (
              <button
                key={label}
                type="button"
                onClick={() => handleNavClick(target, sectionId)}
                className="text-sm font-semibold text-slate-600 transition hover:text-[#6C4EF6]"
              >
                {label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goTo("resume")}
              className="inline-flex items-center gap-2 rounded-full bg-[#6C4EF6] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-[#5638D8]"
            >
              View Resume <Icon name="file" className="h-4 w-4" />
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="rounded-xl border border-slate-200 bg-white p-2 md:hidden"
            aria-label="Toggle mobile menu"
          >
            <Icon name={mobileOpen ? "x" : "menu"} className="h-5 w-5" />
          </button>
        </div>

        {mobileOpen && (
          <nav className="border-t border-slate-200 bg-white px-6 py-4 md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              {navItems.map(([label, target, sectionId]) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleNavClick(target, sectionId)}
                  className="text-left text-sm font-bold text-slate-700"
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>
    );
  }

  function Footer() {
    return (
      <footer className="bg-[#0B1D3A] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div>
            <h2 className="font-serif text-3xl font-bold">Let&apos;s build better experiences</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/75">
              I&apos;m passionate about helping teams deliver learning products that build confidence, support skill mastery, and create measurable outcomes.
            </p>
          </div>
          <div className="space-y-3 text-sm text-white/80 lg:justify-self-end">
            <p className="flex items-center gap-3">
              <Icon name="mail" className="h-4 w-4" /> {CONTACT_EMAIL}
            </p>
            <p className="flex items-center gap-3">
              <span className="grid h-4 w-4 place-items-center rounded bg-sky-500 text-[10px] font-black">in</span>
              {LINKEDIN_URL}
            </p>
          </div>
        </div>
        <p className="border-t border-white/10 py-5 text-center text-xs text-white/55">
          © 2026 Keneisha Wiggan. All rights reserved.
        </p>
      </footer>
    );
  }

  function TestStatus() {
    if (testResults.validViewsPass && testResults.iconsPass && testResults.contactInfoPass) return null;
    return (
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-3 text-sm text-amber-900">
        Test warning: check views, icons, or contact info.
      </div>
    );
  }

  function Shell({ children }) {
    return (
      <div className="min-h-screen bg-[#FBFAFF] text-[#0B1D3A]">
        <Header />
        <TestStatus />
        {children}
        <Footer />
      </div>
    );
  }

  function SectionHeading({ title, body }) {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl font-black tracking-tight">{title}</h2>
        <p className="mt-3 text-slate-600">{body}</p>
      </div>
    );
  }

  function IconCard({ icon, title, body }) {
    return (
      <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[#EDE9FF] font-black text-[#6C4EF6]">
          {icon}
        </div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
      </div>
    );
  }

  function CapabilityCard({ iconName, title, body }) {
    return (
      <div className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm">
        <div className="mb-5 inline-flex rounded-full bg-[#EDE9FF] p-3 text-[#6C4EF6]">
          <Icon name={iconName} className="h-5 w-5" />
        </div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
      </div>
    );
  }

  function ProjectDetailPage() {
    const project = projects.find((item) => item.id === selectedProjectId) || projects[0];
    const starRows = [
      ["Situation", project.star.situation],
      ["Task", project.star.task],
      ["Action", project.star.action],
      ["Result", project.star.result],
    ];

    return (
      <Shell>
        <section className="bg-gradient-to-br from-white via-[#FBFAFF] to-[#EEF5FF]">
          <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500">
              <button type="button" onClick={() => scrollToSection("featured-work")} className="text-[#6C4EF6] hover:underline">
                Projects
              </button>
              <Icon name="chevronRight" className="h-4 w-4" />
              <span>{project.label}</span>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_80px_-30px_rgba(15,31,61,0.28)] md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EDE9FF] px-4 py-2 text-sm font-bold text-[#6C4EF6]">
                <Icon name={project.id === "keneisha-portfolio" ? "sparkles" : "briefcase"} className="h-4 w-4" />
                {project.category}
              </div>
              <h1 className="mt-6 max-w-4xl font-serif text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{project.summary}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.skillTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#F8F6FF] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#6C4EF6]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => scrollToSection("featured-work")}
                  className="rounded-2xl border border-indigo-200 bg-white px-6 py-3 text-sm font-bold text-[#6C4EF6] shadow-sm transition hover:-translate-y-0.5"
                >
                  ← Back to Projects
                </button>
                <button
                  type="button"
                  onClick={() => goTo("contact")}
                  className="rounded-2xl bg-[#6C4EF6] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6C4EF6]">STAR case study</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">A simple recruiter-friendly story of the project.</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {starRows.map(([label, body]) => (
                <div key={label} className="rounded-2xl bg-[#F8F6FF] p-5">
                  <h3 className="font-bold text-[#0B1D3A]">{label}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-indigo-100 bg-gradient-to-r from-[#EDE9FF] via-white to-[#E6F0FF] p-7">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6C4EF6]">
              Why you as a recruiter should care
            </p>
            <h2 className="mt-3 font-serif text-2xl font-bold">{project.recruiterWhy}</h2>
          </div>
        </section>
      </Shell>
    );
  }

  function BlogPage() {
    return (
      <Shell>
        <section className="bg-gradient-to-br from-white via-[#FBFAFF] to-[#EEF5FF]">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_80px_-30px_rgba(15,31,61,0.28)] md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EDE9FF] px-4 py-2 text-sm font-bold text-[#6C4EF6]">
                <Icon name="book" className="h-4 w-4" /> Weekly blog
              </div>
              <h1 className="mt-6 max-w-4xl font-serif text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                Writing from the way I actually work
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                These posts are based on what I have learned from onboarding, documentation, customer feedback, product launches, and hands-on work in Azure Machine Learning and Microsoft AI Studio.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => {
                  setSelectedBlogId(post.id);
                  goTo("blogPost");
                }}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6C4EF6]">{post.category}</p>
                <h3 className="mt-3 text-xl font-black leading-7">{post.title}</h3>
                <p className="mt-2 text-xs font-semibold text-slate-400">{post.date}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{post.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#6C4EF6]">
                  Read Post <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </button>
            ))}
          </div>
        </section>
      </Shell>
    );
  }

  function BlogPostPage() {
    const post = blogPosts.find((item) => item.id === selectedBlogId) || blogPosts[0];
    return (
      <Shell>
        <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <button
            type="button"
            onClick={() => goTo("blog")}
            className="mb-8 rounded-2xl border border-indigo-200 bg-white px-5 py-3 text-sm font-bold text-[#6C4EF6]"
          >
            ← Back to Blog
          </button>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_80px_-30px_rgba(15,31,61,0.28)] md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6C4EF6]">{post.category}</p>
            <h1 className="mt-4 font-serif text-4xl font-black leading-tight tracking-tight">{post.title}</h1>
            <p className="mt-3 text-sm font-semibold text-slate-400">{post.date}</p>
            <div className="mt-8 space-y-6 text-base leading-8 text-slate-700">
              <p className="text-lg font-semibold leading-8 text-[#0B1D3A]">{post.intro}</p>
              {post.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="rounded-[1.5rem] bg-[#F8F6FF] p-6">
                <h2 className="font-serif text-2xl font-bold text-[#0B1D3A]">Practical takeaway</h2>
                <p className="mt-3 text-sm leading-7">{post.takeaway}</p>
              </div>
            </div>
          </div>
        </article>
      </Shell>
    );
  }

  function ResumePage() {
    const resumeCards = [
      ["Learning Experience Design", "Designed onboarding, tutorials, documentation navigation, contextual help, and guided learning experiences."],
      ["Learning Product Strategy", "Translated learner/user needs, research, and product data into roadmap decisions and measurable improvements."],
      ["Behavioral Engagement", "Designed experiences that reduce friction, build momentum, and help users continue toward meaningful actions."],
      ["Cross-Functional Delivery", "Partnered across engineering, design, documentation, customer support, and stakeholders."],
    ];

    return (
      <Shell>
        <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_80px_-30px_rgba(15,31,61,0.35)]">
            <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6C4EF6]">Resume Preview</p>
                <h1 className="mt-3 font-serif text-5xl font-black tracking-tight">Keneisha Wiggan</h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
                  Learning product strategist and program manager with experience designing learning and onboarding experiences that help users build confidence, master skills, and reach measurable outcomes.
                </p>
              </div>
              <a
                href={RESUME_PDF_PATH}
                download
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#6C4EF6] px-6 py-3 text-sm font-bold text-white shadow-lg"
              >
                Download PDF <Icon name="download" className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {resumeCards.map(([title, body]) => (
                <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-[#FBFAFF] p-6">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Shell>
    );
  }

  function ContactPage() {
    return (
      <Shell>
        <section className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-[0_25px_80px_-30px_rgba(15,31,61,0.35)]">
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-[#EDE9FF] text-[#6C4EF6]">
              <Icon name="mail" className="h-7 w-7" />
            </div>
            <h1 className="font-serif text-4xl font-black tracking-tight">Contact</h1>
            <div className="mt-8 space-y-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="block rounded-2xl bg-[#6C4EF6] px-6 py-4 text-sm font-bold text-white shadow-lg">
                {CONTACT_EMAIL}
              </a>
              <a
                href={`https://${LINKEDIN_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-indigo-200 bg-white px-6 py-4 text-sm font-bold text-[#6C4EF6]"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </section>
      </Shell>
    );
  }

  function HomePage() {
    const stats = [
      ["5+", "Years Experience", "Leading programs and driving impact across AI and learning product experiences."],
      ["▦", "Microsoft AI Products", "Microsoft AI Foundry, Microsoft AI Studio, and Azure Machine Learning Studio."],
      ["👥", "Learning + Onboarding", "Helping users build confidence, understand workflows, and reach first value."],
      ["☷", "Cross-Functional Leadership", "Partnering across product, engineering, design, and documentation."],
    ];

    const capabilities = [
      ["book", "Learning Model Translation", "I translate complex workflows into clear learning journeys, tutorials, guidance, and skill-building experiences."],
      ["users", "Behavioral Engagement", "I design experiences that reduce friction, build momentum, and help users continue toward meaningful actions."],
      ["target", "Learning Product Strategy", "I connect learner needs, business goals, research, and product strategy to shape scalable experiences."],
      ["barChart", "Measurement & Outcomes", "I define success signals that show whether users are discovering, understanding, adopting, and applying the product."],
    ];

    const strengths = [
      ["briefcase", "Program Manager", "Strategic • Organized • Results-driven"],
      ["sparkles", "AI Product Strategist", "Microsoft AI Foundry, Microsoft AI Studio, and Azure Machine Learning Studio"],
      ["book", "Learning Product Strategist", "Designing for confidence, skill mastery, engagement, and outcomes"],
      ["users", "People-Centered", "Empowering users. Driving adoption. Delivering impact."],
    ];

    const featuredWork = [
      ...projects.filter((p) => ["ai-studio-homepage-docs", "ai-studio-tutorials", "workspace-landing-page"].includes(p.id)),
      ...projects.filter((p) => !["ai-studio-homepage-docs", "ai-studio-tutorials", "workspace-landing-page"].includes(p.id)),
    ];

    const blogTopics = [
      "Designing learning experiences that build confidence",
      "Using AI to prototype learning products",
      "Measuring skill progression and adoption",
      "Turning career experience into professional stories",
    ];

    return (
      <Shell>
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FBFAFF] to-[#F8FBFF]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-20">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-bold text-[#6C4EF6] shadow-sm">
                <Icon name="sparkles" className="h-4 w-4" />
                Product Strategy • Behavioral Engagement • Onboarding & Skill-Building Experiences
              </div>
              <h1 className="max-w-3xl font-serif text-6xl font-black leading-[1.02] tracking-tight sm:text-7xl">
                Keneisha Wiggan
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                I design product and experiences that help users build confidence, master skills, and reach measurable outcomes. I blend learning strategy, product thinking, behavioral engagement, and AI product experience to create scalable user journeys.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => scrollToSection("featured-work")}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#6C4EF6] px-6 py-4 text-base font-black text-white shadow-xl shadow-indigo-200 transition hover:scale-[1.01]"
                >
                  Explore My Work <Icon name="arrowRight" className="h-4 w-4" />
                </button>
                <a
                  href={RESUME_PDF_PATH}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-200 bg-white px-6 py-4 text-base font-black text-[#6C4EF6] shadow-sm transition hover:bg-slate-50"
                >
                  Download Resume <Icon name="download" className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_30px_90px_-30px_rgba(15,31,61,0.35)]">
              <div className="grid gap-5 lg:grid-cols-[0.9fr_1fr]">
                <div className="flex min-h-[340px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#DCCFFF] to-[#E6F0FF] p-6">
                  <img
                    src={HEADSHOT_PATH}
                    alt="Keneisha Wiggan professional headshot"
                    className="h-64 w-64 rounded-full border-8 border-white/80 object-cover object-top shadow-xl"
                  />
                </div>
                <div className="grid gap-4">
                  {strengths.map(([iconName, title, body]) => (
                    <div key={title} className="flex gap-3 rounded-2xl p-2">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#EDE9FF] text-[#6C4EF6]">
                        <Icon name={iconName} className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold">{title}</h3>
                        <p className="text-sm leading-6 text-slate-600">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl gap-5 px-6 pb-12 md:grid-cols-4 lg:px-8">
            {stats.map(([icon, title, body]) => (
              <IconCard key={title} icon={icon} title={title} body={body} />
            ))}
          </div>
        </section>

        <section id="learning-strategy-section" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-16 lg:px-8">
          <SectionHeading
            title="What I Bring"
            body="A recruiter-friendly snapshot of how I approach learning product strategy, behavioral engagement, and measurable user outcomes."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {capabilities.map(([iconName, title, body]) => (
              <CapabilityCard key={title} iconName={iconName} title={title} body={body} />
            ))}
          </div>
        </section>

        <section id="featured-work" className="scroll-mt-28 bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading title="Featured Work" body="Click a card to open a project page and see the portfolio clickthrough experience." />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featuredWork.map(({ id, title, summary, category, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => openProject(id)}
                  className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-44 bg-gradient-to-br from-[#6C4EF6] via-[#DCCFFF] to-[#E6F0FF] p-6">
                    <div className="flex h-full items-center justify-center rounded-2xl bg-white/75 text-center shadow-sm">
                      <span className="rounded-full bg-[#F8F6FF] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#6C4EF6]">
                        {label}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#6C4EF6]">{category}</p>
                    <h3 className="mt-2 text-xl font-black">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#6C4EF6]">
                      View Project <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="about-section" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-16 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6C4EF6]">Weekly Blog</p>
              <h2 className="mt-3 font-serif text-4xl font-black tracking-tight">Thoughts on learning, AI, and product strategy</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A place to publish weekly posts that show how I think about adult learning, behavioral engagement, skill-building, and measurable learning outcomes.
              </p>
              <button
                type="button"
                onClick={() => goTo("blog")}
                className="mt-6 rounded-2xl bg-[#6C4EF6] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5"
              >
                Visit Blog
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {blogTopics.map((topic) => (
                <div key={topic} className="rounded-2xl bg-[#F8F6FF] p-5 text-sm font-semibold leading-6 text-slate-700">
                  ✓ {topic}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Shell>
    );
  }

  if (view === "projectDetail") return <ProjectDetailPage />;
  if (view === "blog") return <BlogPage />;
  if (view === "blogPost") return <BlogPostPage />;
  if (view === "resume") return <ResumePage />;
  if (view === "contact") return <ContactPage />;
  return <HomePage />;
}
