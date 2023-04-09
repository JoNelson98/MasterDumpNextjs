import Footer from '../Footer'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import Example from '../Nav'

export default function Mainlayout({ children, router }) {
  const [theme, setTheme] = useState('light')

  const margin = router.pathname === '/' ? 'xl:mt-0' : 'xl:mt-32'

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const bodyClassNames = classNames({
    'bg-white text-gray-800': theme === 'light',
    'bg-gray-800 text-white': theme === 'dark'
  })
  return (
    <div>
      <Head>
        <meta
          name="theme-color"
          content={theme === 'light' ? '#ffffff' : '#1a202c'}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="MasterDump LLC" />
        <meta name="author" content="Jonathan Nelson" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="MasterDump LLC" />
        <meta name="og:title" content="MasterDump LLC" />
        <title>MasterDump - LLC</title>
      </Head>

      <Example />
      <div className={margin}>{children}</div>
      <Footer />
    </div>
  )
}
