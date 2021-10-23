import BazarCard from '@component/BazarCard'
import Contact from '@component/common/Contact'
import TextFieldCustom from '@component/common/TextFieldCustom'
import Delete from '@component/icons/Delete'
import Save from '@component/icons/Save'
import Send from '@component/icons/Send'
import Star from '@component/icons/Star'
import AppLayout from '@component/layout/AppLayout'
import { H2, Span } from '@component/Typography'
import { Box, Button, Container, Divider, Grid, Typography } from '@material-ui/core'
import React, { FC, useState } from 'react'

const BorrowerInfo: FC = () => {
  const [state, setState] = useState({
    hoTen: '',
    cmnd: '',
    ngaySinh: new Date(),
    sdt: '',
    diaChiThC: '',
    thanhPhoThc: '',
    phuongThc: '',
    QuanThc: '',
    diaChiTC: '',
    thanhPhoTc: '',
    phuongTc: '',
    QuanTc: '',
  })

  const handleValueChange = (e: any) => {
    setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }
  return (
    <AppLayout>
      <Container sx={{ mb: '70px', mt: '100px' }}>
        <Grid container justifyContent="center">
          <Grid item md={6} textAlign="center">
            <H2>Bảng thông tin người vay</H2>
            <Span display="block" my={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. sedut et labore et
              dolore magna aliqua.
            </Span>
          </Grid>
        </Grid>

        <BazarCard
          sx={{
            p: '1.5rem',
            height: '100%',
            width: '100%',
            borderRadius: '16px',
            mt: '38px',
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography sx={{ fontSize: 16, color: '#0098CE' }}>
              Thông tin người vay
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Star />
              <Typography sx={{ fontSize: 16, color: '#86868B' }}>
                Bắt buộc
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: '40px' }} />

          <Grid container spacing={5}>
            <Grid item md={6}>
              <TextFieldCustom
                required
                label="Họ và Tên"
                name="hoTen"
                value={state.hoTen}
                onChange={handleValueChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6}>
              <TextFieldCustom
                required
                label="Số CMND/ CCCD"
                name="cmnd"
                value={state.cmnd}
                onChange={handleValueChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6}>
              <TextFieldCustom
                label="Ngày sinh"
                type="date"
                name="ngaySinh"
                value={state.ngaySinh}
                onChange={handleValueChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6}>
              <TextFieldCustom
                required
                label="Số điện thoại"
                name="sdt"
                value={state.sdt}
                onChange={handleValueChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: '30px' }} />
          <Box display="flex" justifyContent="space-between">
            <Typography sx={{ fontSize: 16, color: '#0098CE' }}>Địa chỉ</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Star />
              <Typography sx={{ fontSize: 16, color: '#86868B' }}>
                Bắt buộc
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: '30px' }} />

          <Grid container spacing={5}>
            <Grid item container spacing={5} md={6}>
              <Grid item md={12}>
                <TextFieldCustom
                  required
                  label="Địa chỉ thường chú"
                  variant="outlined"
                  name="sdt"
                  value={state.sdt}
                  onChange={handleValueChange}
                />
              </Grid>
              <Grid item md={12}>
                <TextFieldCustom
                  required
                  label="Thành phố"
                  variant="outlined"
                  name="sdt"
                  value={state.sdt}
                  onChange={handleValueChange}
                />
              </Grid>
              <Grid item md={6}>
                <TextFieldCustom
                  required
                  label="Phường/ Xã"
                  variant="outlined"
                  name="sdt"
                  value={state.sdt}
                  onChange={handleValueChange}
                />
              </Grid>
              <Grid item md={6}>
                <TextFieldCustom
                  required
                  label="Quận/ Huyện"
                  variant="outlined"
                  name="sdt"
                  value={state.sdt}
                  onChange={handleValueChange}
                />
              </Grid>
            </Grid>

            <Grid item container spacing={5} md={6}>
              <Grid item md={12}>
                <TextFieldCustom label="Địa chỉ tạm chú" variant="outlined" />
              </Grid>
              <Grid item md={12}>
                <TextFieldCustom label="Thành phố" variant="outlined" />
              </Grid>
              <Grid item md={6}>
                <TextFieldCustom label="Phường/ Xã" variant="outlined" />
              </Grid>
              <Grid item md={6}>
                <TextFieldCustom label="Quận/ Huyện" variant="outlined" />
              </Grid>
            </Grid>
          </Grid>

          <Divider sx={{ my: '30px' }} />

          <Grid container spacing={5}>
            <Grid container item md={6}>
              <Grid item>
                <Button
                  sx={{
                    color: '#0098CE',
                    fontSize: '16px',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    border: '1px solid #0098CE',
                  }}
                  variant="outlined"
                  endIcon={<Save />}
                >
                  Lưu kết quả
                </Button>
              </Grid>
            </Grid>
            <Grid container item md={6} spacing={5} justifyContent="flex-end">
              <Grid item>
                <Button
                  variant="outlined"
                  sx={{
                    color: '#0098CE',
                    fontSize: '16px',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    border: '1px solid #0098CE',
                  }}
                  endIcon={<Delete />}
                >
                  Xoá thông tin
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '16px',
                    background: '#0098CE',
                  }}
                  endIcon={<Send />}
                >
                  Đăng kí vay
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </BazarCard>
      </Container>
      <Contact />
    </AppLayout>
  )
}

export default BorrowerInfo
