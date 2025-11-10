

import Image from 'next/image'
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

const PROJECTS = [
  {
    id: 'diffusion-llm',
    title: 'Diffusion LLM',
    summary: 'A Text2SQL Text-Diffusion-LLM including training and playground inference',
    link: 'https://github.com/ThoreKoritzius/diffusion-llm',
    img: '/projects/diffusion_example.gif',
    tags: ['PyTorch', 'Inference', 'Diffusion', 'Research'],
    long: `A Text2SQL Text-Diffusion-LLM including training and playground inference`
  },
  {
    id: 'graphl-mcp',
    title: 'GraphQL MCP Server',
    summary: 'GraphQL MCP server enabling dynamic, elastic type discovery with type dependency trees and optimized discovery pipelines, designed for advanced agent-driven workflows.',
    link: 'https://github.com/ThoreKoritzius/graphql-mcp',
    img: '/projects/graphql_mcp_results.png',
    tags: ['Rust', 'MCP'],
    long: `GraphQL MCP server enabling dynamic, elastic type discovery with type dependency trees and optimized discovery pipelines, designed for advanced agent-driven workflows.`
  },
  {
    id: 'ai-analyst',
    title: 'yDE Your Data Expert',
    summary: 'Real-Time AI Data Agent: Upload a CSV - Talk to your live Analyst. Streams live graphs, voice results, and transcripts. Runs complex tasks—like stance annotation—updating Google Sheets in real time. 1st place, Berlin AI Hackathon.',
    link: 'https://github.com/meng2468/my-analyst-hack',
    img: '/projects/yde.png',
    tags: ['Voice-Agent', 'Realtime-ML-Inference', 'Agentic'],
    long: `Real-Time AI Data Agent: Upload a CSV - Talk to your live Analyst. Streams live graphs, voice results, and transcripts. Runs complex tasks—like stance annotation—updating Google Sheets in real time. 1st place, Berlin AI Hackathon.`
  },
  {
    id: 'worldbummlr',
    title: 'Worldbummlr',
    summary: 'Explore cities via a Real-Time AI-Generated Tour-Guide telling stories, building routes and real-time audio.',
    link: 'https://worldbummlr.com',
    img: '/projects/worldbummlr.png',
    tags: ['Agentic ML', 'Data Engineering', 'SQL', 'Flutter'],
    long: `Explore cities via a Real-Time AI-Generated Tour-Guide telling stories, building routes and real-time audio.`
  },
  {
    id: 'neuron-surgery',
    title: 'Autoencoder for LLM Feature Extraction',
    summary: 'Autoencoder-based approach for "neuron surgery" on LLMs: extract and amplify neuron features linked to specific topics (e.g., SQL generation), enabling targeted personality shifts by boosting activations at inference time.',
    link: 'https://github.com/ThoreKoritzius/llm-surgery',
    img: '/projects/neuron_surgery.png',
    tags: ['PyTorch', 'Autoencoder', 'Research'],
    long: 'Autoencoder-based approach for "neuron surgery" on LLMs: extract and amplify neuron features linked to specific topics (e.g., SQL generation), enabling targeted personality shifts by boosting activations at inference time.',
  }
]

const PAPERS = [
  {
    id: 'paper1',
    title: 'A computational model of coronary arteries with in-stent restenosis coupling hemodynamics and pharmacokinetics with growth mechanics',
    authors: 'Ranno, Manjunatha, Koritzius, et al.',
    year: 2025,
    summary: 'A patient-specific computational model coupling hemodynamics, drug kinetics, and tissue growth to investigate in-stent restenosis after drug-eluting stent implantation.',
    link: 'https://www.nature.com/articles/s41598-025-22291-w'
  },]


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
function ProjectCard({ p }: ProjectCardProps) {
  return (
    <article className="group bg-white/5 border border-white/6 overflow-hidden shadow-sm flex flex-col">
      <div className="relative h-44 w-full bg-gray-900/40">
        <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="flex flex-col flex-1 p-4">
        {/* Card content */}
        <div>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="text-sm mt-1 text-gray-300">{p.summary}</p>
        </div>
        {/* Tags + Open link pinned to bottom */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <div className="flex gap-2">
            {p.tags?.map(t => <Badge key={t}>{t}</Badge>)}
          </div>
          <div className="flex gap-2">
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-3 py-2 border rounded-lg"
            >Open</a>
          </div>
        </div>
      </div>
    </article>
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
            <p className="mt-2 text-gray-300">ML Software Engineer specializing in designing, optimizing, and deploying real-time, scalable AI systems—spanning LLMs, retrieval pipelines, and multimodal architectures.</p>
            <div className="mt-4 flex gap-3">
              <IconLink href="https://www.linkedin.com/in/thorekoritzius">
                {/* LinkedIn SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.983 3.5C4.983 4.88071 3.88071 6 2.5 6C1.11929 6 0 4.88071 0 3.5C0 2.11929 1.11929 1 2.5 1C3.88071 1 4.983 2.11929 4.983 3.5Z" fill="currentColor" /><path d="M0 8.5H5V24H0V8.5Z" fill="currentColor" /><path d="M7.5 8.5H12.14V10.7H12.2C12.98 9.5 14.68 8.26 17.18 8.26C22.16 8.26 24 10.84 24 15.8V24H18.98V16.9C18.98 14.96 18.94 12.6 16.1 12.6C13.22 12.6 12.6 14.62 12.6 16.76V24H7.5V8.5Z" fill="currentColor" /></svg>
                <span>LinkedIn</span>
              </IconLink>
              <IconLink href="https://github.com/thorekoritzius">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.6 2.9 8.5 6.9 9.9.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.8.7 2.3 1.3.1-1 .4-1.6.8-2-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1.1.8-.2 1.7-.3 2.5-.3.9 0 1.7.1 2.5.3 2-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.4.1 2.7.6.8 1 1.7 1 2.8 0 3.9-2.4 4.7-4.6 5 .4.3.8 1 .8 2v3c0 .3.2.6.7.5 4-1.4 6.8-5.3 6.8-9.9C23.1 5.3 18.3.5 12 .5z" fill="currentColor" /></svg>
                <span>GitHub</span>
              </IconLink>
              <IconLink href="mailto:thore@example.com">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.5v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2zM4 8l8 5 8-5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>Email</span>
              </IconLink>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-end text-right">
            <p className="text-xs text-gray-400">Based in Germany</p>
          </div>
        </header>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold">Selected projects</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROJECTS.map(p => <ProjectCard key={p.id} p={p} />)}
          </div>
        </section>

        {/* Papers + Reading list */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold">Papers</h3>
            <ul className="mt-3 space-y-3">
              {PAPERS.map(x => (
                <li key={x.id} className="border rounded p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{x.title} <span className="text-xs text-gray-400">({x.year})</span></div>
                      <div className="text-sm text-gray-300">{x.authors}</div>
                    </div>
                    <a href={x.link} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border rounded">Read</a>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">{x.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer className="pt-6 pb-12 border-t mt-6 text-center">
          <p className="text-sm text-gray-400">Thanks for stopping by — feel free to reach out.</p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <a href="mailto:thore@example.com" className="px-3 py-2 border rounded">Email</a>
            <a href="https://github.com/thorekoritzius" target="_blank" rel="noreferrer" className="px-3 py-2 border rounded">GitHub</a>
          </div>
        </footer>
      </div>


    </main>
  )
}

/*
  NOTES / How to convert projects into pages
  ------------------------------------------
  If you prefer each project to have its own page (app router), use the PROJECTS array to generate dynamic routes.
  Example (app/projects/[id]/page.jsx):

  export default function ProjectPage({ params }) {
    const project = PROJECTS.find(p => p.id === params.id)
    if (!project) return <div>Not found</div>
    return (<div>...project details...)</div>)
  }

  That keeps the data single-source-of-truth.

  Replace contact links with your real LinkedIn/GitHub/email. Add your photos/gifs into /public/images.
*/
