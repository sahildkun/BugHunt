"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { Bug } from "@prisma/client"
import { formatTimeToNow } from "@/lib/utils"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { parseISO } from "date-fns"

export const columns: ColumnDef<Bug>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell:({row}) => {
    
      const timeAgo = formatTimeToNow(new Date(row.getValue('createdAt')))
      return timeAgo
    }
  },

]
