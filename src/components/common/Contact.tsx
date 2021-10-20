import BazarImage from '@component/BazarImage'
import { Box, Container, Grid } from '@material-ui/core'
import React, { FC } from 'react'
import { Span } from '../Typography'

const Contact: FC = () => {
  return (
    <Box
      bgcolor="white"
      minHeight={200}
      display="flex"
      alignItems="center"
      padding="30px 20px"
    >
      <Container>
        <Grid container spacing={5} color="#015F92" fontWeight="600">
          <Grid item lg={3} xs={6}>
            <Grid container>
              <BazarImage
                src="/assets/loyalty/icons/call-calling.svg"
                sx={{
                  display: 'block',
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
              />
              <Span fontSize="1.1rem" pt={2} pl={2}>
                Hotline 24/7 <br /> 1800 1199
              </Span>
            </Grid>
          </Grid>
          <Grid item lg={3} xs={6}>
            <Grid container>
              <BazarImage
                src="/assets/loyalty/icons/card.svg"
                sx={{
                  display: 'block',
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
              />
              <Span fontSize="1.1rem" pt={2} pl={2}>
                Tỉ giá và ngoại tệ <br /> giá vàng
              </Span>
            </Grid>
          </Grid>
          <Grid item lg={3} xs={6}>
            <Grid container>
              <BazarImage
                src="/assets/loyalty/icons/message-search.svg"
                sx={{
                  display: 'block',
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
              />
              <Span fontSize="1.1rem" pt={2} pl={2}>
                ATM và Địa điểm <br /> giao dịch
              </Span>
            </Grid>
          </Grid>
          <Grid item lg={3} xs={6}>
            <Grid container>
              <BazarImage
                src="/assets/loyalty/icons/message-question.svg"
                sx={{
                  display: 'block',
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
              />

              <Span fontSize="1.1rem" pt={2} pl={2}>
                Câu hỏi <br /> thường gặp
              </Span>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact
