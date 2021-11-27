import LazyImage from '@component/LazyImage'
import { H3, Span } from '@component/Typography'
import { Container, Grid } from '@material-ui/core'
import Style from '@styles/pages/product/Detail.module.scss'
import { FC } from 'react'

// interface IMainProductProps {
//   price: number
//   loanRate?: number
//   loanTerm?: number
//   annualProfit?: number
//   name?: string
//   description?: string
// }

interface IMainProductProps extends Object {
  price: number
  auto_product?: any
}

const MainProduct: FC<IMainProductProps> = (props) => {
  const { price, auto_product } = props
  return (
    <Container>
      <Grid container bgcolor="white" mt={7.5} mb={3} p={3} borderRadius={2}>
        <Grid container spacing={3} className={Style.mainProductWrap}>
          <Grid item xs={12} md={6}>
            <div className={Style.imgGroup}>
              <LazyImage
                src="/assets/loyalty/car-loan/car-1.png"
                width={350}
                height={150}
                layout="responsive"
                objectFit="cover"
                borderRadius="8px"
                // alt={title}
              />

              <div className={Style.text}>
                <span>Vay ô tô</span>
                <span>F5Second</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} fontSize="0.938rem">
            <Grid
              container
              flexDirection="column"
              height="100%"
              justifyContent="space-between"
            >
              <Grid container className={Style.endow}>
                <Span>
                  Lãi suất&nbsp;
                  <Span color="#0098CE">6.25</Span>%
                </Span>

                <Span className={Style.line}>|</Span>

                <Span>
                  Ưu đãi
                  <Span color="#0098CE">&nbsp;12&nbsp;</Span>
                  tháng
                </Span>
              </Grid>

              <Grid className={Style.info}>
                <H3 mb={1}>{auto_product?.name}</H3>
                <Span color="grey.600">{auto_product?.description}</Span>
              </Grid>

              <H3 className={Style.price}>
                {Intl.NumberFormat('it-It').format(price)} VNĐ
              </H3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainProduct
