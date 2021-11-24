import BazarCard from '@component/BazarCard'
import BreadcrumbsCustom from '@component/common/Breadcum'
import Contact from '@component/common/Contact'
import Accept from '@component/icons/Accept'
import Edit from '@component/icons/Edit'
import AppLayout from '@component/layout/AppLayout'
import { H1 } from '@component/Typography'
import { Box, Button, Container, Grid } from '@material-ui/core'
import { car } from '@stores/products/car'
import style from '@styles/pages/preview-info-loan/Info.module.scss'
import { sweetAlert } from '@utils/alert'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

const PrebiewInfo: FC = () => {
  const router = useRouter()
  const carState = useRecoilState(car)
  console.log('log => ~ carState', carState)

  const [state, setState] = useState({
    hoTen: '',
    cmnd: '',
    ngaySinh: new Date(),
    sdt: '',
    diaChiThC: '',
    thanhPhoThc: '',
    phuongThc: '',
    quanThc: '',
    diaChiTC: '',
    thanhPhoTc: '',
    phuongTc: '',
    quanTc: '',
  })

  useEffect(() => {
    const infoLocalStorage = localStorage.getItem('info')
    const info = infoLocalStorage && JSON.parse(infoLocalStorage)
    info && setState(info)
  }, [])

  const breadcrumbs = [
    { label: 'Trang chủ', link: '/', isActive: false },
    { label: 'Giấy đăng ký vay', isActive: true },
  ]

  return (
    <AppLayout>
      <Box sx={{ backgroundColor: 'white', padding: '16px 13%' }}>
        <BreadcrumbsCustom breadcrumbs={breadcrumbs} />
      </Box>
      <Container sx={{ mb: '70px', mt: '100px' }}>
        <BazarCard
          sx={{
            p: '2.5rem',
            height: '100%',
            width: 'fit-content',
            borderRadius: '16px',
            mt: '38px',
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              border: '1px solid #005F92',
              padding: '50px',
              minWidth: '700px',
              minHeight: '990px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <H1 sx={{ textAlign: 'center', color: '#005F92' }}>GIẤY ĐĂNG KÝ VAY</H1>

            <p className={style.matter}>1. Thông tin cá nhân</p>
            <Box className={style['row-content']}>
              <p className={style['text-label']}>Họ và tên:</p>
              <p className={style['text-content']}>{state.hoTen}</p>
            </Box>

            <Box className={style['row-content']}>
              <p className={style['text-label']}>Ngày sinh:</p>
              <p className={style['text-content']}>
                {new Date(state.ngaySinh).toLocaleDateString()}
              </p>
            </Box>

            <Box className={style['row-content']}>
              <p className={style['text-label']}>Số CMND/ CCCD:</p>
              <p className={style['text-content']}>{state.cmnd}</p>
            </Box>

            <Box className={style['row-content']}>
              <p className={style['text-label']}>Số điện thoại:</p>
              <p className={style['text-content']}>{state.sdt}</p>
            </Box>

            <p className={style.matter}>2. Thông tin địa chỉ</p>
            <Box className={style['row-content']}>
              <p className={style['text-label']}>Địa chỉ thường chú:</p>
              <p className={style['text-content']}>{''}</p>
            </Box>

            <Box className={style['row-content']}>
              <p className={style['text-label']}>Địa chỉ tạm chú:</p>
              <p className={style['text-content']}>{''}</p>
            </Box>

            <p className={style.matter}>3. Thông tin vay</p>
            <Box className={style['row-content']}>
              <p className={style['text-label']}>Sản phẩm vay:</p>
              <p className={style['text-content']}>{'1.859.000.000 đồng'}</p>
            </Box>

            <Box className={style['row-content']}>
              <p className={style['text-label']}>Giá sản phẩm (dự kiến):</p>
              <p className={style['text-content']}>{'1.859.000.000 đồng'}</p>
            </Box>

            <Box className={style['row-content']}>
              <p className={style['text-label']}>Ngân hàng đăng ký vay:</p>
              <p className={style['text-content']}>{'Exinbank'}</p>
            </Box>

            <Box className={style['row-content']}>
              <p className={style['text-label']}>Thời gian vay:</p>
              <p className={style['text-content']}>{'25 năm'}</p>
            </Box>

            <Box className={style['row-content']}>
              <p className={style['text-label']}>Số tiền vay:</p>
              <p className={style['text-content']}>{'1.859.000.000 đồng'}</p>
            </Box>

            <Box className={style['row-content']}>
              <p className={style['text-label']}>Tài sản đảm bảo:</p>
              <p className={style['text-content']}>{''}</p>
            </Box>
          </Box>
          {/* <BazarImage
            src="/assets/loyalty/home/eximbank.png"
            sx={{
              minWidth: '700px',
              display: 'block',
              height: '100%',
              width: '100%',
            }}
          /> */}
          <Box sx={{ mt: '30px' }} />
          <Grid container spacing={5} justifyContent="flex-end">
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<Edit />}
                onClick={() => router.push('/borrower-info')}
              >
                Chỉnh sửa
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                endIcon={<Accept />}
                onClick={() => {
                  sweetAlert('Thành công', 'Đăng ký vay thành công', 'success').then(
                    () => {
                      router.replace('/')
                      localStorage.removeItem('info')
                    }
                  )
                }}
              >
                Xác nhận
              </Button>
            </Grid>
          </Grid>
        </BazarCard>
      </Container>
      <Contact />
    </AppLayout>
  )
}

export default PrebiewInfo
