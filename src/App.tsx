import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  FileText,
  Sparkles,
  Database,
  Bot,
} from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlutter,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFramer,
  SiD3,
  SiC,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import avatar from "@/assets/avatar.jpeg";
import studysmart from "@/assets/project-studysmart.jpg";
import sortingviz from "@/assets/project-sortingviz.jpg";
import { WaveBackground } from "@/components/WaveBackground";

const techStack = [
  { name: "Python", Icon: SiPython },
  { name: "Java", Icon: FaJava },
  { name: "C", Icon: SiC },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "SQL", Icon: Database },
  { name: "React.js", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "Django", Icon: SiDjango },
  { name: "Flutter", Icon: SiFlutter },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Framer Motion", Icon: SiFramer },
  { name: "D3.js", Icon: SiD3 },
  { name: "Ollama", Icon: Bot },
];

const services = [
  {
    no: "01",
    tag: "WHAT I BUILD",
    title: "Full-Stack Web Applications",
    desc: "End-to-end product development — from database schema to responsive UI, deployed and production-ready.",
    color: "from-slate-400 to-zinc-400",
  },
  {
    no: "02",
    tag: "FRONTEND",
    title: "Pixel-Perfect React UIs",
    desc: "Translating designs into responsive, accessible, animated React interfaces with Tailwind and Framer Motion.",
    color: "from-gray-400 to-neutral-500",
  },
  {
    no: "03",
    tag: "BACKEND",
    title: "APIs & Databases",
    desc: "REST APIs with Node/Express and Django, MongoDB & MySQL schemas — structured for clarity and scale.",
    color: "from-zinc-400 to-gray-500",
  },
  {
    no: "04",
    tag: "INTELLIGENCE",
    title: "AI-Augmented Features",
    desc: "Practical AI integrations — document summarisation, contextual Q&A and chatbots powered by Ollama.",
    color: "from-neutral-400 to-slate-500",
  },
];

const education = [
  {
    degree: "MCA",
    inst: "St. Joseph's College of Engineering & Technology, Palai",
    meta: "CGPA 8.31",
    years: "2024 – 2026",
  },
  {
    degree: "BSc Mathematics",
    inst: "BVM Holy Cross College, Cherpunkal",
    meta: "CGPA 7.02",
    years: "2019 – 2022",
  },
  {
    degree: "Higher Secondary",
    inst: "Gov HSS Pathinaramkandom",
    meta: "76%",
    years: "2017 – 2019",
  },
  { degree: "SSLC", inst: "Gov HSS Pathinaramkandom", meta: "95%", years: "2017" },
];

const achievements = [
  "Published research paper — Cochin Arts & Science College",
  "NPTEL — Computer Graphics",
  "Essentials of OOP — SJCET",
  "IT Fundamentals & Office Tools — SJCET",
  "React Course — Udemy",
  "NASA Space Apps Challenge 2025",
];

export default function App() {
  return (
    <>
      <WaveBackground />
      <div className="relative z-10 min-h-screen text-foreground font-body">
        <Nav />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
          <Hero />
          <BentoAbout />
          <Education />
          <Services />
          <Stats />
          <Work />
          <Achievements />
          <Contact />
        </main>
      </div>
    </>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <header className="sticky top-4 z-30 mx-auto mt-4 flex max-w-7xl items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <div className="glass-pill flex h-10 items-center gap-2 px-3 text-sm font-semibold tracking-widest font-display">
          AV
        </div>
        <div className="hidden sm:block text-[10px] leading-tight tracking-[0.2em] text-white/60">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green shadow-[0_0_10px_var(--accent-green)]" />
            <span>CREATIVE ENGINEER</span>
          </div>
          <div>BUILDING THE FUTURE</div>
        </div>
      </div>

      <nav className="glass-pill hidden md:flex items-center gap-1 px-2 py-1.5 text-sm">
        {["Home", "About", "Work", "Skills", "Contact"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="rounded-full px-3 py-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            {l}
          </a>
        ))}
        <a
          href="mailto:aparnavinod512@gmail.com"
          className="ml-1 rounded-full bg-black/70 px-4 py-1.5 text-white"
        >
          Book a call
        </a>
      </nav>

    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="home" className="relative flex min-h-[78vh] items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-widest text-white/70 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green shadow-[0_0_10px_var(--accent-green)]" />
          AVAILABLE FOR OPPORTUNITIES
        </div>
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
          Turn ideas into <br className="hidden sm:block" /> interfaces with a
          <br />
          <span className="font-serif italic text-gradient-accent">Full Stack Developer</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/70">
          I&apos;m Aparna Vinod — building modern, AI-augmented web experiences with React, Node,
          Django and a foundation in mathematics.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-medium text-black"
          >
            Let&apos;s Connect
            <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-white transition group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a
            href="#work"
            className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/90 transition hover:bg-white/10"
          >
            View work
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- Bento About ---------------- */
function BentoAbout() {
  return (
    <section id="about" className="grid gap-5 sm:grid-cols-3">
      {/* Tech Stack */}
      <Card className="sm:col-span-2 relative overflow-hidden">
        <CardHeader
          title="Tech Stack"
          subtitle={
            <>
              Crafted with code, fused with curiosity —<br />
              the tech behind every interface I build.
            </>
          }
        />
        <div className="mt-6 flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t.name}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/85 backdrop-blur"
            >
              <t.Icon className="h-3.5 w-3.5" />
              {t.name}
            </span>
          ))}
        </div>
        {/* concentric rings deco */}
        <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2">
          {[80, 140, 200, 260, 320].map((s) => (
            <div
              key={s}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
              style={{ width: s, height: s }}
            />
          ))}
        </div>
        <div className="relative mt-10 inline-flex rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 backdrop-blur">
          <Sparkles className="mr-2 h-4 w-4 text-accent-green" />I turn logic into interfaces.
        </div>
      </Card>

      {/* Profile */}
      <Card>
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl">Aparna Vinod</h3>
          <span className="text-xs text-white/60">Full Stack Dev</span>
        </div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-3">
          <div className="mb-3 flex items-center justify-between text-[11px] tracking-widest text-white/60">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
              IDUKKI, KERALA
            </span>
            <Clock />
          </div>
          <img
            src={avatar}
            alt="Aparna Vinod"
            className="mx-auto aspect-square w-40 rounded-full object-cover ring-1 ring-white/20"
            loading="lazy"
            width={512}
            height={512}
          />
          <div className="mt-4 flex justify-center gap-2">
            <Social href="https://linkedin.com/in/aparna-vinod-6526b0302/" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Social>
            <Social href="https://github.com/aparnavinod512" label="GitHub">
              <Github className="h-4 w-4" />
            </Social>
            <Social href="mailto:aparnavinod512@gmail.com" label="Email">
              <Mail className="h-4 w-4" />
            </Social>
            <Social href="#" label="Resume">
              <FileText className="h-4 w-4" />
            </Social>
          </div>
        </div>
      </Card>

      {/* Home Base */}
      <Card>
        <CardHeader
          title="Home Base"
          subtitle="The place where I sketch ideas, debug late, and ship by sunrise."
        />
        <div className="mt-6 grid place-items-center">
          <div className="grid h-48 w-48 place-items-center rounded-full bg-black/60 text-xs tracking-widest text-white/70 ring-1 ring-white/10">
            <div className="flex flex-col items-center gap-1">
              <MapPin className="h-4 w-4 text-accent-green" />
              IDUKKI, KERALA
            </div>
          </div>
        </div>
      </Card>

      {/* What I Do */}
      <Card>
        <CardHeader title="What I Do" subtitle="A quick take on what I bring to a team." />
        <p className="mt-5 text-sm leading-relaxed text-white/80">
          I design and build full-stack web applications — React on the front, Node, Express or
          Django on the back, and a math-trained mind for the tricky bits in between. Lately,
          I&apos;ve been weaving Ollama-powered AI into learning tools.
        </p>
      </Card>

      {/* Beyond the Code */}
      <Card>
        <CardHeader title="Beyond the Code" subtitle="What keeps me curious off-screen." />
        <ul className="mt-5 list-disc pl-5 space-y-2 text-sm text-white/80">
          <li>Mathematics</li>
          <li>Problem Solving</li>
          <li>Communication skill</li>
          <li>Drawing</li>
        </ul>
      </Card>
    </section>
  );
}

/* ---------------- Education ---------------- */
function Education() {
  return (
    <section className="mt-16">
      <SectionHeader
        kicker="ACADEMICS"
        title={
          <>
            The <span className="font-serif italic text-gradient-accent">foundation</span>
          </>
        }
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass-card p-5"
          >
            <div className="text-[11px] tracking-widest text-white/55">{e.years}</div>
            <h3 className="mt-2 font-display text-lg">{e.degree}</h3>
            <p className="mt-1 text-sm text-white/65">{e.inst}</p>
            <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              {e.meta}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  return (
    <section id="skills" className="mt-20">
      <SectionHeader
        kicker="SERVICES"
        title={
          <>
            What I <span className="font-serif italic text-gradient-accent">Bring</span>
          </>
        }
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <motion.div
            key={s.no}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card relative overflow-hidden p-7"
          >
            <div
              className={`absolute right-4 top-2 bg-gradient-to-r ${s.color} bg-clip-text font-display text-7xl font-bold text-transparent opacity-25`}
            >
              {s.no}
            </div>
            <div className="relative">
              <div className="text-[11px] tracking-widest text-accent-green">{s.tag}</div>
              <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-sm text-white/70">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  const items = [
    { v: "8.31", k: "MCA CGPA" },
    { v: "2+", k: "Major Projects" },
    { v: "6+", k: "Certifications" },
    { v: "3", k: "Languages Spoken" },
  ];
  return (
    <section className="mt-10">
      <div className="glass-card grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
        {items.map((it) => (
          <div key={it.k} className="px-6 py-8 text-center">
            <div className="font-display text-4xl">{it.v}</div>
            <div className="mt-1 text-[11px] tracking-widest text-white/55">{it.k}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Work ---------------- */
function Work() {
  const projects = [
    {
      name: "Study Smart AI",
      desc: "An AI-powered learning platform for document summarization, intelligent Q&A and chatbot-based file management — with a teacher dashboard for assignments, submissions and auto-summaries.",
      bullets: [
        "Ollama-powered summarisation & contextual Q&A",
        "Teacher dashboard, submissions & progress tracking",
        "Notes, bookmarks, organised chat history, offline access",
      ],
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Ollama"],
      img: studysmart,
      tint: "from-slate-500/40 to-zinc-500/30",
    },
    {
      name: "Sorting Viz",
      desc: "A full-stack visualiser for sorting and searching algorithms with Manual and Auto modes, animated step-by-step execution and time-complexity explanations.",
      bullets: [
        "7 algorithms — Bubble, Selection, Insertion, Merge, Quick, Linear, Binary",
        "Interactive Manual & Auto modes with quizzes",
        "Animated UI with Framer Motion & D3.js",
      ],
      tech: ["React", "Tailwind", "Flask", "SQLite", "D3.js", "Framer Motion"],
      img: sortingviz,
      tint: "from-gray-500/40 to-neutral-500/30",
    },
  ];
  return (
    <section id="work" className="mt-20">
      <SectionHeader
        kicker="FEATURED PROJECTS"
        title={
          <>
            Curated <span className="font-serif italic text-gradient-accent">work</span>
          </>
        }
      />
      <div className="mt-10 space-y-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card grid gap-6 overflow-hidden p-6 md:grid-cols-2 md:p-8"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="text-[11px] tracking-widest text-white/55">— PROJECT 0{i + 1}</div>
              <h3 className="mt-2 font-display text-3xl">{p.name}</h3>
              <p className="mt-3 text-sm text-white/75">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-green" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${p.tint} p-6`}>
              <img
                src={p.img}
                alt={p.name}
                className="mx-auto w-full max-w-xl rounded-xl shadow-2xl"
                loading="lazy"
                width={1024}
                height={768}
              />
              <a
                href="#"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/10 backdrop-blur transition hover:bg-white/20"
                aria-label="Open project"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Achievements ---------------- */
function Achievements() {
  return (
    <section className="mt-20">
      <SectionHeader
        kicker="MILESTONES"
        title={
          <>
            Notable <span className="font-serif italic text-gradient-accent">achievements</span>
          </>
        }
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card flex items-start gap-3 p-5"
          >
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 text-xs text-accent-green">
              0{i + 1}
            </div>
            <p className="text-sm text-white/85">{a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="mt-20">
      <div className="glass-card relative overflow-hidden p-10 sm:p-14 text-center">
        <div className="text-[11px] tracking-widest text-white/55">LET&apos;S TALK</div>
        <h2 className="mt-3 font-display text-4xl sm:text-6xl">
          Let&apos;s build something{" "}
          <span className="font-serif italic text-gradient-accent">meaningful</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-white/70">
          Open to junior developer roles, internships and freelance collaborations. I&apos;ll reply
          within a day.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:aparnavinod512@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-medium text-black"
          >
            aparnavinod512@gmail.com
            <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-white transition group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a
            href="tel:+916238330743"
            className="glass-pill inline-flex items-center gap-2 px-5 py-3 text-sm"
          >
            <Phone className="h-4 w-4" /> +91 6238 330 743
          </a>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          <Social href="https://linkedin.com/in/aparna-vinod-6526b0302/" label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </Social>
          <Social href="https://github.com/aparnavinod512" label="GitHub">
            <Github className="h-4 w-4" />
          </Social>
        </div>
      </div>
    </section>
  );
}



/* ---------------- Primitives ---------------- */
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`glass-card relative p-6 sm:p-7 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function CardHeader({ title, subtitle }: { title: React.ReactNode; subtitle?: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-2xl">{title}</h3>
      {subtitle && <p className="mt-2 text-sm text-white/65">{subtitle}</p>}
    </div>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.3em] text-white/55">{kicker}</div>
      <h2 className="mt-2 font-display text-4xl sm:text-6xl leading-none">{title}</h2>
    </div>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/15 hover:text-white"
    >
      {children}
    </a>
  );
}

function Clock() {
  const time = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  });
  return <span>{time} IST</span>;
}
