import Banner from '@component/credit-card/Banner'
import Form from '@component/credit-card/Form'
import Product from '@component/credit-card/Product'
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
