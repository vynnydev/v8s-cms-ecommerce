import Link from 'next/link'
import Image from 'next/image'

import MainNav from '@/presentation/components/main-nav'
import Container from '@/presentation/components/ui/container'
import NavbarActions from '@/presentation/components/navbar-actions'
import getCategories from '@/infra/http/actions/get-categories'

const Navbar = async () => {
  const categories = await getCategories()

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <div className="mr-2">
            <Image src="/k8s.png" width={40} height={40} alt="icons" />
          </div>
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">V8S STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
