import type { NextPage } from 'next'
import { Dashboard } from '~/components/Dashboard'
import Layout from '~/components/Layout'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  return (
    <>
      <Dashboard type="products" />
    </>
  )
}

export default Home
