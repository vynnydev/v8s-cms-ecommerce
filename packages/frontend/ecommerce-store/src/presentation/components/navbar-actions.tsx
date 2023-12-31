'use client'
import { useEffect, useState } from 'react'

import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'

import Button from '@/presentation/components/ui/button'
import useCart from '@/presentation/hooks/use-cart'

import { ThemeToggle } from '@/presentation/components/theme-toggle'

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const router = useRouter()
  const cart = useCart()

  if (!isMounted) {
    return null
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <ThemeToggle />
      <Button
        onClick={() => router.push('/cart')}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions
