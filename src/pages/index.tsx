import type { NextPage } from 'next'
import { Dashboard } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Dashboard type="products" aria-label="dashboard" />
    </>
  )
}

export default Home
