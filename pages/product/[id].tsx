import Bimmer from '@component/common/Bimmer'
import Contact from '@component/common/Contact'
import AppLayout from '@component/layout/AppLayout'
import React from 'react'
import MainProduct from './MainProduct'
import OtherProduct from './OtherProduct'
import Statistical from './Statistical'

const ProductDetails = () => {
  return (
    <AppLayout>
      <MainProduct />
      <Statistical />
      <Bimmer />
      <OtherProduct />
      <Contact />
    </AppLayout>
  )
}

export default ProductDetails
