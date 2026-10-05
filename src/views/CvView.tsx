import { ArrowUpRight } from '@/components/slab'
import '@/styles/cv.css'

const experience = [
  {
    company: 'Beauty Alley OPC',
    role: 'Business Owner | PH E-commerce Entrepreneur | Retailer & Wholesaler',
    dates: '2020–2025',
    bullets: [
      'Managed the everyday operations of the e-commerce beauty business, including staff, sales, logistics, and customer service.',
      'Supervised and trained employees to support smooth workflows, productivity, and quality standards.',
      'Coordinated with suppliers and couriers for timely product delivery.',
      'Prepared and reviewed sales reports, inventory records, and business performance summaries.',
      'Managed budgeting, expense tracking, payroll, supplier payments, and cash-flow monitoring.',
      'Oversaw bookkeeping, BIR-related compliance, inventory, warehouse operations, and product distribution.',
      'Evaluated suppliers and negotiated pricing, discounts, and payment terms.',
      'Managed online listings, promotions, campaigns, and social media activities across Facebook, Instagram, TikTok, Shopee, and Lazada.',
    ],
  },
  {
    company: 'Accenture PH',
    role: 'Accounts Payable (PTP) Procure to Pay Operations Associate',
    dates: '2018–2019',
    bullets: [
      'Managed and executed Accounts Payable processes and monitored assigned transaction performance.',
      'Processed pre-coded invoices with and without purchase orders.',
      'Ensured assigned invoices were properly accounted for at the end of each business day.',
      'Supported invoice indexing and payment transaction processing.',
      'Analyzed vendor statements and supported payment posting and issue resolution.',
      'Processed cheque payments and reviewed electronic expense reports for payment or rejection.',
    ],
  },
  {
    company: 'Land Bank of the Philippines',
    role: 'Bank Intern',
    dates: '2017',
    bullets: [
      'Assisted with client documents, forms, and records for banking transactions.',
      'Supported data entry, filing, and report preparation.',
      'Guided clients in completing transaction forms and responded to basic banking inquiries.',
      'Helped reconcile daily transactions and maintained accurate financial logs.',
      'Gained hands-on experience in banking operations, customer relations, and data management.',
    ],
  },
]

const skills = [
  'Business Operations Management',
  'E-Commerce Management',
  'Procurement & Accounts Payable (P2P)',
  'Financial Reporting & Bookkeeping',
  'Vendor & Supplier Relations',
  'Inventory & Logistics Coordination',
  'Customer Relationship Management',
  'Administrative & Clerical Support',
  'Microsoft Office Suite',
  'Google Workspace',
  'QuickBooks / Xero / SAP / Oracle',
  'Shopee & Lazada Seller Platforms',
  'Canva / CapCut / Meta Business Suite',
  'Social Media Marketing',
  'Data Entry & Record Management',
]

const certifications = [
  'Virtual Bookkeeping with QuickBooks Online — Accounting Ace, March 2025',
  'Australian Bookkeeping using Xero Accounting Software — Accounting Ace, March 2025',
  'Advanced Excel Workshop: Master Excel Formulas, Functions & Analysis for Accountants and Bookkeepers — MST Connect, May 2025',
  'Virtual Assistant Social Media Marketing Course — Freelance Academy, June 2025',
  'Real Estate Virtual Assistant Course — Freelance Academy, June 2025',
]

export default function CvView() {
  return (
    <main className="cv-page">
      <div className="cv-actions">
        <a className="cv-action" href="/" aria-label="Back to portfolio">Back to portfolio</a>
        <button className="cv-action cv-action--primary" type="button" onClick={() => window.print()}>
          Print / Save as PDF
          <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
        </button>
      </div>

      <article className="cv-paper">
        <header className="cv-header">
          <div>
            <p className="cv-kicker">Virtual Assistant | Business & AI Support</p>
            <h1>Alessandra Santos</h1>
            <p className="cv-contact">Philippines · 26aasantos@gmail.com · +639087771359</p>
          </div>
          <div className="cv-header-note">Professional Resume</div>
        </header>

        <section className="cv-section cv-summary">
          <h2>Professional Summary</h2>
          <p>
            Highly motivated and detail-oriented professional with hands-on experience in accounting processes,
            e-commerce management, and administrative operations. Strong organizational skills, accuracy in
            financial documentation, and experience handling business operations under minimal supervision.
            Currently developing practical AI-assisted productivity skills to complement business, finance,
            administration, and e-commerce experience.
          </p>
        </section>

        <section className="cv-section">
          <h2>Core Skills & Competencies</h2>
          <div className="cv-skill-grid">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section className="cv-section">
          <h2>Professional Experience</h2>
          <div className="cv-timeline">
            {experience.map((item) => (
              <article className="cv-role" key={item.company}>
                <div className="cv-role-top">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span>{item.dates}</span>
                </div>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>Education</h2>
          <div className="cv-education">
            <strong>Bachelor of Science in Accounting Technology</strong>
            <span>STI College Global City · 2014–2018 · Cum Laude</span>
          </div>
        </section>

        <section className="cv-section">
          <h2>Certifications & Training</h2>
          <ul className="cv-list">
            {certifications.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="cv-section cv-footer-note">
          <h2>AI-Assisted Productivity</h2>
          <p>
            Developing practical skills in AI-supported writing, research, organization, learning, content creation,
            and repetitive work using tools such as ChatGPT, Claude, Gemini, Canva AI, GoHighLevel, and Zapier.
          </p>
        </section>
      </article>
    </main>
  )
}
