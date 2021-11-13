import AppLayout from '@component/layout/AppLayout'
import Banner from '@component/motor-loan/Banner'
import Form from '@component/motor-loan/Form'
import Product from '@component/motor-loan/Product'

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
