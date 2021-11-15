import AppLayout from '@component/layout/AppLayout'
import Banner from '@component/real-estate/Banner'
import Form from '@component/real-estate/Form'
import Product from '@component/real-estate/Product'

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
