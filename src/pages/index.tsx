import type { NextPage } from 'next'
import { Dashboard, ModalPage } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Dashboard type="products" aria-label="dashboard" />
      {/* <ModalPage login={false} /> */}
    </>
  )
}

export default Home
