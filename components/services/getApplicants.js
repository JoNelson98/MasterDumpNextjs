import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async () => {
  const applicants = await prisma.applicant.findMany()
  return applicants
}
