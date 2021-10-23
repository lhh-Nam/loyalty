import BazarCard from '@component/BazarCard'
import LazyImage from '@component/LazyImage'
import { H2, H4, Span } from '@component/Typography'
import { Container, Grid } from '@material-ui/core'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Style from '@styles/pages/car-loan/Product.module.scss'
import React, { FC } from 'react'

const OtherProduct: FC = () => {
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
              <Grid container fontWeight="bold" pb={1.5}>
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
                  <span>Vay ô tô</span>
                  <span>Eximbank</span>
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
                  <H4 mb={1.5} mt={1}>
                    995.000.000 VNĐ
                  </H4>
                </Grid>

                <Grid
                  container
                  pt={1.5}
                  alignItems="center"
                  className={Style.btnGroup}
                >
                  <Span color="#0098CE" mr={2} fontSize="14px" fontWeight="600">
                    Xem chi tiết gói vay
                  </Span>
                  <ChevronRight fontSize="small" htmlColor="#0098CE" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </BazarCard>
      </Grid>
    )
  }

  return (
    <Container sx={{ my: '70px' }}>
      <Grid container justifyContent="center" mb={5}>
        <Grid item md={6} textAlign="center">
          <H2>Sản phẩm của chúng tôi</H2>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={2}>
        <Grid item xs={12}>
          <Grid container spacing={5}>
            {lstProduct.map((product, idx) => renderProduct(product, idx))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

const lstProduct = [
  {
    imgUrl: '/assets/loyalty/car-loan/car-1.png',
    title: 'BMW X1',
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec',
  },
  {
    imgUrl: '/assets/loyalty/car-loan/car-2.png',
    title: 'BMW X2',
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec',
  },
  {
    imgUrl: '/assets/loyalty/car-loan/car-3.png',
    title: 'BMW X1',
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec',
  },
]

export default OtherProduct
