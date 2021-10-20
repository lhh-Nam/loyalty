import BazarImage from '@component/BazarImage'
import { Paragraph } from '@component/Typography'
import { Box, Button, Grid, styled } from '@material-ui/core'
import React, { FC } from 'react'

// component props interface
export interface CarouselCard1Props {
  heading?: string
  body?: string
}
// styled component
const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '.title': {
    fontSize: 50,
    marginTop: 0,
    marginBottom: '1.35rem',
    lineHeight: 1.2,
  },
  [theme.breakpoints.up('sm')]: {
    '.grid-item': {
      minHeight: 424,
      paddingTop: '2rem',
      display: 'flex',
      // alignItems: 'baseline',
      flexDirection: 'column',
      // justifyContent: 'center',
    },
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    paddingLeft: 0,

    '.title': {
      fontSize: 32,
    },
  },
  [theme.breakpoints.down('xs')]: {
    '.title': {
      fontSize: 16,
    },
    '.title + *': {
      fontSize: 13,
    },
    '.button-link': {
      height: 36,
      padding: '0 1.5rem',
      fontSize: 13,
    },
  },
}))

const CarouselCard1: FC<CarouselCard1Props> = () => {
  return (
    <StyledBox>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item className="grid-item" sm={6} xs={12} color="white">
          <h1 className="title">
            Mua Ô tô <br /> Vay ngay hôm nay
          </h1>
          <Paragraph color="white" mb={2.7} fontWeight="600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quis
            lobortis at quam etiam consequat eu. <br /> quam etiam at quis ut
            convalliss.
          </Paragraph>

          <Grid container>
            <Button
              variant="contained"
              sx={{
                px: '1.75rem',
                height: '44px',
                borderRadius: '8px',
                color: '#0098CE',
                fontSize: '16px',
                background: 'white',
                marginRight: '22px',
                marginY: '5px',
              }}
              endIcon={
                <BazarImage
                  src="/assets/loyalty/icons/send.svg"
                  sx={{
                    display: 'block',
                    maxHeight: '1.5rem',
                    maxWidth: '1.5rem',
                  }}
                />
              }
            >
              Đăng kí vay
            </Button>

            <Button
              className="button-link"
              variant="outlined"
              disableElevation
              sx={{
                px: '1.75rem',
                height: '44px',
                color: 'white',
                fontSize: '16px',
                borderRadius: '8px',
                borderColor: 'white',
                marginY: '5px',
              }}
            >
              Xem chi tiết
            </Button>
          </Grid>
        </Grid>
        <Grid item sm={6} xs={12}>
          <BazarImage
            src="/assets/loyalty/slide-banner-model.png"
            alt="apple-watch-1"
            sx={{
              display: 'block',
              mx: 'auto',
              maxHeight: '100%',
              maxWidth: '100%',
            }}
          />
        </Grid>
      </Grid>
    </StyledBox>
  )
}

export default CarouselCard1
