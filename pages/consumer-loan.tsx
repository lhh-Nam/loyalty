import Banner from '@component/consumer-loan/Banner'
import Form from '@component/consumer-loan/Form'
import Product from '@component/consumer-loan/Product'
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
