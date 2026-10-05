export type FunnelTag = 'Lead Capture' | 'Booking' | 'Checkout' | 'Website'
export type Funnel = { file:string; label:string; tag:FunnelTag; desc:string; dir?:'funnels'|'samples' }
const funnel = (n:string, tag:FunnelTag):Funnel => ({ file:`placeholder-funnel-${n}.html`, label:`${tag} demo ${n}`, tag, desc:`A portfolio demonstration exploring a ${tag.toLowerCase()} experience.` })
const site = (n:string):Funnel => ({ file:`placeholder-site-${n}.html`, label:`Business website demo ${n}`, tag:'Website', desc:'A portfolio demonstration focused on clear structure, responsive presentation, and a practical user journey.', dir:'samples' })
export const gymFunnel = [funnel('01','Lead Capture'), funnel('02','Checkout'), funnel('03','Lead Capture')]
export const bookingFunnel = [funnel('04','Booking'), funnel('05','Booking'), funnel('06','Booking')]
export const websiteFunnel = ['01','02','03','04','05','06'].map(site)
export const tagColors: Record<FunnelTag,string> = { 'Lead Capture':'#8b5cf6', Booking:'#ec4899', Checkout:'#f59e0b', Website:'#FF7A1A' }
