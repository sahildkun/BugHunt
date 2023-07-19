import Image from 'next/image'
import Link from 'next/link'
import { getAuthSession, options } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import {signIn} from 'next-auth/react'
import { Session } from 'inspector'

export default async function Home() {

; 
  
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div>
        <Link href={'/organizations'}>orgs</Link>
    </div>
    </main>
  )
}
