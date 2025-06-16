"use client"

import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link";

export type Transactions = {
  id: string
  name: string;
  type: "deposit" | "withdrawal" | "swap" | "bridge";
  amount: number;
  status: "pending" | "success" | "failed";
  from: string;
  to: string;
  transaction_hash: string;
}

export const columns: ColumnDef<Transactions>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <span className="size-6 inline-block rounded-full bg-red-300" />
          <span className="text-white font-medium">{row.getValue("name")}</span>
        </div>
      )
    }
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      return (
        <span className="capitalize text-white">{row.getValue("type")}</span>
      )
    }
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "from",
    header: "From",
  },  
  {
    accessorKey: "to",
    header: "To",
  },
  {
    accessorKey: "status",
    header: "Status"
  },
  {
    accessorKey: "transaction_hash",
    header: "Transaction Hash",
    cell: ({ row }) => {
      return (
        <Link
          href={`https://xion.com/${row.getValue("transaction_hash")}`}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "link", size: "link" }),
            "!text-white !decoration-dashed text-sm"
          )}
        >
          {row.getValue("transaction_hash")}
        </Link>
      )
    }
  },
]
