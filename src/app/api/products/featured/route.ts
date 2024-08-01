import data from '../../products/data.json'
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const featuredProducts = data.products.filter((products) => products.featured)
  return Response.json(featuredProducts)
}
