import { useTheme } from 'next-themes'

export default function useCustomTheme() {
  const { theme, setTheme } = useTheme()
  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return { theme, toggleTheme }
}
