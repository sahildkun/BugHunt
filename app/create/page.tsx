import React from 'react'
import CreateOrganisation from '@/components/organization/create'
import { getAuthSession } from '../api/auth/[...nextauth]/options'
type Props = {}

const Create = (props: Props) => {

  
  
  return (
    <div>
      <CreateOrganisation/>
    </div>
  )
}

export default Create