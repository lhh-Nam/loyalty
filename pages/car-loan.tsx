import Banner from '@component/car-loan/Banner'
import Form from '@component/car-loan/Form'
import Product from '@component/car-loan/Product'
import AppLayout from '@component/layout/AppLayout'

const IndexPage = () => {
  return (
    <AppLayout>
      <Banner />

      <Form />
      <Product />
    </AppLayout>
  )
}

export default IndexPage
