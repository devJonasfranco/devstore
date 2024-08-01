import { z } from 'zod'
import { NextRequest } from 'next/server'
import data from '../../products/data.json'
export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))
  const products = data.products.filter((product) => {
    return product.title.toLowerCase().includes(query.toLowerCase())
  })

  if (!products) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }

  return Response.json(products)
}
