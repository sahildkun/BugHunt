import React from 'react'
import CreateOrganisation from '@/components/organization/create'
import { getAuthSession } from '../api/auth/[...nextauth]/options'
type Props = {}

const Create =async (props: Props) => {

  const sess = await getAuthSession();
  
  return (
    <div>
      <CreateOrganisation userId={sess?.user.id!}/>
    </div>
  )
}

export default Create