'use client'
 
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@radix-ui/react-dialog'

type Props = {
  children: string
}
export function Submit({children}: Props) {
  const { pending } = useFormStatus()
 
  return (
   
    <Button
      type="submit"
      className='bg-blue-950 text-white'
      variant={'outline'}
      disabled={pending}
    >
     {pending ? `Creating ${children}` :  `Add ${children}`}
    </Button>
   
  )
}