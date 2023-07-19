'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { createOrg } from '@/lib/actions/userAction'
import { Submit } from '../Submit'
type Props = {}

const CreateOrganisation = (props: Props) => {

  
  
  const [name, setName] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  return (
    <div className='text-center p-10'>
       <h1 className='text-4xl font-clash'>Create Organisation</h1> 
        <div className='bg-white dark:bg-slate-900 m-5 p-5 rounded-md shadow-xl'>
            
      <form action={() => createOrg(name,desc)} className='flex flex-col gap-y-3'>
        <Input
      value={name}
      placeholder='Enter Organisation name'
      onChange={(e) => setName(e.target.value)}
      className='pl-6 '
    />
    <Input
      value={desc}
      placeholder='Enter description of organisation'
      onChange={(e) => setDesc(e.target.value)}
      className='pl-6 '
    />
      <Submit>Organisation</Submit>
    </form>
        </div>
    </div>
  )
}

export default CreateOrganisation