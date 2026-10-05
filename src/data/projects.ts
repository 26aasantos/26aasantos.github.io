export type AppStat = { value: string; label: string }
export type AppProject = { name:string; tagline:string; description:string; imageSrc?:string; imagePosition?:string; accentColor:string; stats:AppStat[]; badge:string }
const DEMO_STATS = [{value:'Demo',label:'Portfolio sample'},{value:'UX',label:'User-focused'},{value:'Web',label:'Responsive'}]
export const mobileApps: AppProject[] = []
export const webApps: AppProject[] = [
 {name:'Lead Capture Demo',tagline:'A clear, conversion-focused page concept.',description:'A portfolio demo showing how information can be organized into a simple lead-capture journey.',accentColor:'#0EA5E9',stats:DEMO_STATS,badge:'Demo'},
 {name:'Booking Demo',tagline:'A streamlined booking experience.',description:'A portfolio demo focused on clear calls to action and a straightforward booking journey.',accentColor:'#7C3AED',stats:DEMO_STATS,badge:'Demo'},
 {name:'Business Website Demo',tagline:'A clean business-facing web presence.',description:'A portfolio demo focused on structure, readability, responsive presentation, and clear next steps.',accentColor:'#16A34A',stats:DEMO_STATS,badge:'Demo'},
]
