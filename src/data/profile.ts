import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Alessandra Santos',
  firstName: 'Alessandra',
  handle: '@alessandrasantos',
  role: 'Virtual Assistant | Business & AI Support',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'Portfolio profile',
  email: '26aasantos@gmail.com',
  location: 'Philippines',
  stats: [
    { value: '5+ yrs', label: 'E-commerce', Icon: Briefcase },
    { value: '2+ yrs', label: 'Accounting & Finance', Icon: SealCheck },
    { value: 'AI-ready', label: 'Digital workflows', Icon: Clock },
  ],
  displayName: { line1: 'Virtual Assistant', line2: 'Business & AI Support' },
  hero: {
    body: 'I help entrepreneurs and growing businesses stay organized, responsive, and efficient through dependable virtual assistance, business operations, and practical AI-powered workflows.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Alessandra Santos',
  },
  socials: [
    { label: 'GitHub profile', href: 'https://github.com/26aasantos', iconPath: '/icons/github.svg' },
  ],
}
