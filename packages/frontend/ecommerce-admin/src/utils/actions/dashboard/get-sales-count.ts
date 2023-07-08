import prismadb from '@/infra/http/prisma/prismadb'

export const getSalesCount = async (storeId: string) => {
  const salesCount = await prismadb.order.count({
    where: {
      storeId,
      isPaid: true,
    },
  })

  return salesCount
}
