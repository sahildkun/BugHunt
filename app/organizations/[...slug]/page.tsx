import { db } from '@/lib/db'
import React from 'react'
import { format } from 'date-fns'
import { DataTable } from '@/components/bugs/bugTable/data-table'
import { AddBugModal } from '@/components/AddBugForm2'
import { columns } from '@/components/bugs/bugTable/columns'






type Props = {
    params:{
        slug: string
    }
}


const OrganizationDetail = async  ({params}: Props) => {
   const {slug} = params
   console.log(slug[0]);

   const bugs = await db.bug.findMany({
    where:{
      organizationId: slug[0]
    }
   }
   );

   console.log(bugs);

   const admin = await db.userRoleOrganization.findFirst({
    where: {
      organization: {
        id: slug[0],
      },
      role: 'ADMIN', // Filter to find only admin roles
    },
    include: {
      organization: true,
      user: true,
    },
  });
    const org = await  db.organization.findUnique({
        where:{
            id: slug[0],
        }
    })

    



  return (
    <>
    <div className='  border-b-2'>
        <h1 className='text-5xl font-clash'>{org?.name}</h1>
        <div className='flex flex-auto justify-between mt-5'>
        <p className='text-md font-light'>{org?.description}</p>
        <div className='text-md font-roboto '>
        <p>Created at:{format(org?.createdAt!, 'MMMM d, yyyy')}</p>
        <p className='text-xl font-clash py-2'>Created by: {admin?.user.name}</p>
        </div>
        </div>
       
    </div>
 
  
   <div className='my-5'>
    <AddBugModal orgid={org?.id!}/>
    </div>
    <DataTable columns={columns} data={bugs} />
    </>
  )
}

export default OrganizationDetail