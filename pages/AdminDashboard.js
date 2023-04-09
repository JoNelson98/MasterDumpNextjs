import React, { useState } from 'react'
import { PrismaClient } from '@prisma/client'
import ResetContainer from '@/components/subComponents/ResetContainer'
import DataTable from '@/components/Table'
import Login from '@/components/Login'
import { useSession } from 'next-auth/react'

const prisma = new PrismaClient()
export async function getServerSideProps() {
  const applicants = await prisma.form.findMany()
  return {
    props: {
      applicants: JSON.parse(JSON.stringify(applicants))
    }
  }
}

export default function Admin({ applicants }) {
  const { data: session, status } = useSession()

  return (
    <ResetContainer>
      {status === 'authenticated' ? (
        <DataTable applicants={applicants} />
      ) : (
        <Login />
      )}
    </ResetContainer>
  )
}
