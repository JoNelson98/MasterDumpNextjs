const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
  const formData = JSON.parse(req.body)
  const savedFormEntry = await prisma.form.create({
    data: formData
  })
  res.json(savedFormEntry)
}
