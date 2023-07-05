'use client'
import React from 'react'

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { Billboard } from '@prisma/client'

import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface IBillboardClientProps {
  data: Billboard[]
}

export const BillboardClient: React.FC<IBillboardClientProps> = ({ data }) => {
  const params = useParams()
  const router = useRouter()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
    </>
  )
}
