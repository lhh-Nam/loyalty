import BazarImage from '@component/BazarImage'
import CustomSelect from '@component/common/CustomSelect'
import { Button, Container, Grid } from '@material-ui/core'
import Style from '@styles/pages/car-loan/Form.module.scss'
import React, { FC, useState } from 'react'
import { H2 } from '../Typography'

const lstExigency = [
  { name: 'Vay ô tô', value: 'Vay ô tô' },
  { name: 'Vay xe máy', value: 'Vay xe máy' },
]

const lstCarPrice = [
  { name: 'Từ 500 triệu - 1 tỷ', value: 'Từ 500 triệu - 1 tỷ' },
  { name: 'Từ 300 triệu - 1 tỷ', value: 'Từ 300 triệu - 1 tỷ' },
]

const lstBank = [
  { name: 'Vietbank', value: 'Vietbank' },
  { name: 'Vietnambank', value: 'Vietnambank' },
]

const lstCarBrand = [
  { name: 'BMW', value: 'BMW' },
  { name: 'Honda', value: 'Honda' },
]

const lstDistributor = [
  { name: 'Nam', value: 'Nam' },
  { name: 'Huy', value: 'Huy' },
]

const lstBorrowingLimit = [
  { name: '1 tỷ', value: '1 tỷ' },
  { name: '2 tỷ', value: '2 tỷ' },
]

const Form: FC = () => {
  const [form, setForm] = useState({
    exigency: 'Vay ô tô',
    carPrice: 'Từ 500 triệu - 1 tỷ',
    carBrand: 'BMW',
    bank: '',
    borrowingLimit: '',
    distributor: '',
  })

  const handleForm = (value: any, key: string) => setForm({ ...form, [key]: value })

  const renderFormLeft = () => {
    return (
      <Grid item sm={6} xs={12}>
        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Nhu cầu vay"
            placeholder="chọn"
            value={form.exigency}
            options={lstExigency}
            onChange={(value) => {
              handleForm(value, 'exigency')
            }}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Giá xe"
            placeholder="chọn"
            value={form.carPrice}
            options={lstCarPrice}
            onChange={(value) => {
              handleForm(value, 'carPrice')
            }}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Ngân hàng"
            placeholder="Chọn ngân hàng"
            value={form.bank}
            options={lstBank}
            onChange={(value) => {
              handleForm(value, 'bank')
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
            label="Thương hiệu xe"
            placeholder="chọn"
            value={form.carBrand}
            options={lstCarBrand}
            onChange={(value) => {
              handleForm(value, 'carBrand')
            }}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Nhà phân phối"
            placeholder="Chọn nhà phân phối"
            value={form.distributor}
            options={lstDistributor}
            onChange={(value) => {
              handleForm(value, 'distributor')
            }}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Hạn mức vay"
            placeholder="Chọn hạn mức vay"
            value={form.borrowingLimit}
            options={lstBorrowingLimit}
            onChange={(value) => {
              handleForm(value, 'borrowingLimit')
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
          <H2>Màn hình vay ô tô</H2>
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
