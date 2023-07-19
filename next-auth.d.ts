// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation


import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'
import { UserRole } from '@prisma/client'
type UserId = string

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
    role: UserRole
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId
      role: UserRole
    }
  }
}