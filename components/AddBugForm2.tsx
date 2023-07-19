'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import TextareaAutosize from 'react-textarea-autosize'
import {useState} from 'react'
import { addBug } from "@/lib/actions/userAction"
import {Submit} from '../app/Submit'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname } from "next/navigation";
type Props = {
    orgid: string
    
}

export function AddBugModal(props: Props) {
    const [name, setName] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [status, setStatus] = useState<string>('raised')
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    
    console.log(pathname);
    

     const addMyBugs = async () => {
      
        await addBug(name, desc, props.orgid, status,pathname );
        setName('');
        setDesc('');
        setOpen(false);
        
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger  asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>Add bug</Button>
      </DialogTrigger>
      <DialogContent className="w-1/2">
      
        <form action={() => addMyBugs()} className="flex flex-col space-y-2" >
        <TextareaAutosize
        value={name}
        placeholder='Bug title'
        onChange={(e) => setName(e.target.value)}
      className='w-auto  resize-none appearance-none overflow-hidden  bg-transparent text-2xl font-bold focus:outline-none'
        />
        <TextareaAutosize
         value={desc}
         placeholder='Add description...'
         onChange={(e) => setDesc(e.target.value)}
        
      className='w-auto font-extralight resize-none pb-20 appearance-none overflow-hidden bg-transparent text-md  focus:outline-none'
      />
      
        <DialogFooter>
          <div>
      <Select  onValueChange={(value) =>
      {
        setStatus(value)
       }
      }>
      <SelectTrigger
      className="w-[180px]">
        <SelectValue defaultValue={status} placeholder="Add status" />
      </SelectTrigger>
      <SelectContent  >
        <SelectGroup>
         
          <SelectItem value="raised">Raised</SelectItem>
          <SelectItem value="Threat">Threat</SelectItem>
          <SelectItem value="resolved">Resolved</SelectItem>
          <SelectItem value="Deadline">Deadline</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>
          
          <Submit>Issue</Submit>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
