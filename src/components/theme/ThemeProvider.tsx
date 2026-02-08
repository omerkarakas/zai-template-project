'use client'

import * as React from 'react'

type Theme = 'dark' | 'light'

type ThemeProviderProps = {
  children: React.ReactNode
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  mounted: boolean
}

const initialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null,
  mounted: false,
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  storageKey = 'moka-theme',
  ...props
}: ThemeProviderProps) {
  // Always start with 'light' to match server render, then sync on mount
  const [theme, setThemeState] = React.useState<Theme>('light')
  const [mounted, setMounted] = React.useState(false)

  // On mount: read stored/system theme and apply
  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme
    if (stored && (stored === 'light' || stored === 'dark')) {
      setThemeState(stored)
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      setThemeState(systemTheme)
    }
    setMounted(true)
  }, [storageKey])

  React.useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  const setTheme = React.useCallback((theme: Theme) => {
    localStorage.setItem(storageKey, theme)
    setThemeState(theme)
  }, [storageKey])

  const value = {
    theme,
    setTheme,
    mounted,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
