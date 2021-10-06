import { useRouter } from 'next/router'
import { Dashboard } from '../../components'

const Products = () => {
  const router = useRouter()
  const { slug } = router.query

  return <Dashboard type={String(slug)} aria-label="products" />
}

export default Products
