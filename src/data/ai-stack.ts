import { Sparkle, Article, MagnifyingGlass, ChatCircleDots, FlowArrow, type Icon } from '@/components/slab'
import { profile } from '@/data/profile'
export type StackStatus = 'Live' | 'Internal' | 'Beta'
export type StackLogo = { src:string; name:string }
export type StackNode = { id:string; name:string; what:string; stack?:string; status?:StackStatus; Icon:Icon; logos?:StackLogo[]; children?:StackNode[] }

export const aiStack: StackNode = {
  id:'root', Icon:Sparkle, name:profile.name,
  what:'Practical AI-assisted support for writing, research, communication, organization, and repetitive work.',
  stack:'AI-assisted productivity', status:'Internal',
  children:[
    { id:'writing', Icon:Article, name:'AI-Assisted Writing', what:'Use AI to help draft, refine, and organize business communication and written content.', stack:'Writing support', status:'Internal' },
    { id:'research', Icon:MagnifyingGlass, name:'Research Support', what:'Use AI to speed up information gathering, summarization, and first-pass research.', stack:'Research support', status:'Internal' },
    { id:'communication', Icon:ChatCircleDots, name:'Communication Support', what:'Use AI to help prepare clear emails, messages, and client-facing communication.', stack:'Communication', status:'Internal' },
    { id:'workflow', Icon:FlowArrow, name:'Workflow Improvement', what:'Explore practical ways AI can reduce repetitive work and make recurring tasks easier to manage.', stack:'Workflow support', status:'Beta' },
  ],
}
