import BazarCard from '@component/BazarCard'
import BreadcrumbsCustom from '@component/common/Breadcum'
import Contact from '@component/common/Contact'
import Delete from '@component/icons/Delete'
import Save from '@component/icons/Save'
import Send from '@component/icons/Send'
import Star from '@component/icons/Star'
import AppLayout from '@component/layout/AppLayout'
import { H2, Span } from '@component/Typography'
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import { DesktopDatePicker, LocalizationProvider } from '@material-ui/lab'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const fetchProvinces = () =>
  fetch('https://provinces.open-api.vn/api/p').then((res) => res.json())
const fetchWards = (districtId: any) =>
  fetch(`https://provinces.open-api.vn/api/d/${districtId}?depth=2`).then((res) =>
    res.json()
  )
const fetchDistricts = (provinceId: any) =>
  fetch(`https://provinces.open-api.vn/api/p/${provinceId}?depth=2`).then((res) =>
    res.json()
  )
const BorrowerInfo: FC = () => {
  const router = useRouter()
  // const carState = useRecoilState(car)
  // const setCarState = useSetRecoilState(car)

  const [loanInfo, setLoanInfo] = useState({ product: {} })

  const [state, setState] = useState<any>({
    name: '',
    icNumber: '',
    dateOfBirth: new Date(),
    phoneNumber: '',
    diaChiThC: '',
    thanhPhoThc: null,
    phuongThc: null,
    quanThc: null,
    diaChiTC: null,
    thanhPhoTc: null,
    phuongTc: null,
    quanTc: null,
  })
  const { data: provinces = [] } = useQuery('provinces', fetchProvinces)

  const { data: provinceInfo = [] } = useQuery(
    ['districts', state?.thanhPhoThc],
    () => fetchDistricts(state?.thanhPhoThc?.code),
    { enabled: !!state?.thanhPhoThc }
  )
  const { data: districtInfo = [] } = useQuery(
    ['wards', state?.quanThc],
    () => fetchWards(state?.quanThc?.code),
    { enabled: !!state?.quanThc }
  )

  const { data: provinceInfoTC = [] } = useQuery(
    ['districts', state?.thanhPhoTc],
    () => fetchDistricts(state?.thanhPhoTc?.code),
    { enabled: !!state?.thanhPhoTc }
  )
  const { data: districtInfoTC = [] } = useQuery(
    ['wards', state?.quanTc],
    () => fetchWards(state?.quanTc?.code),
    { enabled: !!state?.quanTc }
  )
  const handleValueChange = (e: any) => {
    setState((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleDateChange = (e: any, key: string) => {
    setState((prevState: any) => ({
      ...prevState,
      [key]: e,
    }))
  }

  const breadcrumbs = [
    { label: 'Trang ch???', link: '/', isActive: false },
    { label: 'Th??ng tin vay', isActive: true },
  ]

  useEffect(() => {
    const infoLocalStorage = localStorage.getItem('info')
    const info = infoLocalStorage && JSON.parse(infoLocalStorage)
    info && setLoanInfo(info)
  }, [])

  const convertAddress = (address: any, ward: any, district: any, province: any) => {
    const newAddress = address ? address : ''
    const newWard = ward ? ', ' + ward : ''
    const newDistrict = district ? ', ' + district : ''
    const newProvince = province ? ', ' + province : ''
    return newAddress + newWard + newDistrict + newProvince
  }
  const handleRegister = () => {
    // setCarState({
    //   ...carState,
    //   customer: {
    //     name: state.name,
    //     dateOfBirth: state.dateOfBirth,
    //     icNumber: state.icNumber,
    //     phoneNumber: state.phoneNumber,
    //     permanentAddress: `${state.diaChiThC}, ${state.phuongThc?.name}, ${state.quanThc?.name}, ${state.thanhPhoThc?.name}`,
    //     currentAddress: `${state.diaChiTC}, ${state.phuongTc?.name}, ${state.quanTc?.name}, ${state.thanhPhoTc?.name}`,
    //     declaredIncome: state.declaredIncome,
    //   },
    // })

    let temp = {
      ...loanInfo,
      product: {
        ...loanInfo.product,
        collateral: state.collateral,
      },
      customer: {
        name: state.name,
        dateOfBirth: state.dateOfBirth,
        icNumber: state.icNumber,
        phoneNumber: state.phoneNumber,
        permanentAddress: convertAddress(
          state.diaChiThC,
          state.phuongThc?.name,
          state.quanThc?.name,
          state.thanhPhoThc?.name
        ),
        currentAddress: convertAddress(
          state.diaChiTC,
          state.phuongTc?.name,
          state.quanTc?.name,
          state.thanhPhoTc?.name
        ),
        declaredIncome: state.declaredIncome,
      },
    }

    localStorage.setItem('info', JSON.stringify(temp))

    router.push('/preview')
  }

  return (
    <AppLayout>
      <Box sx={{ backgroundColor: 'white', padding: '16px 13%' }}>
        <BreadcrumbsCustom breadcrumbs={breadcrumbs} />
      </Box>
      <Container sx={{ mb: '70px', mt: '100px' }}>
        <Grid container justifyContent="center">
          <Grid item md={6} textAlign="center">
            <H2>Th??ng tin ng?????i vay</H2>
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
              Th??ng tin ng?????i vay
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Star />
              <Typography sx={{ fontSize: 16, color: '#86868B' }}>
                B???t bu???c
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: '40px' }} />

          <Grid container spacing={5}>
            <Grid item md={6}>
              <TextField
                required
                label="H??? v?? T??n"
                name="name"
                value={state.name}
                onChange={handleValueChange}
                variant="outlined"
                placeholder="Nguy???n Th??? Lan"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                label="S??? CMND/ CCCD"
                name="icNumber"
                value={state.icNumber}
                onChange={handleValueChange}
                variant="outlined"
                placeholder="025987654"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Ng??y sinh"
                  inputFormat="dd/MM/yyyy"
                  value={state.dateOfBirth}
                  onChange={(e) => handleDateChange(e, 'dateOfBirth')}
                  renderInput={(params: any) => (
                    <TextField {...params} variant="outlined" fullWidth />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                label="S??? ??i???n tho???i"
                name="phoneNumber"
                value={state.phoneNumber}
                onChange={handleValueChange}
                variant="outlined"
                placeholder="0936223677"
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                label="Thu nh???p kh??ch h??ng"
                name="declaredIncome"
                type="number"
                value={state.declaredIncome}
                onChange={handleValueChange}
                variant="outlined"
                placeholder="120.000.000"
                fullWidth
              />
            </Grid>

            <Grid item md={6}>
              <TextField
                required
                label="T??i s???n ?????m b???o"
                name="collateral"
                value={state.collateral}
                onChange={handleValueChange}
                variant="outlined"
                placeholder=""
                fullWidth
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: '30px' }} />
          <Box display="flex" justifyContent="space-between">
            <Typography sx={{ fontSize: 16, color: '#0098CE' }}>?????a ch???</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Star />
              <Typography sx={{ fontSize: 16, color: '#86868B' }}>
                B???t bu???c
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: '30px' }} />

          <Grid container spacing={5}>
            <Grid item container spacing={5} md={6}>
              <Grid item md={12}>
                <TextField
                  required
                  label="?????a ch??? th?????ng tr??"
                  variant="outlined"
                  name="diaChiThC"
                  value={state.diaChiThC}
                  onChange={handleValueChange}
                  placeholder="100/3"
                  fullWidth
                />
              </Grid>
              <Grid item md={12}>
                <Autocomplete
                  id="country-select-demo"
                  options={provinces || []}
                  fullWidth
                  autoHighlight
                  getOptionLabel={(option: any) => option?.name}
                  value={state.thanhPhoThc}
                  onChange={(_, value) =>
                    setState((prev: any) => ({ ...prev, thanhPhoThc: value }))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Th??nh ph???"
                      variant="outlined"
                      placeholder="Ch???n Th??nh ph???"
                    />
                  )}
                />
              </Grid>
              <Grid item md={6}>
                <Autocomplete
                  id="country-select-demo"
                  options={provinceInfo?.districts || []}
                  fullWidth
                  autoHighlight
                  getOptionLabel={(option: any) => option?.name}
                  value={state.quanThc}
                  onChange={(_, value) =>
                    setState((prev: any) => ({ ...prev, quanThc: value }))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Qu???n/ Huy???n"
                      variant="outlined"
                      placeholder="Ch???n Qu???n/ Huy???n"
                    />
                  )}
                />
              </Grid>
              <Grid item md={6}>
                <Autocomplete
                  id="country-select-demo"
                  options={districtInfo?.wards || []}
                  fullWidth
                  autoHighlight
                  getOptionLabel={(option: any) => option?.name}
                  value={state.phuongThc}
                  onChange={(_, value) =>
                    setState((prev: any) => ({ ...prev, phuongThc: value }))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Ph?????ng/ X??"
                      variant="outlined"
                      placeholder="Ch???n Ph?????ng/ X??"
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Grid item container spacing={5} md={6}>
              <Grid item md={12}>
                <TextField
                  label="?????a ch??? t???m tr??"
                  variant="outlined"
                  name="diaChiTC"
                  value={state.diaChiTC}
                  onChange={handleValueChange}
                  placeholder="100/3"
                  fullWidth
                />
              </Grid>
              <Grid item md={12}>
                <Autocomplete
                  id="country-select-demo"
                  options={provinces || []}
                  fullWidth
                  autoHighlight
                  getOptionLabel={(option: any) => option?.name}
                  value={state.thanhPhoTc}
                  onChange={(_, value) =>
                    setState((prev: any) => ({ ...prev, thanhPhoTc: value }))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Th??nh ph???"
                      variant="outlined"
                      placeholder="Ch???n Th??nh ph???"
                    />
                  )}
                />
              </Grid>
              <Grid item md={6}>
                <Autocomplete
                  id="country-select-demo"
                  options={provinceInfoTC?.districts || []}
                  fullWidth
                  autoHighlight
                  getOptionLabel={(option: any) => option?.name}
                  value={state.quanTc}
                  onChange={(_, value) =>
                    setState((prev: any) => ({ ...prev, quanTc: value }))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Qu???n/ Huy???n"
                      variant="outlined"
                      placeholder="Ch???n Qu???n/ Huy???n"
                    />
                  )}
                />
              </Grid>
              <Grid item md={6}>
                <Autocomplete
                  id="country-select-demo"
                  options={districtInfoTC?.wards || []}
                  fullWidth
                  autoHighlight
                  getOptionLabel={(option: any) => option?.name}
                  value={state.phuongTc}
                  onChange={(_, value) =>
                    setState((prev: any) => ({ ...prev, phuongTc: value }))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Ph?????ng/ X??"
                      variant="outlined"
                      placeholder="Ch???n Ph?????ng/ X??"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>

          <Divider sx={{ my: '30px' }} />

          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Button
                color="primary"
                variant="outlined"
                endIcon={<Save />}
                onClick={() => {
                  localStorage.setItem('info', JSON.stringify(state))
                  alert('???? l??u l???i k???t qu???')
                }}
              >
                L??u k???t qu???
              </Button>
            </Grid>
            <Grid item>
              <Grid container mt={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<Delete />}
                  onClick={() => {
                    localStorage.removeItem('info')
                    setState({
                      name: '',
                      icNumber: '',
                      dateOfBirth: new Date(),
                      phoneNumber: '',
                      diaChiThC: '',
                      thanhPhoThc: '',
                      phuongThc: '',
                      quanThc: '',
                      diaChiTC: '',
                      thanhPhoTc: '',
                      phuongTc: '',
                      quanTc: '',
                    })
                  }}
                >
                  Xo?? th??ng tin
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  endIcon={<Send />}
                  sx={{
                    marginLeft: '20px',
                  }}
                  onClick={handleRegister}
                >
                  ????ng k?? vay
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
