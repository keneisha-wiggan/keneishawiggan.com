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
      "A collection of personal projects I completed while applying the product management lifecycle.",
    tag: "Portfolio Projects",
    route: "personal-portfolio",
  },
  {
  title: "Industry Work Experiences",
  description:
    "A summary of my relevant product management experience, including five years at Microsoft.",
  tag: "Professional Experience",
  route: "work-experience",
},
];

const blogs = [
  "How I Think About Product Onboarding",
  "Turning Career Wins into Strong Stories",
  "What AI Product Work Taught Me About Clarity",
];

const brandBadges = [
  "AI Product Strategy",
  "Career Storytelling",
  "Onboarding & User Clarity",
];

const proofPoints = [
  {
    number: "01",
    title: "Conceive",
    description:
      "Drive results by identifying real user problems and brainstorming impactful solutions that align with business goals.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Use market research and customer interviews to validate ideas and create a clear, prioritized roadmap that guides development.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Collaborate closely with development teams to define detailed features, user stories, and timelines, ensuring requirements are clear and achievable.",
  },
  {
    number: "04",
    title: "Iterate",
    description:
      "Launch early versions, gather user feedback quickly, test assumptions, and refine the product to meet user needs and improve outcomes.",
  },
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
    sparkle: (
      <>
        <path d="M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8L12 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
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
    <div className="min-h-screen bg-[#FFF7ED] text-[#18181B]">
      <header className="sticky top-0 z-50 border-b border-[#E9D5FF] bg-[#FFF7ED]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <button onClick={() => setPage("home")} className="rounded-xl text-left focus:outline-none focus:ring-4 focus:ring-[#F97360]/30">
<h1 className="text-3xl font-black text-[#2E1065]">Keneisha Wiggan, MBA</h1>          </button>

          <nav className="flex w-full overflow-hidden rounded-2xl border border-[#E9D5FF] bg-white/80 shadow-sm md:w-auto">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setPage(item)}
                className={`flex-1 border-r border-[#E9D5FF] px-3 py-3 text-sm font-bold capitalize last:border-r-0 hover:bg-[#F3E8FF] focus:outline-none focus:ring-4 focus:ring-[#F97360]/30 md:flex-none md:px-4 ${
                  page === item ? "bg-[#2E1065] text-white hover:bg-[#2E1065]" : "text-[#2E1065]"
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
            title="Projects that show how I think, build, and communicate"
            intro="These projects highlight how I organize ideas, improve clarity, build practical systems, and translate complex work into stories that are easy for recruiters, teams, and users to understand."
            items={portfolioProjects}
            back={() => setPage("projects")}
          />
        )}
        {page === "work-experience" && (
          <DetailCollection
            eyebrow="Relevant Work Experience"
            title="Work that connects product strategy, execution, and user clarity"
            intro="These examples show the product, program, AI onboarding, documentation strategy, and learning experience work that recruiters can quickly review."
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
      <section className="relative overflow-hidden rounded-[2.5rem] border border-[#E9D5FF] bg-gradient-to-br from-[#FFF7ED] via-[#F3E8FF] to-[#FFE4DE] p-6 shadow-sm md:p-10">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F97360]/25 blur-3xl" />
        <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-[#7C3AED]/20 blur-3xl" />

        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">


            <div>
             <h2 className="max-w-3xl text-5xl font-black tracking-tight text-[#2E1065] md:text-6xl">
  Product Manager
</h2>
            </div>

         <p className="max-w-xl text-lg leading-8 text-[#3F3F46]">
  I answer the <strong className="font-bold text-[#2F1065]">why</strong>,{" "}
  <strong className="font-bold text-[#2F1065]">what</strong>, and{" "}
  <strong className="font-bold text-[#2F1065]">who</strong> behind the products we build. Using the power of AI, I prototype solutions, apply effective market research to build confidence in the product direction, and use clear communication and cross-functional collaboration to take products from idea to launch.
</p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setPage("projects")}
                className="flex items-center gap-2 rounded-2xl bg-[#2E1065] px-5 py-3 font-bold text-white shadow-lg shadow-[#2E1065]/20 transition hover:-translate-y-0.5 hover:bg-[#4C1D95] focus:outline-none focus:ring-4 focus:ring-[#F97360]/40"
              >
                Explore my work <Icon name="arrow" />
              </button>

              <a
                href={RESUME_FILE}
                download
                className="flex items-center gap-2 rounded-2xl border border-[#F97360] bg-white px-5 py-3 font-bold text-[#2E1065] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FFF1ED] focus:outline-none focus:ring-4 focus:ring-[#F97360]/30"
              >
                Download resume <Icon name="download" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="absolute -left-4 top-8 z-0 h-24 w-24 rounded-full bg-[#F97360]/30 blur-xl" />
            <div className="absolute -right-4 bottom-8 z-0 h-28 w-28 rounded-full bg-[#7C3AED]/25 blur-xl" />

            <div className="relative mx-auto aspect-[4/5] max-w-md rounded-[2rem] border border-white/70 bg-white/80 p-3 shadow-2xl shadow-[#2E1065]/20">
              <div className="h-full overflow-hidden rounded-[1.5rem] bg-[#F3E8FF]">
                <img
                  src={HERO_IMAGE}
                  alt="Keneisha Wiggan graduation portrait"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

           
          </motion.div>
        </div>
      </section>

      <ProofStrip />

      <FeaturedWork setPage={setPage} />

      <section className="rounded-[2.5rem] border border-[#E9D5FF] bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3 text-[#F97360]">
          <Icon name="pen" size={24} />
          <div>
<h3 className="text-3xl font-black text-[#2E1065]">Blog</h3>          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog} className="rounded-3xl border border-[#E9D5FF] bg-[#FFF7ED] p-5 transition hover:-translate-y-1 hover:bg-[#F3E8FF]">
              <p className="text-sm font-bold text-[#F97360]">Coming soon</p>
              <h4 className="mt-2 font-black text-[#2E1065]">{blog}</h4>
            </article>
          ))}
        </div>

       <a
  href="https://blog.keneishawiggan.com"
  target="_blank"
  rel="noreferrer"
  className="mt-6 flex w-fit items-center gap-2 rounded-full bg-[#2E1065] px-6 py-3 font-black text-white shadow-sm transition hover:-translate-y-1 hover:bg-[#3B0764]"
>
  View blogs <Icon name="arrow" />
</a>
      </section>
    </div>
  );
}

function ProofStrip() {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {proofPoints.map((point) => (
        <div key={point.number} className="rounded-3xl border border-[#E9D5FF] bg-white p-5 shadow-sm">
          <p className="text-sm font-black text-[#F97360]">{point.number}</p>
          <p className="mt-2 text-2xl font-black text-[#2E1065]">{point.title}</p>
          <p className="mt-3 text-sm leading-6 text-[#3F3F46]">{point.description}</p>
        </div>
      ))}
    </section>
  );
}

function FeaturedWork({ setPage }) {
  return (
    <section className="rounded-[2.5rem] border border-[#E9D5FF] bg-white p-6 shadow-sm">
      <div className="mb-6">
  <h3 className="text-4xl font-black text-[#2E1065]">
    Relevant experience
  </h3>
</div>

      <div className="grid gap-5 md:grid-cols-2">
        {featuredSections.map((project) => (
          <button
            key={project.title}
            onClick={() => setPage(project.route)}
            className="group rounded-3xl border border-[#E9D5FF] bg-[#FFF7ED] p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#F97360] hover:bg-[#F3E8FF] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#F97360]/30"
          >
            
            <h4 className="text-2xl font-black text-[#2E1065]">{project.title}</h4>
            <p className="mt-3 leading-7 text-[#3F3F46]">{project.description}</p>
            <span className="mt-5 flex items-center gap-2 font-black text-[#F97360]">
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
    <PageShell eyebrow="Projects" title="Proof of how I think, lead, and deliver">
      <FeaturedWork setPage={setPage} />
    </PageShell>
  );
}

function DetailCollection({ eyebrow, title, intro, items, back }) {
  return (
    <PageShell eyebrow={eyebrow} title={title}>
      <div className="rounded-[2.5rem] border border-[#E9D5FF] bg-white p-6 shadow-sm">
        <button
          onClick={back}
          className="mb-6 flex items-center gap-2 rounded-2xl border border-[#F97360] bg-white px-4 py-2 font-bold text-[#2E1065] hover:bg-[#FFF1ED] focus:outline-none focus:ring-4 focus:ring-[#F97360]/30"
        >
          ← Back to projects
        </button>
        <p className="max-w-3xl text-lg leading-8 text-[#3F3F46]">{intro}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-3xl border border-[#E9D5FF] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Icon name="briefcase" size={26} className="mb-4 text-[#F97360]" />
            <h3 className="text-2xl font-black text-[#2E1065]">{item.title}</h3>
            <p className="mt-3 leading-7 text-[#3F3F46]">{item.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-[#F3E8FF] px-3 py-1 text-xs font-bold text-[#581C87]">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-[#FFF1ED] p-4">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#F97360]">Impact</p>
              <p className="mt-2 text-[#18181B]">{item.impact}</p>
            </div>

            <div className="mt-5 rounded-2xl border border-[#E9D5FF] bg-[#FFF7ED] p-4">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#F97360]">Attached walkthrough</p>
              <button className="mt-3 flex items-center gap-2 rounded-xl bg-[#2E1065] px-4 py-2 font-bold text-white hover:bg-[#4C1D95] focus:outline-none focus:ring-4 focus:ring-[#F97360]/40">
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
    <PageShell eyebrow="" title="Blog">
      <div className="space-y-4">
        <a
          href="https://blog.keneishawiggan.com/why-vs-code-copilot-is-poor-and-how-it-can-be-improved/"
          target="_blank"
          rel="noreferrer"
          className="block rounded-3xl border border-[#E9D5FF] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#F97360] hover:shadow-lg"
        >
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F97360]">
            Blog post
          </p>
          <h3 className="mt-2 text-2xl font-black text-[#2E1065]">
            Why VS Code Copilot Is Poor and How It Can Be Improved
          </h3>
          <p className="mt-3 max-w-2xl leading-7 text-[#3F3F46]">
            A product management reflection on how VS Code and Copilot can improve onboarding, usability, and guided workflows for beginners.
          </p>
          <span className="mt-5 inline-flex font-black text-[#F97360]">
            Read article →
          </span>
        </a>
      </div>
    </PageShell>
  );
}

function Resume() {
  return (
    <PageShell eyebrow="Resume" title="A clearer view of my experience">
      <div className="rounded-3xl border border-[#E9D5FF] bg-white p-8 shadow-sm">
       
        <a
          href={RESUME_FILE}
          download
          className="mt-6 flex w-fit items-center gap-2 rounded-2xl bg-[#2E1065] px-5 py-3 font-bold text-white hover:bg-[#4C1D95] focus:outline-none focus:ring-4 focus:ring-[#F97360]/40"
        >
          Download resume <Icon name="download" />
        </a>
      </div>
    </PageShell>
  );
}

function Contact() {
  return (
    <PageShell eyebrow="Contact" title="Let’s build what’s next">
      <div className="rounded-3xl border border-[#E9D5FF] bg-white p-8 shadow-sm">
        <Icon name="mail" size={28} className="mb-4 text-[#F97360]" />

       

        <div className="mt-8 space-y-5">
          <div className="rounded-2xl border border-[#E9D5FF] bg-[#FFF7ED] p-5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#F97360]">Email</p>
            <a
              href="mailto:Keneishawiggan8@gmail.com"
              className="mt-2 inline-flex items-center gap-2 rounded-lg text-lg font-black text-[#2E1065] underline-offset-4 hover:underline focus:outline-none focus:ring-4 focus:ring-[#F97360]/30"
            >
              Keneishawiggan8@gmail.com
            </a>
          </div>

          <div className="rounded-2xl border border-[#E9D5FF] bg-[#FFF7ED] p-5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#F97360]">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/keneisha-wiggan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-lg text-lg font-black text-[#2E1065] underline-offset-4 hover:underline focus:outline-none focus:ring-4 focus:ring-[#F97360]/30"
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
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F97360]">{eyebrow}</p>
        <h2 className="mt-2 max-w-4xl text-5xl font-black tracking-tight text-[#2E1065]">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}