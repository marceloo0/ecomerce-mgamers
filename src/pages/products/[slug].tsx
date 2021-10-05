import { useRouter } from 'next/router'
import Dashboard from '~/components/Dashboard'

const Mouses = () => {
  const router = useRouter()
  const { slug } = router.query

  return <Dashboard type={String(slug)} />
}

export default Mouses
