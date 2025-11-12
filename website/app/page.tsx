

import Image from 'next/image'
import { PAPERS, PROJECTS } from './consts';
import ReactMarkdown from 'react-markdown';
import './globals.css';
export const metadata = {
  title: "Thore Koritzius",
  description: "Seasoned ML Software Engineer specializing in designing, optimizing, and deploying real-time, scalable AI systems—spanning LLMs, retrieval pipelines, and multimodal architectures—to deliver robust, production-ready solutions.",
};

type IconLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

type BadgeProps = {
  children: React.ReactNode;
};
type Project = {
  id: string;
  title: string;
  summary: string;
  link: string;
  img: string;
  tags?: string[];
  long?: string;
};

type ProjectCardProps = {
  p: Project;
};

// -----------------------
// COMPONENTS
// -----------------------
function IconLink({ href, children, className = '' }: IconLinkProps) {
  return (
    <a href={href} className={`inline-flex items-center gap-2 py-2 px-3 rounded-lg border transition hover:scale-[1.02] ${className}`} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Badge({ children }: BadgeProps) {
  return <span className="text-xs px-2 py-1 rounded-full border">{children}</span>;
}
export function ProjectCard({ p }: ProjectCardProps) {
  return (
    <a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open project: ${p.title}`}
      className="group block bg-white/5 border border-white/10 overflow-hidden shadow-sm
                 flex flex-col transition-all duration-150 ease-in-out cursor-pointer
                 hover:shadow-lg hover:scale-[1.02] hover:border-blue-400"
    >
      <div className="relative h-44 w-full bg-gray-900/40">
        <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="flex flex-col flex-1 p-4">
        <div>
          <h3 className="text-lg font-semibold group-hover:text-blue-200">{p.title}</h3>
          <div className="text-sm mt-1 text-gray-300 group-hover:text-blue-100 transition-colors">
            <ReactMarkdown>{p.summary}</ReactMarkdown>
          </div>
        </div>
        <div className="mt-auto flex gap-2 pt-4">
          {p.tags?.map(t => <Badge key={t}>{t}</Badge>)}
        </div>
      </div>
    </a>
  );
}

// -----------------------
// PAGE
// -----------------------
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white p-8">
      <div className="max-w-5xl mx-auto grid gap-8">
        {/* Header */}
        <header className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold">Thore Koritzius</h1>
            <p className="mt-2 text-gray-300">Machine Learning Software Engineer<br></br>Love designing, optimizing, and deploying real-time, scalable AI systems. Spanning LLMs, retrieval pipelines, and multimodal architectures.</p>
            <div className="mt-4 flex gap-3">
              <IconLink href="https://www.linkedin.com/in/thore-koritzius">
                {/* LinkedIn SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.983 3.5C4.983 4.88071 3.88071 6 2.5 6C1.11929 6 0 4.88071 0 3.5C0 2.11929 1.11929 1 2.5 1C3.88071 1 4.983 2.11929 4.983 3.5Z" fill="currentColor" /><path d="M0 8.5H5V24H0V8.5Z" fill="currentColor" /><path d="M7.5 8.5H12.14V10.7H12.2C12.98 9.5 14.68 8.26 17.18 8.26C22.16 8.26 24 10.84 24 15.8V24H18.98V16.9C18.98 14.96 18.94 12.6 16.1 12.6C13.22 12.6 12.6 14.62 12.6 16.76V24H7.5V8.5Z" fill="currentColor" /></svg>
                <span>LinkedIn</span>
              </IconLink>
              <IconLink href="https://github.com/thorekoritzius">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.6 2.9 8.5 6.9 9.9.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.8.7 2.3 1.3.1-1 .4-1.6.8-2-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1.1.8-.2 1.7-.3 2.5-.3.9 0 1.7.1 2.5.3 2-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.4.1 2.7.6.8 1 1.7 1 2.8 0 3.9-2.4 4.7-4.6 5 .4.3.8 1 .8 2v3c0 .3.2.6.7.5 4-1.4 6.8-5.3 6.8-9.9C23.1 5.3 18.3.5 12 .5z" fill="currentColor" /></svg>
                <span>GitHub</span>
              </IconLink>
            </div>
          </div>
        </header>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold">Selected projects</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROJECTS.map(p => <ProjectCard key={p.id} p={p} />)}
          </div>
        </section>

        {/* Papers */}
        <section>
          <h3 className="text-xl font-semibold">Papers</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PAPERS.map(x => (
              <a
                key={x.id}
                href={x.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open paper: ${x.title}`}
                className="group block bg-white/5 border border-white/10 overflow-hidden shadow-sm
          flex flex-col transition-all duration-150 ease-in-out cursor-pointer
          hover:shadow-lg hover:scale-[1.02] hover:border-blue-400 p-4"
              >
                <div>
                  <h4 className="text-lg font-semibold group-hover:text-blue-200">
                    {x.title}{' '}
                    <span className="text-xs text-gray-400">({x.year})</span>
                  </h4>
                  <div className="text-sm mb-2 text-gray-300">{x.authors}</div>
                </div>
                <div className="flex-1">
                  <p className="mt-2 text-sm text-gray-300">{x.summary}</p>
                </div>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 border rounded bg-blue-900/20 text-blue-200 text-xs font-semibold">
                    Read Paper
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer / Contact */}
        <footer className="pt-6 pb-12 border-t mt-6 text-center">
          <p className="text-sm text-gray-400">Thanks for stopping by — feel free to reach out.</p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <a href="https://github.com/thorekoritzius" target="_blank" rel="noreferrer" className="px-3 py-2 border rounded">GitHub</a>
          </div>
        </footer>
      </div>
    </main>
  )
}