import React from 'react'
import NextLink from 'next/link'
import Layout from '@/components/layouts/pagelayout'

export default function about() {
  return (
    <Layout title="About Us">
      <h1>about</h1>
      <NextLink href="/" passHref>
        go home (index)
      </NextLink>
    </Layout>
  )
}
