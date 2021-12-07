import BazarImage from '@component/BazarImage'
import { H3, Span } from '@component/Typography'
import { Container, Grid } from '@material-ui/core'
import Style from '@styles/pages/product/Detail.module.scss'
import { fromImageToURL } from '@utils/imageUrl'
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
  autoSupplier?: any
}

const MainProduct: FC<IMainProductProps> = (props) => {
  const { price, auto_product, autoSupplier } = props
  return (
    <Container>
      <Grid container bgcolor="white" mt={7.5} mb={3} p={3} borderRadius={2}>
        <Grid container spacing={3} className={Style.mainProductWrap}>
          <Grid item xs={12} md={6}>
            <div className={Style.imgGroup}>
              <BazarImage
                src={fromImageToURL(auto_product?.avatar?.url)}
                sx={{
                  width: '100%',
                }}
                // alt={title}
              />

              {/* <div className={Style.text}>
                <span>Vay ô tô</span>
                <span>F5Seconds</span>
              </div> */}
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

                <Span className={Style.line}>|</Span>
              </Grid>

              <Grid className={Style.info}>
                <H3 mb={1}>
                  <Span>{auto_product?.name}</Span>
                  {autoSupplier && <Span> - </Span>}
                  <Span>{<Span>{autoSupplier?.name}</Span>}</Span>
                </H3>
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
