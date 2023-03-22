import type { ThemeVariant } from '@utils/types'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type ThemeState = {
  variant: ThemeVariant
  toggle: () => void
  setVariant: (variant: ThemeVariant) => void
}

export default create<ThemeState>()(
  devtools(
    persist(
      (set, get) => ({
        variant: 'dark',
        toggle: () =>
          set({ variant: get().variant === 'dark' ? 'light' : 'dark' }),
        setVariant: (variant) => set({ variant })
      }),
      { name: 'theme' }
    )
  )
)
