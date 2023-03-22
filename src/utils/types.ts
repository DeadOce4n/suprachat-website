export const roles = ['normal', 'admin'] as const

export type Roles = (typeof roles)[number]

export type Page = {
  name: string
  route: string
}

export type ThemeVariant = 'dark' | 'light'

export type Theme = {
  variant: ThemeVariant
}
