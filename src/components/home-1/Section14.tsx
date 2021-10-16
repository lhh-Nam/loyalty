import { Box, Container, Grid, TextField } from '@material-ui/core'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import MessageIcon from '@material-ui/icons/Message'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import SendIcon from '@material-ui/icons/Send'
import React, { FC } from 'react'
import { H2, Span } from '../Typography'

const Section14: FC = () => {
  return (
    <>
      <Box
        bgcolor="#0098CE"
        color="white"
        minHeight={200}
        display="flex"
        alignItems="center"
        padding={2}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Grid container>
                <H2 mb={2}>Đăng ký vay ngay với Bimmer</H2>
                <Span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. sedut
                  et labore et dolore magna aliqua.
                </Span>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Grid
                container
                justifyContent="flex-end"
                alignItems="center"
                height="100%"
              >
                <Grid item md={6} bgcolor="white" borderRadius="4px">
                  <TextField
                    placeholder="Nhập số điện thoại/Email"
                    fullWidth
                    InputProps={{
                      endAdornment: <SendIcon htmlColor="#A7D4E9" />,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
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
                <PhoneInTalkIcon fontSize="large" htmlColor="#A7D4E9" />
                <Span fontSize="1.1rem" paddingLeft="10px">
                  Hotline 24/7 <br /> 1800 1199
                </Span>
              </Grid>
            </Grid>
            <Grid item lg={3} xs={6}>
              <Grid container>
                <MessageIcon fontSize="large" htmlColor="#A7D4E9" />
                <Span fontSize="1.1rem" paddingLeft="10px">
                  Tỉ giá và ngoại tệ <br /> giá vàng
                </Span>
              </Grid>
            </Grid>
            <Grid item lg={3} xs={6}>
              <Grid container>
                <CreditCardIcon fontSize="large" htmlColor="#A7D4E9" />
                <Span fontSize="1.1rem" paddingLeft="10px">
                  ATM và Địa điểm <br /> giao dịch
                </Span>
              </Grid>
            </Grid>
            <Grid item lg={3} xs={6}>
              <Grid container>
                <MessageIcon fontSize="large" htmlColor="#A7D4E9" />
                <Span fontSize="1.1rem" paddingLeft="10px">
                  Câu hỏi <br /> thường gặp
                </Span>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Section14
