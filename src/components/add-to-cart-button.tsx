'use client'

import { useCart } from '@/contexts/cart-context'

export interface addToCardButtonProps {
  productId: number
}

export function AddToCardButton({ productId }: addToCardButtonProps) {
  const { addToCart } = useCart()
  function handleProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      onClick={handleProductToCart}
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao Carrinho
    </button>
  )
}
