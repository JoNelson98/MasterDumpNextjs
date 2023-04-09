import React from 'react'
import NextLink from 'next/link'
import Layout from '@/components/layouts/pagelayout'
import Carousel from '@/components/Gallery'

export default function gallery() {
  return (
    <Layout>
      <Carousel />
    </Layout>
  )
}
