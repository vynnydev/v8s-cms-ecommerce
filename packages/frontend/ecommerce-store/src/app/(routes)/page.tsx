import getBillboard from '@/infra/http/actions/get-billboard'
// import getProducts from '@/infra/http/actions/get-products'
// import ProductList from '@/presentation/components/product-list'
import Billboard from '@/presentation/components/ui/billboard'
import Container from '@/presentation/components/ui/container'

export const revalidate = 0

const HomePage = async () => {
  // const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard('0e12e5cf-29ab-4529-b8d5-c5371dae1f7b')

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          {/* <ProductList title="Featured Products" items={products} /> */}
        </div>
      </div>
    </Container>
  )
}

export default HomePage
