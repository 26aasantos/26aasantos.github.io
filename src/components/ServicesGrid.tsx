import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Three bands, top to bottom: your three-step method (on a dark plate so it
 * is the first thing the eye lands on), the five services as cards that carry
 * the marks of what each one is built with, and the live automation demo
 * scaled into whatever height is left. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, orange for the index
 * and the accent.
 *
 * Content is based on Alessandra's documented experience, skills, and training.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  { index:'01', label:'Understand', body:'Clarify priorities, recurring tasks, and the support your business needs.', Icon:MagnetStraight, chips:['Priorities','Tasks','Goals'] },
  { index:'02', label:'Organize', body:'Turn information and responsibilities into clear, repeatable workflows.', Icon:Timer, chips:['Systems','Process','Follow-up'] },
  { index:'03', label:'Improve', body:'Use the right digital and AI-assisted tools to make everyday work easier.', Icon:Trophy, chips:['Efficiency','AI support','Continuous improvement'] },
]

/* ---------- The services ---------- */

// Example tool marks from /public/icons. Swap for the tools you actually use.
const GWS = '/icons/googleworkspace.svg'
const OPENAI = '/icons/openai.svg'
const SLACK = '/icons/slack.svg'

const TOOL_LOGOS = [
  { name:'Google Workspace', src:GWS },
  { name:'QuickBooks', mark:'QB' },
  { name:'Xero', mark:'X' },
  { name:'Shopee', mark:'S' },
  { name:'Shopify', mark:'S' },
  { name:'TikTok', mark:'♪' },
  { name:'Amazon', mark:'a' },
  { name:'Claude', src:'/icons/ai/claude-color.svg' },
  { name:'GHL', src:'/icons/gohighlevel.png' },
  { name:'ChatGPT', src:OPENAI },
  { name:'Gemini', mark:'✦' },
  { name:'Canva', mark:'C' },
  { name:'Trello', mark:'▦' },
]

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  { index:'01', title:'Virtual Assistance', description:'Dependable support for recurring administrative and business tasks.', chip:'Reliable support', logos:[GWS], bullets:['Administrative and clerical support','Data entry and record management','Email and online communication'] },
  { index:'02', title:'E-commerce Operations', description:'Practical support for keeping online business activities organized.', chip:'Operations support', logos:[GWS], bullets:['Shopee and Lazada seller platform support','Inventory and logistics coordination','Supplier and customer coordination'] },
  { index:'03', title:'Accounting & Finance Support', description:'Detail-focused assistance backed by accounting and P2P experience.', chip:'Detail focused', logos:[SLACK], bullets:['Accounts payable and invoice support','Bookkeeping and financial records','Expense tracking and reporting'] },
  { index:'04', title:'Digital Productivity', description:'Helping turn scattered tasks into clearer digital workflows.', chip:'Work smarter', logos:[GWS, SLACK], bullets:['Microsoft Office and Google Workspace','Data organization and reporting','Clear, repeatable processes'] },
  { index:'05', title:'AI-Assisted Productivity', description:'Practical use of AI and automation tools to support writing, research, organization, and repetitive work.', chip:'AI support', logos:[OPENAI], bullets:['Claude for AI-assisted work','GoHighLevel (GHL) workflow exposure','Zapier automation and integrations','Bookkeeping skills development'] },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Practical support for busy businesses
        </h1>
        <p className="pgrid__lede">
          Virtual assistance, e-commerce operations, accounting support, and practical AI-assisted productivity.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        <section className="sgrid__tools" aria-labelledby="tools-title">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title" id="tools-title">Tools I Work With</h2>
            <p className="sgrid__offers-sub">Digital tools I use across business operations, accounting, e-commerce, productivity, and AI-assisted workflows.</p>
          </div>
          <ul className="sgrid__tool-grid" role="list">
            {TOOL_LOGOS.map((tool) => (
              <li key={tool.name} className="sgrid__tool-item">
                <span className="sgrid__tool-logo">{tool.src ? <img src={tool.src} alt="" width={28} height={28} decoding="async" /> : <span className="sgrid__tool-mark" aria-hidden="true">{tool.mark}</span>}</span>
                <span>{tool.name}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">My Approach</span>
            <h2 className="sgrid__method-title" id="method-title">
              Understand. Organize. Improve.<br /><span>A practical way to support your workflow.</span>
            </h2>
            <p className="sgrid__method-sub">
              The goal is simple: dependable support, clearer processes, and less repetitive work.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">How I Can Help</h2>
            <p className="sgrid__offers-sub">Support built around real business operations, finance, e-commerce, and digital tools.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* The live workflow. Its caption and the tool chips sit in a header
            above the window, so the canvas gets the whole glass width. */}
        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Workflow approach</span>
              <h2 className="sgrid__flow-title">A practical workflow mindset</h2>
              <p className="sgrid__flow-sub">
                I focus on reducing friction in repetitive work while keeping people, information, and next steps organized.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Tools that power this flow">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
    </section>
  )
}
