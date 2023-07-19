import { getAuthSession } from '@/app/api/auth/[...nextauth]/options'
import React from 'react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ModeToggle } from './theme/themeToggle'
type Props = {}

const Navbar = async (props: Props) => {
    const sess = await getAuthSession()
  return (
    <div className='fixed top-5 right-2 flex flex-row items-center space-x-5'>
        <ModeToggle/>
        {
            sess?.user ? 
            <>
            <Link className={buttonVariants()} href="/api/auth/signout">Sign Out</Link>
            </> 
            :
            <Link href='/sign-in' className={buttonVariants()}>
            Sign In
          </Link>
        }
    </div>
  )
}

export default Navbar