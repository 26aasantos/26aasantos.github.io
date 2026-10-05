import { useCallback, useEffect, useRef, useState, type ComponentType } from 'react'
import { ArrowUpRight, X, Briefcase, Package, Calculator, Robot } from '@/components/slab'

type CaseStudy = {
  id: string; number: string; title: string; category: string; summary: string
  overview: string; responsibilities: string[]; tools: string[]; outcome: string
  Icon: ComponentType<any>
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ecommerce', number: '01', title: 'E-commerce Operations', category: 'Beauty Alley OPC · 2020–2025',
    summary: 'Built and managed day-to-day retail and wholesale e-commerce operations from the ground up.',
    overview: 'I started as a one-person operation and personally handled the full order cycle. As the business grew, I hired and coordinated staff to help prepare and pack products for retail buyers, resellers, and wholesalers.',
    responsibilities: [
      'Created, maintained, and managed product listings, including titles, descriptions, photos, pricing, variations, and promotions.',
      'Managed Shopee and Lazada seller operations, including orders, customer concerns, fulfillment, and online sales activities.',
      'Handled the order process from customer purchase through stock checking, preparation, packing, shipping, tracking, and customer support.',
      'Managed both retail and wholesale/reseller orders across approximately 1,000–2,000 SKUs.',
      'Coordinated staff as the business grew and delegated product preparation and packing tasks.',
    ],
    tools: ['Shopee', 'Lazada', 'Google Sheets'],
    outcome: 'Supported 100+ orders per day, with peak periods reaching approximately 1,000–2,000 orders.',
    Icon: Briefcase,
  },
  {
    id: 'inventory', number: '02', title: 'Inventory & Procurement', category: 'Beauty Alley OPC · Operations',
    summary: 'Kept purchasing and stock decisions organized using Google Sheets and physical inventory checks.',
    overview: 'Inventory and purchasing were handled as part of the day-to-day business operation. I combined spreadsheet tracking with physical stock counts and personally managed supplier and purchasing decisions.',
    responsibilities: [
      'Tracked inventory using Google Sheets together with physical stock counts.',
      'Monitored stock levels and decided when products needed to be reordered.',
      'Contacted suppliers, compared prices, and negotiated pricing, discounts, and payment terms.',
      'Coordinated product requirements, supplier orders, payments, and deliveries.',
      'Connected purchasing decisions with product demand, available stock, and distribution needs.',
    ],
    tools: ['Google Sheets', 'Physical stock counts', 'Supplier coordination'],
    outcome: 'Managed inventory and procurement across approximately 1,000–2,000 SKUs for both retail and wholesale operations.',
    Icon: Package,
  },
  {
    id: 'finance', number: '03', title: 'Business Administration & Finance', category: 'Beauty Alley OPC · Finance & Administration',
    summary: 'Managed the business records and financial activities needed to keep a growing operation organized.',
    overview: 'For Beauty Alley, I managed financial and administrative records using Google Sheets. My responsibilities covered the full range of routine business finance activities rather than one isolated accounting task.',
    responsibilities: [
      'Recorded and monitored sales, expenses, supplier payments, accounts payable, and payroll.',
      'Tracked cash flow, bank transactions, inventory costs, and business expenses.',
      'Prepared financial reports and maintained organized business records.',
      'Performed bank reconciliation and reviewed records for accuracy.',
      'Managed bookkeeping activities and maintained the financial information needed for business decisions.',
      'Developed familiarity with accounting software and can create an account while continuing to learn the system.',
    ],
    tools: ['Google Sheets', 'Banking records', 'Accounting software — learning/developing'],
    outcome: 'Maintained practical, hands-on finance and administration coverage alongside daily e-commerce operations.',
    Icon: Calculator,
  },
  {
    id: 'ai', number: '04', title: 'AI-Assisted Productivity', category: 'Ongoing learning · 2026',
    summary: 'Building practical AI skills to support writing, research, organization, learning, and repetitive work.',
    overview: 'AI is a developing skill area for me rather than a claim of specialist expertise. I am actively learning and practicing with several tools to understand where AI can make everyday business and administrative work clearer and more efficient.',
    responsibilities: [
      'Use AI for writing, rewording, brainstorming, research, summarization, and organizing information.',
      'Explore templates, workflow ideas, content creation, and repetitive-task support.',
      'Continue learning ChatGPT, Claude, Gemini, Canva AI, GoHighLevel, and Zapier.',
      'Apply AI-assisted thinking to practical business, administrative, e-commerce, and productivity tasks.',
      'Build familiarity with automation concepts while keeping the focus on useful, real-world workflows.',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Canva AI', 'GoHighLevel', 'Zapier'],
    outcome: 'An ongoing skill-development area that complements my existing business operations, finance, and administrative experience.',
    Icon: Robot,
  },
]

function CaseStudyModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])
  return (
    <div className="pmodal" role="dialog" aria-modal="true" aria-label={study.title}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close"><X size={18} weight="bold" /></button>
      <article className="case-study-modal">
        <div className="case-study-modal__top"><span className="case-study-modal__number">{study.number}</span><span className="case-study-modal__category">{study.category}</span></div>
        <div className="case-study-modal__icon"><study.Icon size={26} weight="duotone" /></div>
        <h2>{study.title}</h2>
        <p className="case-study-modal__summary">{study.summary}</p>
        <div className="case-study-modal__section"><h3>Overview</h3><p>{study.overview}</p></div>
        <div className="case-study-modal__section"><h3>What I handled</h3><ul>{study.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className="case-study-modal__section"><h3>Tools &amp; methods</h3><div className="case-study-modal__tags">{study.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
        <div className="case-study-modal__outcome"><strong>Result / scale</strong><span>{study.outcome}</span></div>
      </article>
    </div>
  )
}

export default function ProjectsGrid() {
  const [open, setOpen] = useState<CaseStudy | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const show = useCallback((study: CaseStudy, element: HTMLElement) => { triggerRef.current = element; setOpen(study) }, [])
  const close = useCallback(() => { setOpen(null); requestAnimationFrame(() => triggerRef.current?.focus()) }, [])
  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects &amp; Case Studies</span>
        <h1 className="pgrid__title" id="projects-title">Real business experience, presented as case studies</h1>
        <p className="pgrid__lede">Selected examples from my hands-on e-commerce, inventory, procurement, finance, administration, and ongoing AI-assisted productivity learning. These case studies are based on my actual work experience.</p>
      </header>
      <div className="home__glass pgrid__glass">
        <span className="pgrid__hint" aria-hidden="true"><ArrowUpRight size={14} weight="duotone" /> Open a case study</span>
        <div className="bento bento--projects case-study-grid">
          {CASE_STUDIES.map((study) => {
            const Icon = study.Icon
            return (
              <button key={study.id} type="button" className="bento__card bento__card--btn case-study-card"
                onClick={(event) => show(study, event.currentTarget)} aria-haspopup="dialog">
                <span className="bento__head">
                  <span className="bento__logos"><span className="bento__logo"><Icon size={22} weight="duotone" /></span></span>
                  <span className="bento__title">{study.title}</span>
                  <span className="bento__desc">{study.summary}</span>
                  <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
                </span>
                <span className="case-study-card__meta"><span>{study.number}</span><span>{study.category}</span></span>
              </button>
            )
          })}
        </div>
      </div>
      {open && <CaseStudyModal study={open} onClose={close} />}
    </section>
  )
}
