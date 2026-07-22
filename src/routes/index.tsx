import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Send,
} from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Praveen B | Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Praveen B — Computer Science & Engineering student working on AI/ML, full-stack, and IoT projects.",
      },
      { property: "og:title", content: "Praveen B | Portfolio" },
      {
        property: "og:description",
        content:
          "Selected work in AI/ML, full-stack development, and embedded systems.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

/* --- Data --- */

const profile = {
  name: "Praveen B",
  title: "Computer Science & Engineering Student",
  location: "Madurai, Tamil Nadu",
  email: "praveenbala2006@email.com",
  phone: "+91 93842 50682",
  github: "https://github.com/B-Praveen18",
  linkedin: "https://linkedin.com/in/praveenb1818",
};

const skills = [
  { group: "Programming", items: ["C", "C++", "Python", "Java"] },
  { group: "Web Development", items: ["HTML", "CSS", "JavaScript", "Flask"] },
  { group: "Databases", items: ["SQLite", "MongoDB", "Oracle"] },
  { group: "Embedded & IoT", items: ["ESP32", "Arduino"] },
  { group: "Tools", items: ["Arduino IDE", "VS Code", "Git"] },
  {
    group: "Core CS",
    items: ["Data Structures & Algorithms", "Database Management Systems"],
  },
];

type Project = {
  index: string;
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status?: string;
};

const projects: Project[] = [
  {
    index: "01",
    name: "GrowthOS — AI Business Operating System",
    description:
      "An AI-powered business decision platform with specialized agents for CEO, Marketing, Finance, Sales, and Operations. It analyzes business KPIs and generates strategic recommendations.",
    tech: ["React.js", "Node.js", "Express.js", "Gemini API"],
    github: "https://github.com/B-Praveen18/Business-Growth-OS",
    demo: "https://example.com",
  },
  {
    index: "02",
    name: "Air-Aware",
    description:
      "An interactive web app focused on air pollution awareness — presenting environmental data and AI-powered insights through a clean, accessible interface.",
    tech: ["Web", "AI Insights", "Data Viz"],
    github: "https://github.com/B-Praveen18/Air-Aware",
    demo: "https://example.com",
  },
  {
    index: "03",
    name: "Smart Sleep Monitoring System",
    description:
      "A real-time sleep monitoring system using ESP32, MAX30102 and an accelerometer to collect health and movement data, analyze sleep stages, and visualize results on a local web dashboard.",
    tech: ["ESP32", "MAX30102", "Accelerometer", "Wi-Fi"],
    status: "In development",
  },
  {
    index: "04",
    name: "AI Meeting Intelligence Analyzer",
    description:
      "An offline web application that transcribes meetings and extracts keywords, summaries, action items, and sentiment — with structured data stored in SQLite.",
    tech: ["Python", "Whisper Tiny", "spaCy", "YAKE", "NLTK", "SQLite"],
  },
];

const achievements = [
  { title: "Finalist — E-theltics", sub: "E-Summit'26, IIT Madras" },
  { title: "1st Prize — Intellexa'26", sub: "Web Design, Ramco" },
  {
    title: "Full Stack Web Development",
    sub: "3-month program, Krutanic Solutions",
  },
];

const certifications = [
  "E-theltics — E-Summit'26, IIT Madras",
  "Spoken Tutorial — IIT Bombay",
  "Full Stack Web Development — Krutanic, Bengaluru",
  "Intellexa'26 — Web Design, Ramco",
];

/* --- Small UI bits --- */

function SectionHeader({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="inline-block h-px w-8 bg-foreground/40" />
          {eyebrow}
        </div>
        <h2 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05]">
          {title}
        </h2>
      </div>
      {note && (
        <p className="text-sm text-muted-foreground max-w-xs">{note}</p>
      )}
    </div>
  );
}

function Portfolio() {
  return (
    <div id="top" className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Education />
        <AchievementsAndCerts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* --- Hero --- */

function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <Reveal>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for internships & collaborations
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">
              Hi, I&apos;m <span className="italic">Praveen B.</span>
              <br />
              <span className="text-muted-foreground">
                Computer Science &amp; Engineering Student.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              I enjoy building practical software, intelligent applications, and
              connected systems. My interests span AI/ML, full-stack
              development, embedded systems, and IoT.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 text-sm hover:bg-foreground/90 transition-colors"
              >
                View my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-foreground/80 px-5 py-3 text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                Get in touch
              </a>
              <div className="ml-2 flex items-center gap-4 text-muted-foreground">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={200}>
            <ProfileCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <div className="relative mx-auto md:ml-auto md:mr-0 max-w-[260px]">
      <div className="absolute -inset-2 border border-border" aria-hidden />
      <div className="relative bg-card border border-border p-4">
        <div className="aspect-[4/5] w-full bg-secondary overflow-hidden">
          <img
            src="/praveen.jpeg"
            alt="Portrait of Praveen B"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <div className="pt-4 flex items-center justify-between">
          <div>
            <div className="font-display text-base">{profile.name}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
              CSE · Class of 2028
            </div>
          </div>
          <div className="text-right text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 justify-end">
              <MapPin className="h-3 w-3" /> Madurai, TN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- About --- */

function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeader eyebrow="About" title="A short introduction." />
        <div className="grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-8">
            <p className="font-display text-2xl md:text-3xl leading-snug text-foreground/90">
              I&apos;m a Computer Science and Engineering student who likes to
              build technology that is actually useful — software that helps
              people, systems that talk to hardware, and models that make sense
              of messy data.
            </p>
            <div className="mt-8 space-y-5 text-foreground/75 leading-relaxed max-w-2xl">
              <p>
                Most of my time goes into projects across AI/ML, full-stack
                development, embedded systems, and IoT. I like starting from a
                real problem, sketching a rough plan, and shipping something I
                can hold or click.
              </p>
              <p>
                Outside of coursework I read a lot of engineering write-ups,
                take part in hackathons, and try to sharpen my problem-solving
                one small project at a time.
              </p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-4" delay={120}>
            <dl className="border-t border-border divide-y divide-border">
              {[
                ["Based in", profile.location],
                ["Program", "B.E. CSE, 2024–2028"],
                ["Focus", "AI/ML · Full-stack · IoT"],
                ["Email", profile.email],
              ].map(([k, v]) => (
                <div key={k} className="py-4 flex items-baseline justify-between gap-6">
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="text-sm text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --- Skills --- */

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeader
          eyebrow="Skills"
          title="What I work with."
          note="Tools and languages I reach for on most projects."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 60} className="bg-background p-7">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")} — {s.group}
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="text-sm border border-border px-3 py-1 bg-card"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Work --- */

function Work() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeader
          eyebrow="Selected work"
          title="Things I've built."
          note="A mix of AI, web, and hardware projects — shipped or in progress."
        />
        <div className="border-t border-border">
          {projects.map((p, i) => (
            <ProjectRow key={p.name} project={p} index={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project: p, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 60}>
      <article className="group grid md:grid-cols-12 gap-6 py-10 border-b border-border transition-colors hover:bg-secondary/40 -mx-4 px-4">
        <div className="md:col-span-1 font-mono text-xs text-muted-foreground pt-1">
          {p.index}
        </div>
        <div className="md:col-span-6">
          <h3 className="font-display text-2xl md:text-3xl leading-tight">
            {p.name}
          </h3>
          <p className="mt-3 text-foreground/75 leading-relaxed max-w-xl">
            {p.description}
          </p>
          {p.status && (
            <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {p.status}
            </div>
          )}
        </div>
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Stack
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <li
                key={t}
                className="text-xs border border-border px-2 py-1 bg-card"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 flex md:flex-col items-start gap-3 md:items-end md:text-right">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm hover:text-accent transition-colors"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm hover:text-accent transition-colors"
            >
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

/* --- Experience --- */

function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeader eyebrow="Experience" title="Where I've learned." />
        <Reveal>
          <div className="grid md:grid-cols-12 gap-6 border-t border-border py-8">
            <div className="md:col-span-3 text-sm text-muted-foreground">
              3 months · 2024
            </div>
            <div className="md:col-span-6">
              <h3 className="font-display text-2xl">Krutanic Solutions</h3>
              <div className="text-sm text-muted-foreground mt-1">
                Full Stack Web Development Program · Bengaluru
              </div>
              <p className="mt-4 text-foreground/75 leading-relaxed max-w-xl">
                Completed a three-month program focused on building responsive
                web applications and strengthening practical development skills.
                Picked up habits around version control, debugging, and
                collaborative development along the way.
              </p>
            </div>
            <div className="md:col-span-3 flex md:justify-end">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Certificate
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --- Education --- */

function Education() {
  const rows = [
    {
      school: "Mepco Schlenk Engineering College",
      degree: "B.E. Computer Science and Engineering",
      period: "2024 – 2028",
      score: "CGPA · 8.57 / 10.0",
    },
    {
      school: "Maharishi Vidya Mandhir Sr. Sec. School",
      degree: "Higher Secondary — Class XII",
      period: "2024",
      score: "86.8 %",
    },
    {
      school: "Maharishi Vidya Mandhir Sr. Sec. School",
      degree: "Secondary — Class X",
      period: "2022",
      score: "78.2 %",
    },
  ];
  return (
    <section id="education" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeader eyebrow="Education" title="Academic background." />
        <div className="border-t border-border">
          {rows.map((r, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="grid md:grid-cols-12 gap-6 py-8 border-b border-border">
                <div className="md:col-span-3 text-sm text-muted-foreground">
                  {r.period}
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-display text-xl md:text-2xl">
                    {r.school}
                  </h3>
                  <div className="text-sm text-muted-foreground mt-1">
                    {r.degree}
                  </div>
                </div>
                <div className="md:col-span-3 text-sm md:text-right">
                  {r.score}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Achievements + Certifications --- */

function AchievementsAndCerts() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-12 gap-14">
        <div className="md:col-span-7">
          <SectionHeader eyebrow="Achievements" title="A few highlights." />
          <div className="space-y-4">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div className="flex items-baseline justify-between gap-4 border border-border bg-card p-5">
                  <div>
                    <div className="font-display text-lg">{a.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {a.sub}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="md:col-span-5">
          <SectionHeader eyebrow="Certifications" title="Programs & courses." />
          <ul className="border-t border-border">
            {certifications.map((c, i) => (
              <Reveal key={c} delay={i * 50}>
                <li className="py-4 border-b border-border flex items-start gap-4">
                  <span className="font-mono text-xs text-muted-foreground mt-1 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-foreground/85">{c}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --- Contact --- */

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Hello from ${form.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-12 gap-14">
        <div className="md:col-span-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
              Contact
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.02]">
              Let&apos;s build <span className="italic">something useful.</span>
            </h2>
            <p className="mt-6 text-foreground/75 max-w-md leading-relaxed">
              I&apos;m open to internships, project collaborations, and a good
              conversation about engineering. If you want to say hello, fill
              out the form below and send your message directly.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <dl className="mt-10 border-t border-border">
              <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
              <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="B-Praveen18" href={profile.github} />
              <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="praveenb1818" href={profile.linkedin} />
              <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value={profile.location} />
            </dl>
          </Reveal>
        </div>

        <div className="md:col-span-6">
          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="border border-border bg-card p-6 md:p-8"
            >
              <div className="grid gap-5">
                <Field
                  label="Name"
                  id="name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
                <div>
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    maxLength={1000}
                    className="mt-2 block w-full bg-background border border-border px-3 py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground">
                    {status === "sending"
                      ? "Sending your message…"
                      : status === "sent"
                        ? "Thanks! Your message was sent."
                        : status === "error"
                          ? "Something went wrong. Please try again or email me directly."
                          : "I usually reply within a day."}
                  </span>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 text-sm hover:bg-foreground/90 transition-colors"
                  >
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={200}
        className="mt-2 block w-full bg-background border border-border px-3 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="py-4 border-b border-border flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground">{icon}</span>
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
      </div>
      <span className="text-sm">{value}</span>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block hover:text-accent transition-colors"
    >
      {content}
    </a>
  ) : (
    content
  );
}

/* --- Footer --- */

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-display text-lg">Praveen B</div>
          <div className="text-sm text-muted-foreground">
            Computer Science &amp; Engineering Student
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="#contact"
            className="hover:text-foreground transition-colors inline-flex items-center gap-1.5 border border-border px-3 py-1.5 text-foreground"
          >
            <Mail className="h-4 w-4" /> Say Hello
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Praveen B
        </div>
      </div>
    </footer>
  );
}
