import data from '../../products/data.json'
export async function GET() {
  const featuredProducts = data.products.filter((products) => products.featured)
  return Response.json(featuredProducts)
}
