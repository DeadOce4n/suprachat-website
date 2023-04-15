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

// --- Borrowed from https://gist.github.com/steven-schmoll-at/5b4a886456c7cd9a854bb61f4a2a004a
type CombineAll<T> = T extends { [name in keyof T]: infer Type } ? Type : never
type PropertyNameMap<T, IncludeIntermediate extends boolean> = {
  [name in keyof T]: T[name] extends object
    ?
        | SubPathsOf<name, T, IncludeIntermediate>
        | (IncludeIntermediate extends true ? name : never)
    : name
}
type SubPathsOf<
  key extends keyof T,
  T,
  IncludeIntermediate extends boolean
> = `${string & key}.${string & PathsOf<T[key], IncludeIntermediate>}`
export type PathsOf<
  T,
  IncludeIntermediate extends boolean = false
> = CombineAll<PropertyNameMap<T, IncludeIntermediate>>
// ---
