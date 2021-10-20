import BazarImage from '@component/BazarImage'
import { Box, Container, Grid, TextField } from '@material-ui/core'
import React, { FC } from 'react'
import { H2, Span } from '../Typography'

const Bimmer: FC = () => {
  return (
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sedut et
                labore et dolore magna aliqua.
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
                    endAdornment: (
                      <BazarImage
                        src="/assets/loyalty/icons/send.svg"
                        sx={{
                          display: 'block',
                          maxHeight: '1.8rem',
                          maxWidth: '1.8rem',
                        }}
                      />
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Bimmer
