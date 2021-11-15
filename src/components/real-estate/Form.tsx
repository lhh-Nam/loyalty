import BazarImage from '@component/BazarImage'
import CustomSelect from '@component/common/CustomSelect'
import { Button, Container, Grid } from '@material-ui/core'
import Style from '@styles/pages/car-loan/Form.module.scss'
import React, { FC, useState } from 'react'
import { H2 } from '../Typography'

const lstExigency = [
  { name: 'Căn hộ', value: 'Căn hộ' },
  { name: 'Văn phòng', value: 'Văn phòng' },
]

const lstBorrowingLimit = [
  { name: '1 tỷ', value: '1 tỷ' },
  { name: '2 tỷ', value: '2 tỷ' },
]

const lstLoanProperty = [
  { name: '2 tỷ', value: '2 tỷ' },
  { name: '3 tỷ', value: '3 tỷ' },
]

const lstBank = [
  { name: 'Eximbank', value: 'Eximbank' },
  { name: 'Vietbank', value: 'Vietbank' },
]

const lstTime = [
  { name: '25 năm', value: '25 năm' },
  { name: '30 năm', value: '30 năm' },
]

const lstCollateral = [
  { name: 'Tài sản vay', value: 'Tài sản vay' },
  { name: 'Tài sản vay - 2', value: 'Tài sản vay - 2' },
]

const Form: FC = () => {
  const [form, setForm] = useState({
    exigency: 'Căn hộ',
    borrowingLimit: '2 tỷ',
    loanProperty: '2 tỷ',
    bank: 'Eximbank',
    collateral: 'Tài sản vay',
    timeLimit: '25 năm',
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
            label="Hạn mức vay"
            placeholder="Chọn hạn mức vay"
            value={form.borrowingLimit}
            options={lstBorrowingLimit}
            onChange={(value) => {
              handleForm(value, 'borrowingLimit')
            }}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Giá trị tài sản vay"
            placeholder="Chọn giá trị tài sản vay"
            value={form.loanProperty}
            options={lstLoanProperty}
            onChange={(value) => {
              handleForm(value, 'loanProperty')
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
            label="Ngân hàng"
            placeholder="Chọn ngân hàng"
            value={form.bank}
            options={lstBank}
            onChange={(value) => {
              handleForm(value, 'bank')
            }}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Thời hạn vay"
            placeholder="Chọn thời hạn vay"
            value={form.timeLimit}
            options={lstTime}
            onChange={(value) => {
              handleForm(value, 'timeLimit')
            }}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Tài sản đảm bảo"
            placeholder="Chọn tài sản đảm bảo"
            value={form.collateral}
            options={lstCollateral}
            onChange={(value) => {
              handleForm(value, 'collateral')
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
          <H2>Vay mua bất động sản</H2>
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
