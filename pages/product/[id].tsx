import Bimmer from '@component/common/Bimmer'
import BreadcrumbsCustom from '@component/common/Breadcum'
import Contact from '@component/common/Contact'
import AppLayout from '@component/layout/AppLayout'
import { Box } from '@material-ui/core'
import React from 'react'
import MainProduct from './MainProduct'
import OtherProduct from './OtherProduct'
import Statistical from './Statistical'

const ProductDetails = () => {
  const breadcrumbs = [
    { label: 'Trang chủ', link: '/', isActive: false },
    { label: 'Ô tô', link: '/car-loan', isActive: false },
    { label: 'BMW X1', isActive: true },
  ]

  const data = {
    price: 500000000,
    loanRate: 70 / 100,
    loanTerm: 24,
    annualProfit: 6 / 100,
  }

  return (
    <AppLayout>
      <Box sx={{ backgroundColor: 'white', padding: '16px 13%' }}>
        <BreadcrumbsCustom breadcrumbs={breadcrumbs} />
      </Box>
      <MainProduct {...data} />
      <Statistical {...data} />
      <Bimmer />
      <OtherProduct />
      <Contact />
    </AppLayout>
  )
}

export default ProductDetails
