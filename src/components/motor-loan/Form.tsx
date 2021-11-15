import BazarImage from '@component/BazarImage'
import CustomSelect from '@component/common/CustomSelect'
import { Button, Container, Grid } from '@material-ui/core'
import Style from '@styles/pages/car-loan/Form.module.scss'
import React, { FC, useState } from 'react'
import { H2 } from '../Typography'

const lstBrand = [
  { name: 'Honda', value: 'Honda' },
  { name: 'Sirius', value: 'Sirius' },
]

const lstStore = [
  { name: 'HEAD - Phát tiến 1', value: 'HEAD - Phát tiến 1' },
  { name: 'HEAD - Phát tiến 2', value: 'HEAD - Phát tiến 2' },
]

const lstPrice = [
  { name: 'Từ 50 triệu - 100 triệu', value: 'Từ 50 triệu - 100 triệu' },
  { name: 'Từ 100 triệu - 200 triệu', value: 'Từ 100 triệu - 200 triệu' },
]

const lstAddress = [
  {
    name: '17 Nơ Trang Long, P.14, Bình Thạnh, Thành phố Hồ Chí Minh',
    value: '17 Nơ Trang Long, P.14, Bình Thạnh, Thành phố Hồ Chí Minh',
  },
  {
    name: '17 Nơ Trang Long, P.14, Bình Thạnh, Thành phố Hồ Chí Minh',
    value: '17 Nơ Trang Long, P.14, Bình Thạnh, Thành phố Hồ Chí Minh',
  },
]

const Form: FC = () => {
  const [form, setForm] = useState({
    brand: 'Honda',
    price: 'Từ 50 triệu - 100 triệu',
    address: '17 Nơ Trang Long, P.14, Bình Thạnh, Thành phố Hồ Chí Minh',
    store: 'HEAD - Phát tiến 1',
    borrowingLimit: '',
    distributor: '',
  })

  const handleForm = (value: any, key: string) => setForm({ ...form, [key]: value })

  const renderFormLeft = () => {
    return (
      <Grid item sm={6} xs={12}>
        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Thương hiệu xe"
            placeholder="chọn"
            value={form.brand}
            options={lstBrand}
            onChange={(value) => {
              handleForm(value, 'brand')
            }}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Cửa hàng liên kết"
            placeholder="Chọn cửa hàng liên kết"
            value={form.store}
            options={lstStore}
            onChange={(value) => {
              handleForm(value, 'store')
            }}
          />
        </div>
      </Grid>
    )
  }

  const renderFormRight = () => {
    return (
      <Grid item sm={6} xs={12} className={Style.formGroup}>
        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Giá xe"
            placeholder="Chọn giá xe"
            value={form.price}
            options={lstPrice}
            onChange={(value) => {
              handleForm(value, 'price')
            }}
          />
        </div>
        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Địa chỉ cửa hàng liên kết"
            placeholder="Chọn địa chỉ cửa hàng liên kết"
            value={form.address}
            options={lstAddress}
            onChange={(value) => {
              handleForm(value, 'address')
            }}
          />
        </div>
      </Grid>
    )
  }

  const renderButtonGroup = () => {
    return (
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={Style.btnGroup}
      >
        <Grid item>
          <Button
            disableElevation
            variant="outlined"
            color="primary"
            endIcon={
              <BazarImage
                src="/assets/loyalty/icons/frame.svg"
                sx={{
                  display: 'block',
                  maxHeight: '1rem',
                  maxWidth: '1rem',
                }}
              />
            }
          >
            Lưu bộ lọc
          </Button>
        </Grid>
        <Grid item>
          <Grid container>
            <Button
              disableElevation
              variant="outlined"
              color="primary"
              endIcon={
                <BazarImage
                  src="/assets/loyalty/icons/close-circle.svg"
                  sx={{
                    display: 'block',
                    maxHeight: '1rem',
                    maxWidth: '1rem',
                  }}
                />
              }
            >
              Xoá bộ lọc
            </Button>
            <Button
              disableElevation
              color="primary"
              variant="contained"
              sx={{
                marginLeft: '20px',
              }}
              endIcon={
                <BazarImage
                  src="/assets/loyalty/icons/search-status.svg"
                  sx={{
                    display: 'block',
                    maxHeight: '1rem',
                    maxWidth: '1rem',
                  }}
                />
              }
            >
              Hiển thị kết quả
            </Button>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return (
    <Container sx={{ mb: '30px' }}>
      <Grid container justifyContent="center">
        <Grid item md={6} textAlign="center" mb={2}>
          <H2>Vay xe máy</H2>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        mt={2}
        bgcolor="white"
        borderRadius="16px"
      >
        <Grid item xs={12} p={3}>
          <Grid container spacing={5}>
            {renderFormLeft()}
            {renderFormRight()}
          </Grid>
          {renderButtonGroup()}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Form
