import AppLayout from '@component/layout/AppLayout'
import Banner from '@component/unsecured-loan/Banner'
import Form from '@component/unsecured-loan/Form'
import Product from '@component/unsecured-loan/Product'

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
