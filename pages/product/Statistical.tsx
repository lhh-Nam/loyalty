import CustomSelect from '@component/common/CustomSelect'
import { H3, Span } from '@component/Typography'
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@material-ui/core'
import { makeStyles } from '@mui/styles'
import Style from '@styles/pages/product/Detail.module.scss'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import CustomSlider from './CustomSlider'

const lstRadioInterest = ['Dư nợ giảm dần', 'trả đều hàng tháng']

const lstBank = [
  {
    name: 'F5Second',
    value: 'F5Second',
  },
  { name: 'Vietnambank', value: 'Vietnambank' },
]

const lstNote = [
  {
    color: '#b5dced',
    title: 'Cần trả trước',
    amount: '0 triệu',
  },
  {
    color: '#72b9db',
    title: 'Gốc cần trả',
    amount: '1.85 tỷ',
  },
  {
    color: '#0098CE',
    title: 'Lãi cần trả',
    amount: '2.5 tỷ',
  },
]

const data = [
  { name: 'A', value: 150, color: '#0098CE' },
  { name: 'B', value: 70, color: '#72b9db' },
]

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '1px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#fff',
    boxShadow: 'inset 0 0 0 1px #0098CE, inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#0098CE,#0098CE 28%,transparent 32%)',
      content: '""',
      borderColor: 'red',
    },
  },
})

interface IStatisticalProps {
  price: number
  loanRate: number
  loanTerm: number
  annualProfit: number
}

const Statistical: FC<IStatisticalProps> = (props) => {
  const { price, loanRate, loanTerm, annualProfit } = props
  const router = useRouter()
  const [radio, setRadio] = useState({
    value: 'Giá trị khoản vay',
    endow: 'Theo ngân hàng',
    interest: 'Dư nợ giảm dần',
  })

  const [select, setSelect] = useState(
    'F5Second - Ngân hàng TMCP Xuất Nhập Khẩu Việt Nam'
  )

  const [listNote, setListNote] = useState(lstNote)
  const [necessaryValue, setNecessaryValue] = useState<any>({
    min: 0,
    initiallyPaid: 0,
    loanValueCalculated: 0,
    loanTerm: 0,
  })

  const [loanValue, setLoanValue] = useState({
    value: 0,
    max: 10000,
    min: 0,
  })

  useEffect(() => {
    handleDecreases()
  }, [])

  const handleDecreases = () => {
    // Dư nợ giảm dần
    const prepay = Math.round(price * (1 - loanRate)) // trả trước
    const initiallyPaid = price * loanRate // gốc cần trả
    const loanValueCalculated = price * loanRate // giá trị khoản vay
    const interestPayable = loanValueCalculated * annualProfit // lãi cần trả
    setNecessaryValue((prev: any) => ({
      ...prev,
      initiallyPaid,
      loanValueCalculated,
      loanTerm: 12,
    }))
    setListNote((prev: any) => {
      const newState = [...prev]
      newState[0].amount = prepay
      newState[1].amount = loanValueCalculated
      newState[2].amount = interestPayable
      return newState
    })
  }

  const monthlyProfit = (annualProfit: any, loanValue: any) =>
    (annualProfit * loanValue) / 12

  const handleLoanValue = (value: number) => {
    // tính giá trị khoản vay
    const interestPayable = monthlyProfit(annualProfit, value) * loanTerm

    setListNote((prev: any) => {
      const newState = [...prev]
      newState[0].amount = price - value
      newState[1].amount = value
      newState[2].amount = interestPayable
      return newState
    })

    setNecessaryValue((prevState: any) => ({
      ...prevState,
      loanValueCalculated: value,
    }))
  }

  const handleLoanTerm = (value: number) => {
    const interestPayable =
      monthlyProfit(annualProfit, necessaryValue.loanValueCalculated) * value
    setListNote((prev: any) => {
      const newState = [...prev]
      newState[2].amount = interestPayable
      return newState
    })

    setNecessaryValue((prevState: any) => ({
      ...prevState,
      loanTerm: value,
    }))
  }

  const handleChangeRadio = (event: any, key: string) =>
    setRadio({ ...radio, [key]: event.target.value })

  function StyledRadio(props: any) {
    const classes = useStyles()

    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    )
  }

  const renderGroupRadio = (
    lstRadio: any,
    label: string,
    value: any,
    key: string
  ) => {
    return (
      <Grid container flexDirection="column" className={Style.radioWrap}>
        {label && <span className={Style.label}>{label}</span>}
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={(e) => handleChangeRadio(e, key)}
          >
            {lstRadio.map((radio: any, idx: number) => {
              return (
                <FormControlLabel
                  key={idx}
                  value={radio}
                  control={<StyledRadio />}
                  label={radio}
                />
              )
            })}
          </RadioGroup>
        </FormControl>
      </Grid>
    )
  }

  const renderLeft = () => {
    return (
      <>
        <Grid className={Style.statisticalItem}>
          <CustomSelect
            value={select}
            options={lstBank}
            onChange={(value) => {
              setSelect(value)
            }}
          />
        </Grid>

        <Grid className={Style.statisticalItem}>
          <CustomSlider
            label="Giá trị khoảng vay"
            unit="VNĐ"
            max={necessaryValue.initiallyPaid}
            min={necessaryValue.min}
            value={necessaryValue.loanValueCalculated}
            onChange={(value) => handleLoanValue(value)}
          />
        </Grid>

        <Grid className={Style.statisticalItem}>
          <CustomSlider
            label="Thời hạn vay vay"
            unit="tháng"
            max={loanTerm}
            min={1}
            value={necessaryValue.loanTerm}
            onChange={(value) => handleLoanTerm(value)}
          />
        </Grid>

        <Grid className={Style.haveLabel}>
          {renderGroupRadio(
            lstRadioInterest,
            'Phương thức tính lãi',
            radio.interest,
            'interest'
          )}
        </Grid>
      </>
    )
  }

  const renderRight = () => {
    return (
      <>
        <Grid className={Style.firstMonthWrap}>
          <H3>Thanh toán tháng đầu</H3>
          <H3>
            {Math.round(
              necessaryValue.loanValueCalculated / necessaryValue.loanTerm +
                monthlyProfit(annualProfit, necessaryValue.loanValueCalculated)
            )}{' '}
            VNĐ
          </H3>
          <Grid container>
            <Span>Tỉ lệ vay {loanRate * 100}%</Span>

            <Span className={Style.line}>|</Span>

            <Span>{necessaryValue.loanTerm} tháng</Span>

            <Span className={Style.line}>|</Span>

            <Span>{annualProfit * 100}%/năm</Span>
          </Grid>
        </Grid>

        <Grid container className={Style.chartWrap}>
          <Grid item xs={6} className={Style.chartImage}>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  data={data}
                  innerRadius={65}
                  outerRadius={75}
                  startAngle={90}
                  endAngle={450}
                >
                  {data?.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <Grid className={Style.chartText}>
              <H3>4.35&nbsp;</H3>
              <H3>tỷ</H3>
            </Grid>
          </Grid>
          <Grid item xs={6} height="100%">
            <Grid container className={Style.noteWrap}>
              {listNote.map((note, idx) => {
                return (
                  <Grid className={Style.noteItem} key={idx}>
                    <div
                      style={{ background: `${note.color}` }}
                      className={Style.color}
                    ></div>
                    <Span>{note.title}</Span>
                    <Span>{note.amount}</Span>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Button color="primary" variant="outlined" fullWidth>
            Xem thanh toán từng tháng
          </Button>

          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={() => {
              router.push('/borrower-info')
            }}
          >
            Đăng kí gói vay
          </Button>
        </Grid>
      </>
    )
  }

  return (
    <Container>
      <Grid container bgcolor="white" mb={7.5} p={3} borderRadius={2}>
        <Grid container spacing={3} className={Style.statisticalWrap}>
          <Grid item xs={12} md={6}>
            {renderLeft()}
          </Grid>
          <Grid item xs={12} md={6}>
            {renderRight()}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Statistical
