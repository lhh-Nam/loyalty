import BazarCard from '@component/BazarCard'
import Bimmer from '@component/common/Bimmer'
import Contact from '@component/common/Contact'
import LazyImage from '@component/LazyImage'
import { Container, FormControl, Grid, MenuItem, Select } from '@material-ui/core'
import ChevronRight from '@material-ui/icons/ChevronRight'
import { Pagination } from '@material-ui/lab'
import Style from '@styles/pages/car-loan/Product.module.scss'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { H4, Span } from '../Typography'

const Product: FC = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize] = useState(6)
  const [sort, setSort] = useState('Sắp xếp kết quả')
  const handleChange = (event: any) => {
    setSort(event.target.value)
  }

  const countPage = Math.ceil(lstProduct.length / pageSize)
  // const from = (pageNumber - 1) * pageSize + 1
  // const to = Math.min(from + pageSize - 1, lstProduct.length)

  const handleChangePage = (_: any, newPage: any) => {
    setPageNumber(newPage)
  }

  const getContent = () => {
    return lstProduct.slice(
      (pageNumber - 1) * pageSize,
      (pageNumber - 1) * pageSize + pageSize
    )
  }

  const renderProduct = (product: any, idx: number) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={idx}>
        <BazarCard
          sx={{
            p: '1.5rem',
            height: '100%',
            borderRadius: '16px',
          }}
          hoverEffect
        >
          <Grid container flexDirection="column">
            <Grid item xs={12}>
              <Grid container pb={1.5}>
                <Span>
                  Lãi suất&nbsp;
                  <Span color="#0098CE">6.25</Span>%
                </Span>

                <Span color="grey.500" px={1}>
                  |
                </Span>

                <Span>
                  Ưu đãi
                  <Span color="#0098CE">&nbsp;12&nbsp;</Span>
                  tháng
                </Span>
              </Grid>

              <div className={Style.imgGroup}>
                <LazyImage
                  src={product.imgUrl}
                  width={350}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  borderRadius="8px"
                  // alt={title}
                />

                <div className={Style.text}>
                  <span>Vay tín chấp</span>
                  <span>F5Second</span>
                </div>
              </div>

              <Grid
                container
                flexDirection="column"
                height="100%"
                justifyContent="space-between"
              >
                <Grid>
                  <H4 mb={0.5} mt={1.5}>
                    {product.title}
                  </H4>
                  <Span color="grey.600">{product.sub}</Span>
                  {/* <H4 mb={1.5} mt={1}>
                    79.790.000VNĐ
                  </H4> */}
                </Grid>

                <Link href="/product/1">
                  <Grid
                    container
                    pt={1.5}
                    alignItems="center"
                    className={Style.btnGroup}
                    mt={1}
                  >
                    <Span color="#0098CE" mr={2}>
                      Xem chi tiết gói vay
                    </Span>
                    <ChevronRight fontSize="small" htmlColor="#0098CE" />
                  </Grid>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </BazarCard>
      </Grid>
    )
  }

  return (
    <>
      <Container sx={{ mb: '70px' }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          fontSize="18px"
          pb={1.5}
        >
          <Span>
            Có
            <Span color="#0098CE">&nbsp;68&nbsp;</Span>
            sản phẩm vay phù hợp
          </Span>

          <FormControl size="small" className={Style.select}>
            <Select value={sort} onChange={handleChange}>
              <MenuItem value={'Sắp xếp kết quả'}>Sắp xếp kết quả</MenuItem>
              <MenuItem value={'Sắp xếp kết quả'}>Sắp xếp kết quả</MenuItem>
              <MenuItem value={'Sắp xếp kết quả'}>Sắp xếp kết quả</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid container justifyContent="center" mt={2}>
          <Grid item xs={12}>
            <Grid container spacing={5}>
              {getContent().map((product, idx) => renderProduct(product, idx))}
            </Grid>
          </Grid>
        </Grid>
        <div className={Style.pagin}>
          <Pagination
            count={countPage}
            page={pageNumber}
            shape="rounded"
            onChange={handleChangePage}
          />
        </div>
      </Container>
      <Bimmer />
      <Contact />
    </>
  )
}

const lstProduct = [
  {
    imgUrl: '/assets/loyalty/unsecured-loan/unsecured-loan.png',
    title: 'Gói vay 50 triệu',
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec',
  },
  {
    imgUrl: '/assets/loyalty/unsecured-loan/unsecured-loan.png',
    title: 'Gói vay 50 triệu',
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec',
  },
  {
    imgUrl: '/assets/loyalty/unsecured-loan/unsecured-loan.png',
    title: 'Gói vay 50 triệu',
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec',
  },
  {
    imgUrl: '/assets/loyalty/unsecured-loan/unsecured-loan.png',
    title: 'Gói vay 50 triệu',
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec',
  },
  {
    imgUrl: '/assets/loyalty/unsecured-loan/unsecured-loan.png',
    title: 'Gói vay 50 triệu',
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec',
  },
  {
    imgUrl: '/assets/loyalty/unsecured-loan/unsecured-loan.png',
    title: 'Gói vay 50 triệu',
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec',
  },
  {
    imgUrl: '/assets/loyalty/unsecured-loan/unsecured-loan.png',
    title: 'Gói vay 50 triệu',
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec',
  },
  {
    imgUrl: '/assets/loyalty/unsecured-loan/unsecured-loan.png',
    title: 'Gói vay 50 triệu',
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec',
  },
]

export default Product
