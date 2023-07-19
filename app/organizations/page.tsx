import React from 'react'
import Link from 'next/link'
import { db } from '@/lib/db'
import { Organization } from '@prisma/client'
type Props = {}

const Organizations = async (props: Props) => {

  const orgs = await db.organization.findMany();
  
  return (
    <div className=''>
       <h1 className='text-5xl font-clash'>Organizations</h1> 
       <div>{orgs.map((org: Organization) =>{ 
       
       return(
        <ul className='flex flex-col'  key={org.id}>
       <Link href={`/organizations/${org.id}`}>
       <li> {org.name}</li>
        </Link>
        </ul>
        )
        }) 
        }</div>
    </div>
  )
}

export default Organizations