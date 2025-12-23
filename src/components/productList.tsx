import type { Product, Products } from '@/types/products'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

interface ProductQueryParams {
  limit?: number
  skip?: number
  select?: Array<string>
}

const getProductsFn = createServerFn({ method: 'GET' })
  .inputValidator((data: ProductQueryParams) => data)
  .handler(async ({ data }) => {
    const { limit = 30, skip = 0, select = [] } = data

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
  })

const productQueryOptions = (params: ProductQueryParams) => ({
  queryKey: ['products', params],
  queryFn: () => getProductsFn({ data: params }),
})

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>): ProductQueryParams => ({
    limit: Number(search.limit) || 30,
    skip: Number(search.skip) || 0,
    select: search.select ? String(search.select).split(',') : [],
  }),
  loaderDeps: ({ search }) => search,
  loader: ({ context, deps }) => {
    return context.queryClient.ensureQueryData(productQueryOptions(deps))
  },
})

function ProductList() {
  const navigate = useNavigate({ from: '/' })
  const search = useSearch({ from: '/' })
  const { limit, skip, select } = search

  const { data } = useSuspenseQuery(productQueryOptions(search))

  type availableFields = Array<keyof Product>

  return (
    <>
      <main className="flex items-center justify-center w-full h-fit"></main>
    </>
  )
}

export { ProductList }
