'use server'

import { getAuthSession } from "@/app/api/auth/[...nextauth]/options"
import { db } from "../db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createOrg (
    name: string, 
    description: string , 
    userId: string,
   
) {

const sess = await getAuthSession();
console.log(sess?.user.id);

const existingOrg = await db.organization.findFirst({
  where:{
    name: name
  }

 })

if(existingOrg) {
  throw new Error('already exists')
 }
if(userId) {
await db.organization.create({
    data: {
        name,
        description,
        createdBy: {
          connect: { id: userId }, // Connect the organization to the creator
        },
        members: { // Create a UserRoleOrganization entry for the creator as an admin
          create: {
            userId: userId,
            role: 'ADMIN', // Use the UserRole enum to set the role to 'ADMIN'
          },
        },
      },
      include: {
        members: true, // Include the created UserRoleOrganization entry
      },
    });
  }

  redirect('/organizations')
}


export async function addBug(
  name: string,
  description: string,
  orgId: string,
  status: string,
  pathname: string
) {
  const sess = await getAuthSession();
   console.log(sess?.user.id);
   
  enum BugStatus {
    raised = 'raised',
    Threat = 'Threat',
    resolved = 'resolved',
    Deadline  ='Deadline'
  }

  
  await db.bug.create({
    
    data: {
      title: name,
      description,
      status: status as BugStatus,
      createdBy: {
        connect: {
          id: sess?.user.id// Assuming sessionId is the user's ID
        },
      },
      Organization: {
        connect: {
          id: orgId, // Assuming orgId is the ID of the organization
        },
      },
    },
  });

  revalidatePath(pathname)


}