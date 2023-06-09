import React, { useEffect } from 'react'
import Layout from '@/components/layouts/pagelayout'
import Hero from '@/components/Hero'
import { useTheme } from 'next-themes'
import Carousel from '@/components/Gallery'
import Contact from '@/components/Contact'
import DumpsterDetails from '@/components/DumpsterDetails'

export default function index() {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    console.log('theme', theme)
  }, [theme])

  return (
    <Layout>
      <Hero />
      <DumpsterDetails />
      <Carousel />
      <Contact />
    </Layout>
  )
}
