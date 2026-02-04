'use client'

import * as React from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'moka-theme',
  ...props
}: ThemeProviderProps) {
  // Start with default theme to avoid hydration mismatch
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)

  // Read from localStorage after mount
  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme
    if (stored) {
      setThemeState(stored)
    }
  }, [storageKey])

  React.useEffect(() => {
    const root = window.document.documentElement

    console.log('[ThemeProvider] useEffect running, theme:', theme)
    console.log('[ThemeProvider] Root element classes before:', root.className)

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      console.log('[ThemeProvider] System theme applied, classes after:', root.className)
      return
    }

    root.classList.add(theme)
    console.log('[ThemeProvider] Theme applied, classes after:', root.className)
  }, [theme])

  const setTheme = React.useCallback((theme: Theme) => {
    console.log('[ThemeProvider] setTheme called with:', theme)
    localStorage.setItem(storageKey, theme)
    setThemeState(theme)
  }, [storageKey])

  const value = {
    theme,
    setTheme,
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
