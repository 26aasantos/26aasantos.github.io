import { useMemo } from 'react'

type Tool = {
  name: string
  iconPath?: string
  color?: string
  mark?: string
}

export const tools: Tool[] = [
  { name: 'Google Workspace', iconPath: '/icons/googleworkspace.svg' },
  { name: 'QuickBooks', iconPath: '/icons/tools/quickbooks.png' },
  { name: 'Xero', iconPath: '/icons/tools/xero.png' },
  { name: 'Shopee', iconPath: '/icons/tools/shopee.png' },
  { name: 'Shopify', iconPath: '/icons/tools/shopify.png' },
  { name: 'TikTok', iconPath: '/icons/tools/tiktok.png' },
  { name: 'Amazon', iconPath: '/icons/tools/amazon.png' },
  { name: 'Claude', iconPath: '/icons/ai/claude-color.svg' },
  { name: 'GHL', iconPath: '/icons/gohighlevel.png' },
  { name: 'ChatGPT', iconPath: '/icons/openai.svg' },
  { name: 'Gemini', iconPath: '/icons/tools/gemini.png' },
  { name: 'Canva', iconPath: '/icons/tools/canva.png' },
  { name: 'Trello', iconPath: '/icons/tools/trello.png' },
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
