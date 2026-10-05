import { Briefcase, Calculator, Buildings, Sparkle } from 'lucide-react'

type Experience = {
  year: string
  title: string
  company: string
  summary: string
  bullets: string[]
  tags: string[]
  Icon: typeof Briefcase
}

const EXPERIENCE: Experience[] = [
  {
    year: '2020–2025',
    title: 'Business Owner | E-commerce Operations & Administration',
    company: 'Beauty Alley OPC',
    summary:
      'Managed the business from the ground up, overseeing end-to-end operations across e-commerce, administration, finance, procurement, inventory, logistics, customer service, and sales.',
    bullets: [
      'Managed both retail and wholesale operations, including 1,000–2,000 SKUs across product listings, inventory, purchasing, and distribution.',
      'Processed 100+ orders per day, with peak periods reaching approximately 1,000–2,000 orders.',
      'Managed Shopee and Lazada seller operations, including listings, orders, promotions, customer support, and fulfillment.',
      'Coordinated suppliers, couriers, purchasing, inventory, and product distribution.',
      'Managed business records, expenses, budgeting, payroll, supplier payments, bookkeeping, and cash-flow monitoring.',
      'Supervised and trained a team of fewer than 10 employees and coordinated daily workflows.',
      'Managed supplier relationships, including pricing, discounts, payment terms, and product requirements.',
      'Managed online promotions and sales activities across Facebook, Instagram, TikTok, Shopee, and Lazada.',
    ],
    tags: ['E-commerce', 'Operations', 'Finance', 'Procurement', 'Leadership'],
    Icon: Briefcase,
  },
  {
    year: '2018–2019',
    title: 'Accounts Payable (P2P) Operations Associate',
    company: 'Accenture Philippines',
    summary:
      'Supported Accounts Payable and Procure-to-Pay operations, handling invoice, payment, vendor, and expense-related transactions.',
    bullets: [
      'Processed invoices with and without purchase orders.',
      'Processed payment transactions and supported payment posting activities.',
      'Reviewed vendor statements and helped resolve payment-related issues.',
      'Processed and reviewed employee expense reports and other AP transactions.',
      'Maintained accurate processing and completion of assigned transactions.',
    ],
    tags: ['Accounts Payable', 'P2P', 'Invoice Processing', 'Payments'],
    Icon: Calculator,
  },
  {
    year: '2017',
    title: 'Bank Intern',
    company: 'Land Bank of the Philippines',
    summary:
      'Supported branch operations through administrative, documentation, data-entry, and customer-facing activities while gaining hands-on exposure to banking processes.',
    bullets: [
      'Assisted with client documents, forms, and banking records.',
      'Supported data entry, filing, and report preparation.',
      'Assisted clients with transaction forms and basic banking inquiries.',
      'Helped maintain accurate transaction records and financial logs.',
      'Gained practical experience in banking operations, customer service, and data management.',
    ],
    tags: ['Banking', 'Administration', 'Customer Service', 'Records'],
    Icon: Buildings,
  },
]

export default function ExperienceGrid() {
  return (
    <section className="pgrid tgrid" aria-labelledby="experience-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Experience &amp; Expertise</span>
        <h1 className="pgrid__title" id="experience-title">
          Experience that supports the work
        </h1>
        <p className="pgrid__lede">
          A hands-on background in e-commerce operations, accounting and finance,
          administration, and business management, now complemented by practical
          AI-assisted productivity skills.
        </p>
      </header>

      <div className="home__glass tgrid__glass tgrid__experience-shell">
        <div className="tgrid__career-panel">
          <div className="tgrid__career-photo">
            <img
              src="/profile-photo.png"
              alt="Alessandra Santos"
              decoding="async"
            />
            <div className="tgrid__career-photo-overlay" aria-hidden="true" />
            <div className="tgrid__career-photo-copy">
              <span>Career foundation</span>
              <strong>Business operations, finance &amp; e-commerce</strong>
            </div>
          </div>

          <div className="tgrid__metrics" aria-label="Experience highlights">
            <div><strong>5+</strong><span>Years e-commerce</span></div>
            <div><strong>1K–2K</strong><span>SKUs managed</span></div>
            <div><strong>100+</strong><span>Daily orders</span></div>
            <div><strong>&lt;10</strong><span>Employees supervised</span></div>
          </div>

          <div className="tgrid__ai-note">
            <Sparkle size={18} weight="duotone" aria-hidden="true" />
            <div>
              <strong>AI-Assisted Productivity</strong>
              <span>Developing practical skills in AI-supported writing, research, organization, and repetitive work.</span>
            </div>
          </div>
        </div>

        <div className="tgrid__ledger">
          <div className="tgrid__ledger-head">
            <h2 className="tgrid__ledger-title">Professional experience</h2>
            <p className="tgrid__ledger-sub">
              A progression from finance and banking into hands-on business ownership and operations.
            </p>
          </div>

          <ol className="tgrid__timeline">
            {EXPERIENCE.map((item) => {
              const Icon = item.Icon
              return (
                <li key={item.year} className="tgrid__timeline-item">
                  <div className="tgrid__timeline-marker" aria-hidden="true">
                    <Icon size={19} strokeWidth={2} />
                  </div>
                  <div className="tgrid__timeline-content">
                    <div className="tgrid__timeline-top">
                      <span className="tgrid__timeline-year">{item.year}</span>
                      <span className="tgrid__timeline-company">{item.company}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p className="tgrid__timeline-summary">{item.summary}</p>
                    <ul className="tgrid__timeline-bullets">
                      {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                    <ul className="tgrid__timeline-tags" aria-label="Skills">
                      {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
