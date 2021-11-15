import BazarImage from '@component/BazarImage'
import CustomSelect from '@component/common/CustomSelect'
import { Button, Container, Grid } from '@material-ui/core'
import Style from '@styles/pages/car-loan/Form.module.scss'
import React, { FC, useState } from 'react'
import { H2 } from '../Typography'

const lstPurpose = [
  { name: 'Mua Tivi', value: 'Mua Tivi' },
  { name: 'Mua tủ lạnh', value: 'Mua tủ lạnh' },
]

const lstBorrowingLimit = [
  { name: '50 triệu', value: '50 triệu' },
  { name: '1 tỷ', value: '1 tỷ' },
]

const lstIncome = [
  { name: '15 triệu', value: '15 triệu' },
  { name: '20 triệu', value: '20 triệu' },
]

const lstPaymentMethod = [
  { name: 'Dư nợ giảm dần', value: 'Dư nợ giảm dần' },
  { name: 'Dư nợ tăng dần', value: 'Dư nợ tăng dần' },
]

const lstTime = [
  { name: '25 năm', value: '25 năm' },
  { name: '30 năm', value: '30 năm' },
]

const lstFinancialSources = [
  { name: 'Lương', value: 'Lương' },
  { name: 'Xin', value: 'Xin' },
]

const Form: FC = () => {
  const [form, setForm] = useState({
    purpose: 'Mua Tivi',
    borrowingLimit: '50 triệu',
    income: '15 triệu',
    paymentMethod: 'Dư nợ giảm dần',
    financialSources: 'Lương',
    timeLimit: '25 năm',
  })

  const handleForm = (value: any, key: string) => setForm({ ...form, [key]: value })

  const renderFormLeft = () => {
    return (
      <Grid item sm={6} xs={12}>
        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Mục đích vay"
            placeholder="Chọn mục đích"
            value={form.purpose}
            options={lstPurpose}
            onChange={(value) => {
              handleForm(value, 'purpose')
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
            label="Thu nhập"
            placeholder="Chọn thu nhập"
            value={form.income}
            options={lstIncome}
            onChange={(value) => {
              handleForm(value, 'income')
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
            label="Phương thức trả lãi"
            placeholder="Chọn phương thức trả lãi"
            value={form.paymentMethod}
            options={lstPaymentMethod}
            onChange={(value) => {
              handleForm(value, 'paymentMethod')
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
            label="Nguồn thu nhập"
            placeholder="Chọn nguồn thu nhập"
            value={form.financialSources}
            options={lstFinancialSources}
            onChange={(value) => {
              handleForm(value, 'financialSources')
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
          <H2>Vay tín chấp</H2>
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
