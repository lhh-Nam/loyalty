import Banner from '@component/car-loan/Banner'
import Form from '@component/car-loan/Form'
import Product from '@component/car-loan/Product'
import AppLayout from '@component/layout/AppLayout'
import { useState } from 'react'

const IndexPage = () => {
  const [filter, setFilter] = useState({})
  return (
    <AppLayout>
      <Banner />
      <Form setFilter={setFilter} />
      <Product filter={filter} />
    </AppLayout>
  )
}

export default IndexPage
