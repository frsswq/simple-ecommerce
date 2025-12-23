import type { Products } from '@/types/products'
import { createFileRoute, useLoaderData } from '@tanstack/react-router'

interface ProductQueryParams {
  limit?: number
  skip?: number
  select?: Array<string>
}

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>): ProductQueryParams => ({
    limit: Number(search.limit) || 30,
    skip: Number(search.skip) || 0,
    select: search.select ? String(search.select).split(',') : [],
  }),

  loaderDeps: ({ search }) => search,

  loader: async ({ deps }) => {
    const { limit = 30, skip = 0, select = [] } = deps

    const params = new URLSearchParams({
      limit: limit.toString(),
      skip: skip.toString(),
    })

    if (select.length > 0) {
      params.append('select', select.join(','))
    }

    const response = await fetch(`https://dummyjson.com/products?${params}`)

    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }

    return response.json() as Promise<Products>
  },

  component: App,
})

function App() {
  const data = useLoaderData({ from: '/' })

  return (
    <main className="flex items-center justify-center w-full h-fit px-12 py-8">
      <div>
        <div className="grid grid-cols-6 gap-4">
          {data.products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col h-full bg-neutral-50 border border-neutral-200 p-4"
            >
              <img
                className="aspect-square object-cover mb-auto"
                src={product.images[0]}
              />
              <h3 className="text-sm tracking-tight leading-tight">
                {product.title}
              </h3>
              <p className="text-[13px] pt-1">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
