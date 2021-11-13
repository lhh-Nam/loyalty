import BazarImage from '@component/BazarImage'
import BreadcrumbsCustom from '@component/common/Breadcum'
import { Paragraph } from '@component/Typography'
import { Box, Container, Grid, styled } from '@material-ui/core'
import React, { FC } from 'react'

// styled component
const StyledBox = styled(Box)(({ theme }) => ({
  '.title': {
    fontSize: 50,
    marginTop: 0,
    marginBottom: '1.35rem',
    lineHeight: 1.2,
  },
  [theme.breakpoints.up('sm')]: {
    '.grid-item': {
      minHeight: 424,
      display: 'flex',
      alignItems: 'baseline',
      flexDirection: 'column',
      justifyContent: 'center',
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
  },
}))

const Banner: FC = () => {
  const breadcrumbs = [
    { label: 'Trang chủ', link: '/', isActive: false },
    { label: 'Bất động sản', isActive: true },
  ]
  return (
    <StyledBox>
      <Box bgcolor="#0098CE" mb={7.5}>
        <Container>
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item className="grid-item" sm={7} xs={12} color="white">
              <h1 className="title">
                Bất động sản <br /> Vay ngay hôm nay
              </h1>
              <Paragraph color="white" mb={2.7} fontWeight="600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quis
                lobortis at quam etiam consequat eu. <br /> quam etiam at quis ut
                convalliss.
              </Paragraph>
            </Grid>

            <Grid item sm={5} xs={12}>
              <BazarImage
                src="/assets/loyalty/slide-banner-model.png"
                alt="apple-watch-1"
                sx={{
                  display: 'block',
                  mx: 'auto',
                  maxHeight: 400,
                  maxWidth: '100%',
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ backgroundColor: 'white', padding: '16px 13%' }}>
          <BreadcrumbsCustom breadcrumbs={breadcrumbs} />
        </Box>
      </Box>
    </StyledBox>
  )
}

export default Banner
