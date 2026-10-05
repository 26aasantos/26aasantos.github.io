import { useMemo } from 'react'

type Tool = {
  name: string
  iconPath?: string
  color?: string
  mark?: string
}

export const tools: Tool[] = [
  { name: 'Google Workspace', iconPath: '/icons/googleworkspace.svg' },
  { name: 'QuickBooks', mark: 'QB' },
  { name: 'Xero', mark: 'X' },
  { name: 'Shopee', mark: 'S' },
  { name: 'Shopify', mark: 'S' },
  { name: 'TikTok', mark: '♪' },
  { name: 'Amazon', mark: 'a' },
  { name: 'Claude', iconPath: '/icons/ai/claude-color.svg' },
  { name: 'GHL', iconPath: '/icons/gohighlevel.png' },
  { name: 'ChatGPT', iconPath: '/icons/openai.svg' },
  { name: 'Gemini', mark: '✦' },
  { name: 'Canva', mark: 'C' },
  { name: 'Trello', mark: '▦' },
]

export default function ToolsMarquee() {
  const doubled = useMemo(() => [...tools, ...tools], [])

  return (
    <section className="tools-marquee" aria-label="Tools I work with" data-reveal>
      <div className="tools-marquee__track" aria-hidden="true">
        {doubled.map((tool, i) => (
          <div key={`${tool.name}-${i}`} className="tools-marquee__item">
            <span className="tools-marquee__tile">
              {tool.iconPath ? (
                <img className="tools-marquee__img" src={tool.iconPath} alt="" aria-hidden="true" loading="lazy" decoding="async" width={20} height={20} />
              ) : (
                <span className="tools-marquee__mark" aria-hidden="true">{tool.mark}</span>
              )}
            </span>
            <span className="tools-marquee__label">{tool.name}</span>
          </div>
        ))}
      </div>
      <ul className="sr-only">
        {tools.map((t) => <li key={t.name}>{t.name}</li>)}
      </ul>
    </section>
  )
}
