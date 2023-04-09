import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import Mainlayout from '@/components/layouts/mainlayout'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter()

  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Fonts />
        <Mainlayout router={router}>
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Mainlayout>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default Website
