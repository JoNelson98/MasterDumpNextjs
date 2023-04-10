import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

const prisma = new PrismaClient()

const authOptions = {
  providers: [
    CredentialsProvider({
      adapter: PrismaAdapter(prisma),
      type: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const dbUser = await prisma.user.findUnique({
          where: {
            username: credentials.username
          }
        })

        if (dbUser) {
          if (dbUser.password === credentials.password) {
            return dbUser
          }
        }

        return null
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)
