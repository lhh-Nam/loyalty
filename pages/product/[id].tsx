import Bimmer from '@component/common/Bimmer'
import BreadcrumbsCustom from '@component/common/Breadcum'
import Contact from '@component/common/Contact'
import AppLayout from '@component/layout/AppLayout'
import MainProduct from '@component/product/MainProduct'
import OtherProduct from '@component/product/OtherProduct'
import Statistical from '@component/product/Statistical'
import { Box } from '@material-ui/core'
import { getCarDetail } from 'apis/product/car'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const ProductDetails = () => {
  const breadcrumbs = [
    { label: 'Trang chủ', link: '/', isActive: false },
    { label: 'Ô tô', link: '/car-loan', isActive: false },
    { label: 'BMW X1', isActive: true },
  ]
  const router = useRouter()
  const productId = router.query.id

  const [contentPage, setContentPage] = useState({
    price: 0,
    banks: [],
    loanTermMax: 24,
    loanRate: 0,
    interestRate: 0,
    auto_product: {
      name: 'BMW 1',
      description: 'BMW 1',
    },
    currentBank: '',
    fetchingVirtual: true,
  })

  const { data, isFetching } = useQuery(['carQuery', productId], () =>
    getCarDetail(productId)
  )

  useEffect(() => {
    if (!data) return
    const bank = data.banks[0]
    setContentPage({
      ...contentPage,
      ...data,
      loanTermMax: data?.auto_product?.maxTenor,
      price: parseInt(data?.price),
      currentBank:
        data.banks?.find((item: any) => item?.name === router.query?.bank)?.code ||
        bank?.code,
      interestRate: (data?.auto_product?.interestRate || 6) / 100,
      loanRate: bank?.loanRate / 100,
      fetchingVirtual: false,
    })
  }, [data])

  if (isFetching || contentPage.fetchingVirtual) return <></>

  return (
    <AppLayout>
      <Box sx={{ backgroundColor: 'white', padding: '16px 13%' }}>
        <BreadcrumbsCustom breadcrumbs={breadcrumbs} />
      </Box>
      <MainProduct {...contentPage} />
      <Statistical {...contentPage} />
      <Bimmer />
      <OtherProduct />
      <Contact />
    </AppLayout>
  )
}

export default ProductDetails
