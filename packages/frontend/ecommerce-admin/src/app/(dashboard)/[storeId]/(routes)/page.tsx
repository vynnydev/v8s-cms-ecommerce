import React from 'react'
import prismadb from '@/infra/http/prisma/prismadb'

interface IDashboardPageProps {
  params: { storeId: string }
}

const DashboardPage: React.FC<IDashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  })

  return <div>Active Store: {store?.name}</div>
}

export default DashboardPage
