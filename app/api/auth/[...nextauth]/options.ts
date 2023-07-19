import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import { db } from '@/lib/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { getServerSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export const options: NextAuthOptions = {
    adapter: PrismaAdapter(db),
  
    session:{
      strategy: 'jwt'
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
      
      
    ],
    callbacks: {
      
      async session({ token, session }) {
        if (token) {
          session.user.id = token.id
          session.user.name = token.name
          session.user.email = token.email
          session.user.image = token.picture
        
        }
  
        return session
      },
  
      async jwt({ token, user }) {
          const dbUser = await db.user.findFirst({
            where: {
              email: token.email,
            },
          })
    
          if (!dbUser) {
            token.id = user!.id
            return token
          }
    
          
          return {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            picture: dbUser.image,
            
          }
        },
        redirect() {
          return '/'
        },  
      
    }
}
export const getAuthSession = () => getServerSession(options)