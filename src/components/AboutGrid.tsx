import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Swap the marks below for your own (any square SVG/PNG in public/).
 */

const GWS2 = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const FACEBOOK = { src: '/icons/facebook.svg', name: 'Facebook' }
const SLACK2 = { src: '/icons/slack.svg', name: 'Slack' }
const OPENAI = { src: '/icons/openai.svg', name: 'AI productivity' }
type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'E-commerce Operations', marks: [GWS2, FACEBOOK] },
  { index: '02', title: 'Accounting & Finance Support', marks: [GWS2] },
  { index: '03', title: 'Digital & Social Media', marks: [FACEBOOK] },
  { index: '04', title: 'Remote Business & AI Support', marks: [SLACK2, OPENAI] },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Detail-oriented professional supporting businesses through virtual assistance, e-commerce operations, accounting support, and practical digital workflows.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I combine hands-on business experience with accounting, administrative, e-commerce, and digital skills.\n            <span> My goal is simple: keep work organized, accurate, and moving forward.</span>
          </p>

          <p className="agrid__note">
            My background includes running an e-commerce business and working in Accounts Payable / Procure-to-Pay operations at Accenture. I now bring that practical experience into virtual assistance, bookkeeping, business support, and digital productivity.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/placeholders/badge.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">B.S. Accounting Technology</span>
                <span className="agrid__cell-meta">Cum Laude · 2014–2018</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Remote support · Philippines</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href="mailto:26aasantos@gmail.com">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/placeholders/logo.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">2026 Training & Development</span>
                <span className="agrid__cell-meta">Claude · GoHighLevel · Bookkeeping · Zapier</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt={profile.hero.portraitAlt}
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
