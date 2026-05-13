import React, { useState } from "react";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    title: "Recruiter Portfolio Website",
    description:
      "A guided portfolio that turns complex product work into clear recruiter-facing stories, case studies, and proof of impact.",
    impact: "Improves clarity, scanability, and recruiter review speed.",
    skills: ["UX Strategy", "Career Storytelling", "React", "Portfolio Design"],
    document: "Recruiter-Portfolio-Case-Study.pdf",
  },
  {
    title: "Achievement Storytelling Kit",
    description:
      "A framework that helps professionals translate their wins into resume bullets, interview stories, and promotion-ready language.",
    impact: "Helps users communicate measurable value with confidence.",
    skills: ["Product Thinking", "Writing Systems", "Content Strategy", "Coaching"],
    document: "Achievement-Storytelling-Kit.pdf",
  },
  {
    title: "AI Prompt Tutorial Concepts",
    description:
      "Simple AI learning experiences that teach non-technical users how to use AI tools for writing, planning, and career growth.",
    impact: "Makes AI more practical, approachable, and outcome-driven.",
    skills: ["AI Education", "Prompt Design", "Learning Design", "User Enablement"],
    document: "AI-Prompt-Tutorial-Concepts.pdf",
  },
];

const workExperiences = [
  {
    title: "Microsoft AI Studio Homepage + Onboarding",
    description:
      "Helped improve the first-time user experience by clarifying onboarding paths, strengthening documentation connections, and reducing product confusion.",
    impact: "Focused on helping users understand where to start and how to move forward with confidence.",
    skills: ["Product Strategy", "Onboarding", "Docs Strategy", "Cross-functional Collaboration"],
    document: "AI-Studio-Onboarding-Project.pdf",
  },
  {
    title: "AI Foundry Notification Center",
    description:
      "Led product planning for a centralized notification experience that helps users understand important product states and take action faster.",
    impact: "Improves visibility, operational awareness, and user actionability inside the product.",
    skills: ["Product Management", "Launch Planning", "Telemetry", "User Experience"],
    document: "AI-Foundry-Notification-Center.pdf",
  },
  {
    title: "Scenario-Based Skill-Building Workshops",
    description:
      "Designed hands-on workshops that helped teams validate docs, identify product friction, and improve learning materials while the experience was fresh.",
    impact: "Created a repeatable feedback loop between product usage, documentation, and user learning.",
    skills: ["Workshop Design", "Learning Experience", "Research Synthesis", "Documentation"],
    document: "Scenario-Based-Workshop-Strategy.pdf",
  },
];

const featuredSections = [
  {
    title: "Personal Portfolio",
    description:
      "A recruiter-facing collection of personal projects, business ideas, writing systems, and AI learning concepts.",
    tag: "Portfolio Projects",
    route: "personal-portfolio",
  },
  {
    title: "Relevant Work Experiences",
    description:
      "Selected product and program management work across AI onboarding, documentation strategy, customer feedback, and launch readiness.",
    tag: "Professional Experience",
    route: "work-experience",
  },
];

const blogs = [
  "How I Think About Product Onboarding",
  "Turning Career Wins into Strong Stories",
  "What AI Product Work Taught Me About Clarity",
];

const navItems = ["home", "projects", "blogs", "resume", "contact"];
const HERO_IMAGE = "/hero-graduation.png";
const RESUME_FILE = "/Keneisha_Wiggan_Resume.pdf";

function Icon({ name, size = 18, className = "" }) {
  const icons = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    download: (
      <>
        <path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
    pen: (
      <>
        <path d="M4 20l4-1 11-11a2.8 2.8 0 0 0-4-4L4 15l-1 4a1 1 0 0 0 1 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M13 5l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
      {icons[name] || icons.arrow}
    </svg>
  );
}



export default function App() {
  const [page, setPage] = useState("home");
  

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#172033]">
      <header className="sticky top-0 z-50 border-b border-[#D9CBB4] bg-[#F8F5EF]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <button onClick={() => setPage("home")} className="rounded-xl text-left focus:outline-none focus:ring-4 focus:ring-[#C9974A]/40">
            <p className="text-sm uppercase tracking-[0.25em] text-[#5C6472]">Portfolio</p>
            <h1 className="text-lg font-semibold text-[#172033]">Keneisha Wiggan</h1>
          </button>

          <nav className="flex w-full overflow-hidden rounded-2xl border border-[#D9CBB4] bg-white shadow-sm md:w-auto">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setPage(item)}
                className={`flex-1 border-r border-[#E8DDCA] px-3 py-3 text-sm font-semibold capitalize last:border-r-0 hover:bg-[#F1E7D7] focus:outline-none focus:ring-4 focus:ring-[#C9974A]/40 md:flex-none md:px-4 ${
                  page === item ? "bg-[#18324A] text-white hover:bg-[#18324A]" : "text-[#172033]"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10">
        {page === "home" && <Home setPage={setPage} />}
        {page === "projects" && <Projects setPage={setPage} />}
        {page === "personal-portfolio" && (
          <DetailCollection
            eyebrow="Personal Portfolio"
            title="Portfolio projects"
            intro="These projects highlight how I organize initiatives, improve processes, coordinate cross-functional work, and deliver solutions that improve clarity, execution, and user experience."
            items={portfolioProjects}
            back={() => setPage("projects")}
          />
        )}
        {page === "work-experience" && (
          <DetailCollection
            eyebrow="Relevant Work Experience"
            title="Professional experience highlights"
            intro="These examples show the product, program, AI onboarding, and learning experience work that recruiters can quickly review."
            items={workExperiences}
            back={() => setPage("projects")}
          />
        )}
        {page === "blogs" && <Blogs />}
        {page === "resume" && <Resume />}
        {page === "contact" && <Contact />}
      </main>
    </div>
  );
}

function Home({ setPage }) {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 py-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div>
            <h2 className="text-5xl font-bold tracking-tight text-[#172033] md:text-6xl">Keneisha Wiggan</h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-[#3E4858]">
            I help teams organize projects, improve processes, coordinate cross-functional work, and deliver meaningful outcomes through strong communication, planning, and execution.
          </p>

          <div className="flex flex-wrap gap-3">
           
            <a
  href={RESUME_FILE}
  download
  className="flex items-center gap-2 rounded-2xl border border-[#B88A44] bg-white px-5 py-3 font-semibold text-[#172033] shadow-sm hover:bg-[#F1E7D7] focus:outline-none focus:ring-4 focus:ring-[#C9974A]/40"
>
  Download resume <Icon name="download" />
</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="relative">
          <div className="mx-auto aspect-[4/5] max-w-md rounded-[2rem] border border-[#D9CBB4] bg-white p-3 shadow-xl">
            <div className="h-full overflow-hidden rounded-[1.5rem] bg-[#E9E2D4]">
              <img
                src={HERO_IMAGE}
                alt="Keneisha Wiggan graduation portrait"
className="h-full w-full object-cover object-top"              />
            </div>
          </div>
        </motion.div>
      </section>

      <FeaturedWork setPage={setPage} />

      <section className="rounded-[2rem] border border-[#D9CBB4] bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3 text-[#18324A]">
          <Icon name="pen" size={24} />
          <h3 className="text-3xl font-bold text-[#172033]">Blogs</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog} className="rounded-3xl border border-[#E8DDCA] bg-[#F8F5EF] p-5">
              <p className="text-sm font-semibold text-[#7C4A18]">Coming soon</p>
              <h4 className="mt-2 font-semibold text-[#172033]">{blog}</h4>
            </article>
          ))}
        </div>

       <a
  href={RESUME_FILE}
  download
  className="mt-6 flex w-fit items-center gap-2 rounded-2xl bg-[#18324A] px-5 py-3 font-semibold text-white hover:bg-[#0F2538] focus:outline-none focus:ring-4 focus:ring-[#C9974A]/50"
>
  Download resume <Icon name="download" />
</a> 
      </section>
    </div>
  );
}

function FeaturedWork({ setPage }) {
  return (
    <section className="rounded-[2rem] border border-[#D9CBB4] bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="mt-2 text-3xl font-bold text-[#172033]">Portfolio highlights</h3>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {featuredSections.map((project) => (
          <button
            key={project.title}
            onClick={() => setPage(project.route)}
            className="group rounded-3xl border border-[#D9CBB4] bg-[#F8F5EF] p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#B88A44] hover:bg-[#F1E7D7] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#C9974A]/40"
          >
            <p className="mb-4 inline-flex rounded-full bg-[#18324A] px-3 py-1 text-sm font-semibold text-white shadow-sm">
              {project.tag}
            </p>
            <h4 className="text-2xl font-bold text-[#172033]">{project.title}</h4>
            <p className="mt-3 leading-7 text-[#3E4858]">{project.description}</p>
            <span className="mt-5 flex items-center gap-2 font-bold text-[#7C4A18]">
              View details <Icon name="external" size={16} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function Projects({ setPage }) {
  return (
    <PageShell eyebrow="Projects" title="Explore my work">
      <FeaturedWork setPage={setPage} />
    </PageShell>
  );
}

function DetailCollection({ eyebrow, title, intro, items, back }) {
  return (
    <PageShell eyebrow={eyebrow} title={title}>
      <div className="rounded-[2rem] border border-[#D9CBB4] bg-white p-6 shadow-sm">
        <button
          onClick={back}
          className="mb-6 flex items-center gap-2 rounded-2xl border border-[#B88A44] bg-white px-4 py-2 font-semibold text-[#172033] hover:bg-[#F1E7D7] focus:outline-none focus:ring-4 focus:ring-[#C9974A]/40"
        >
          ← Back to projects
        </button>
        <p className="max-w-3xl text-lg leading-8 text-[#3E4858]">{intro}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-3xl border border-[#D9CBB4] bg-white p-6 shadow-sm">
            <Icon name="briefcase" size={26} className="mb-4 text-[#18324A]" />
            <h3 className="text-2xl font-bold text-[#172033]">{item.title}</h3>
            <p className="mt-3 leading-7 text-[#3E4858]">{item.description}</p>
            <div className="mt-5 rounded-2xl bg-[#F1E7D7] p-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7C4A18]">Impact</p>
              <p className="mt-2 text-[#172033]">{item.impact}</p>
            </div>
            <div className="mt-5 rounded-2xl border border-[#D9CBB4] bg-[#F8F5EF] p-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7C4A18]">Attached walkthrough</p>
              <button className="mt-3 flex items-center gap-2 rounded-xl bg-[#18324A] px-4 py-2 font-semibold text-white hover:bg-[#0F2538] focus:outline-none focus:ring-4 focus:ring-[#C9974A]/50">
                View {item.document} <Icon name="external" size={16} />
              </button>
            </div>

            
          </article>
        ))}
      </div>
    </PageShell>
  );
}

function Blogs() {
  return (
    <PageShell eyebrow="Blogs" title="Writing and reflections">
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog} className="rounded-3xl border border-[#D9CBB4] bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7C4A18]">Coming soon</p>
            <h3 className="mt-2 text-2xl font-bold text-[#172033]">{blog}</h3>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function Resume() {
  return (
    <PageShell eyebrow="Resume" title="Download resume">
      <div className="rounded-3xl border border-[#D9CBB4] bg-white p-8 shadow-sm">
        <p className="max-w-2xl leading-7 text-[#3E4858]">
          This page is where your downloadable resume will live. In the real website, this button should connect to the resume PDF in your public folder.
        </p>
        <button className="mt-6 flex items-center gap-2 rounded-2xl bg-[#18324A] px-5 py-3 font-semibold text-white hover:bg-[#0F2538] focus:outline-none focus:ring-4 focus:ring-[#C9974A]/50">
          Download resume <Icon name="download" />
        </button>
      </div>
    </PageShell>
  );
}

function Contact() {
  return (
    <PageShell eyebrow="Contact" title="Let’s connect">
      <div className="rounded-3xl border border-[#D9CBB4] bg-white p-8 shadow-sm">
        <Icon name="mail" size={28} className="mb-4 text-[#18324A]" />

        <div className="mt-8 space-y-5">
          <div className="rounded-2xl border border-[#D9CBB4] bg-[#F8F5EF] p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7C4A18]">Email</p>
            <a
              href="mailto:Keneishawiggan8@gmail.com"
              className="mt-2 inline-flex items-center gap-2 rounded-lg text-lg font-semibold text-[#18324A] underline-offset-4 hover:underline focus:outline-none focus:ring-4 focus:ring-[#C9974A]/40"
            >
              Keneishawiggan8@gmail.com
            </a>
          </div>

          <div className="rounded-2xl border border-[#D9CBB4] bg-[#F8F5EF] p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7C4A18]">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/keneisha-wiggan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-lg text-lg font-semibold text-[#18324A] underline-offset-4 hover:underline focus:outline-none focus:ring-4 focus:ring-[#C9974A]/40"
            >
              linkedin.com/in/keneisha-wiggan
              <Icon name="external" size={18} />
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function PageShell({ eyebrow, title, children }) {
  return (
    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7C4A18]">{eyebrow}</p>
        <h2 className="mt-2 text-5xl font-bold tracking-tight text-[#172033]">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}


