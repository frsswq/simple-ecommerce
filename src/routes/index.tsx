import { ProductList } from '@/components/productList'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <ProductList />
    </>
  )
}
