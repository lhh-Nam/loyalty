import LazyImage from '@component/LazyImage'
import { H3, Span } from '@component/Typography'
import { Container, Grid } from '@material-ui/core'
import Style from '@styles/pages/product/Detail.module.scss'
import { FC } from 'react'
interface MainProductProps {
  data: {
    giaSP: number
    tiLeVay: number
    thoiGianVayMax: number
    laiHangNam: number
  }
}
const MainProduct: FC<MainProductProps> = ({ data }) => {
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
                <H3 mb={1}>BMW X1</H3>
                <Span color="grey.600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                  nisl diam nisl pretium nec Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Platea nisl diam nisl pretium nec
                </Span>
              </Grid>

              <H3 className={Style.price}>
                {Intl.NumberFormat('it-It').format(data.giaSP)} VNĐ
              </H3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainProduct
