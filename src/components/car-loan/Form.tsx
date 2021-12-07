import BazarImage from '@component/BazarImage'
import CustomSelect from '@component/common/CustomSelect'
import { Button, Container, Divider, Grid } from '@material-ui/core'
import Style from '@styles/pages/car-loan/Form.module.scss'
import { DOMAIN } from '@utils/config/domain'
import React, { FC, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { H2 } from '../Typography'

const lstCarPrice = [
  { name: 'Từ 500 triệu - 1 tỷ', value: 'Từ 500 triệu - 1 tỷ' },
  { name: 'Từ 300 triệu - 1 tỷ', value: 'Từ 300 triệu - 1 tỷ' },
]
// const lstCarBrand = [
//   { name: 'BMW', value: 'BMW' },
//   { name: 'Honda', value: 'Honda' },
// ]
// const lstDistributor = [
//   { name: 'Nam', value: 'Nam' },
//   { name: 'Huy', value: 'Huy' },
// ]
const fetchBanks = () => fetch(`${DOMAIN.URL}/banks`).then((res) => res.json())

const fetchSuppliers = () =>
  fetch(`${DOMAIN.URL}/auto-suppliers`).then((res) => res.json())

interface FormProps {
  setFilter: any
}
const Form: FC<FormProps> = ({ setFilter }) => {
  const [form, setForm] = useState({
    exigency: 'Vay ô tô',
    carPrice: undefined,
    carBrand: 'BMW',
    bank: undefined,
    borrowingLimit: undefined,
    distributor: undefined,
  })

  const [listBank, setListBank] = useState([])
  const [listSupplier, setListSupplier] = useState([])

  const { data: banks } = useQuery('banks', fetchBanks)
  const { data: suppliers } = useQuery('suppliers', fetchSuppliers)

  useEffect(() => {
    if (banks) {
      setListBank(banks?.map((item: any) => ({ name: item.name, value: item.name })))
    }
    if (suppliers) {
      setListSupplier(
        suppliers?.map((item: any) => ({ name: item.name, value: item.name }))
      )
    }
  }, [banks, suppliers])

  const handleForm = (value: any, key: string) => setForm({ ...form, [key]: value })

  const renderFormLeft = () => {
    return (
      <Grid item sm={6} xs={12}>
        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Giá xe"
            placeholder="Chọn giá xe"
            value={form?.carPrice || ''}
            options={lstCarPrice}
            onChange={(value) => {
              handleForm(value, 'carPrice')
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
            value={form?.bank || ''}
            options={listBank}
            onChange={(value) => {
              handleForm(value, 'bank')
            }}
          />
        </div>

        <div className={Style.textFieldWrapper}>
          <CustomSelect
            label="Nhà phân phối"
            placeholder="Chọn nhà phân phối"
            value={form?.distributor || ''}
            options={listSupplier}
            onChange={(value) => {
              handleForm(value, 'distributor')
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
              onClick={() =>
                setForm({
                  exigency: 'Vay ô tô',
                  carPrice: undefined,
                  carBrand: 'BMW',
                  bank: undefined,
                  borrowingLimit: undefined,
                  distributor: undefined,
                })
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
              onClick={() =>
                setFilter({
                  'banks.name': form.bank,
                  'autoSupplier.name': form.distributor,
                })
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
          <Grid container spacing={3}>
            {renderFormLeft()}
            {renderFormRight()}
          </Grid>

          <Divider className={Style.hr} />

          {renderButtonGroup()}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Form
