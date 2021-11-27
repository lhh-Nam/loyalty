import CustomSelect from '@component/common/CustomSelect'
import DialogLoanRepaymentSchedule from '@component/dialogs/DialogLoanRepaymentSchedule'
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
import { formatCurrency } from '@utils/utils'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import CustomSlider from './CustomSlider'

const lstRadioInterest = ['Dư nợ giảm dần', 'Trả đều hàng tháng']

const lstNote = [
  {
    color: '#b5dced',
    title: 'Cần trả trước',
    amount: {
      string: '0',
      number: 0,
    },
  },
  {
    color: '#72b9db',
    title: 'Gốc cần trả',
    amount: {
      string: '0',
      number: 0,
    },
  },
  {
    color: '#0098CE',
    title: 'Lãi cần trả',
    amount: {
      string: '0',
      number: 0,
    },
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

const getUnitCurrency = (labelValue: number) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(3) + ' tỷ'
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(3) + ' triệu'
    : // Three Zeroes for Thousands
      formatCurrency(labelValue) + ' vnđ'
}

interface IStatisticalProps {}

interface IStatisticalProps extends Object {
  price: number
  loanRate: number
  loanTermMax: number
  interestRate: number
  banks: string[]
  currentBank: string
  auto_product?: any
}

const Statistical: FC<IStatisticalProps> = (props) => {
  const {
    banks,
    price,
    loanRate,
    loanTermMax,
    interestRate,
    currentBank,
    auto_product,
  } = props

  const router = useRouter()
  let lstBank = banks?.map((bank: any) => ({ ...bank, value: bank.code }))

  const [isDecreases, setIsDecreases] = useState(true)
  useEffect(() => {
    isDecreases ? handleDecreases() : handlePaidMonthly()
  }, [isDecreases])

  const [radio, setRadio] = useState({
    value: 'Trả đều hàng tháng',
    interest: 'Dư nợ giảm dần',
  })

  const [select, setSelect] = useState(currentBank)

  const [listNote, setListNote] = useState(lstNote)
  const [chartData, setChartData] = useState(data)
  const [chartTitle, setChartTitle] = useState(0)

  const [necessaryValue, setNecessaryValue] = useState<any>({
    min: 0,
    initiallyPaid: 0,
    loanValueCalculated: 0,
    loanTerm: 12,
  })

  const [bankInfo, setBankInfo] = useState<any>({
    loanRate,
    interestRate,
  })

  // commons function
  const monthlyProfit = (annualProfit: any, loanValue: any) =>
    (annualProfit * loanValue) / 12

  const getInterest = (loanValue: number, term: number) => {
    const tempPaid = loanValue / term

    let interestPayable = 0

    for (let i = 0; i < term; i++) {
      interestPayable += ((loanValue - tempPaid * i) * bankInfo.interestRate) / term
    }
    return interestPayable
  }
  // commons function

  // ============ Dư nợ giảm giần =================
  const handleDecreases = () => {
    const prepay = Math.round(price * (1 - bankInfo.loanRate)) // trả trước
    const initiallyPaid = price * bankInfo.loanRate // gốc cần trả
    const loanValueCalculated = price * bankInfo.loanRate // giá trị khoản vay

    setNecessaryValue((prev: any) => ({
      ...prev,
      initiallyPaid,
      loanValueCalculated,
      loanTerm: 12,
    }))

    setListNote((prev: any) => {
      const newState = [...prev]
      newState[0].amount = {
        string: getUnitCurrency(prepay),
        number: prepay,
      }
      newState[1].amount = {
        string: getUnitCurrency(loanValueCalculated),
        number: loanValueCalculated,
      }
      newState[2].amount = {
        string: getUnitCurrency(
          getInterest(loanValueCalculated, necessaryValue.loanTerm)
        ),
        number: getInterest(loanValueCalculated, necessaryValue.loanTerm),
      }
      return newState
    })

    setChartData((prev) => {
      const newState = [...prev]
      newState[0].value = getInterest(loanValueCalculated, necessaryValue.loanTerm)
      newState[1].value = loanValueCalculated

      return newState
    })

    setChartTitle(
      loanValueCalculated + getInterest(loanValueCalculated, necessaryValue.loanTerm)
    )
  }

  // ========x======== Dư nợ giảm giần ==========x=========

  // ============ Trả đều hàng tháng =================
  const handlePaidMonthly = () => {
    const prepay = Math.round(price * (1 - bankInfo.loanRate)) // trả trước
    const initiallyPaid = price * bankInfo.loanRate // gốc cần trả
    const loanValueCalculated = price * bankInfo.loanRate // giá trị khoản vay
    const interestPayable = loanValueCalculated * bankInfo.interestRate // lãi cần trả
    setNecessaryValue((prev: any) => ({
      ...prev,
      initiallyPaid,
      loanValueCalculated,
      loanTerm: 12,
    }))
    setListNote((prev: any) => {
      const newState = [...prev]
      newState[0].amount = {
        string: getUnitCurrency(prepay),
        number: prepay,
      }
      newState[1].amount = {
        string: getUnitCurrency(loanValueCalculated),
        number: loanValueCalculated,
      }
      newState[2].amount = {
        string: getUnitCurrency(interestPayable),
        number: interestPayable,
      }
      return newState
    })

    setChartData((prev: any) => {
      const newState = [...prev]
      newState[0].value = interestPayable
      newState[1].value = loanValueCalculated

      return newState
    })

    setChartTitle(loanValueCalculated + interestPayable)
  }

  // ========x======== Trả đều hàng tháng ==========x=========

  // ================= Giá trị khoản vay ====================

  // ===== decreases =====

  const handleLoanValueDecreases = (value: number) => {
    // tính giá trị khoản vay

    setListNote((prev: any) => {
      const newState = [...prev]
      newState[0].amount = {
        string: getUnitCurrency(price - value),
        number: price - value,
      }
      newState[1].amount = {
        string: getUnitCurrency(value),
        number: value,
      }
      newState[2].amount = {
        string: getUnitCurrency(getInterest(value, necessaryValue.loanTerm)),
        number: getInterest(value, necessaryValue.loanTerm),
      }
      return newState
    })

    setChartData((prev: any) => {
      const newState = [...prev]
      newState[0].value = getInterest(value, necessaryValue.loanTerm)
      newState[1].value = value

      return newState
    })

    setNecessaryValue((prevState: any) => ({
      ...prevState,
      loanValueCalculated: value,
    }))

    setChartTitle(value + getInterest(value, necessaryValue.loanTerm))
  }

  // ==x== decreases ==x==

  // ===== month =====
  const handleLoanValueMonth = (value: number) => {
    // tính giá trị khoản vay
    const interestPayable =
      monthlyProfit(bankInfo.interestRate, value) * necessaryValue.loanTerm

    setListNote((prev: any) => {
      const newState = [...prev]
      newState[0].amount = {
        string: getUnitCurrency(price - value),
        number: price - value,
      }
      newState[1].amount = {
        string: getUnitCurrency(value),
        number: value,
      }
      newState[2].amount = {
        string: getUnitCurrency(interestPayable),
        number: interestPayable,
      }
      return newState
    })

    setChartData((prev: any) => {
      const newState = [...prev]
      newState[0].value = interestPayable
      newState[1].value = value

      return newState
    })

    setNecessaryValue((prevState: any) => ({
      ...prevState,
      loanValueCalculated: value,
    }))

    setChartTitle(value + interestPayable)
  }
  // ==x== month ==x==

  // ========x======== Giá trị khoản vay ==========x=========

  // ================= thời hạn vay ====================

  // ===== decreases =====
  const handleLoanTermDecreases = (value: number) => {
    setListNote((prev: any) => {
      const newState = [...prev]
      newState[2].amount = {
        string: getUnitCurrency(
          getInterest(necessaryValue.loanValueCalculated, value)
        ),
        number: getInterest(necessaryValue.loanValueCalculated, value),
      }
      return newState
    })

    setChartData((prev: any) => {
      const newState = [...prev]
      newState[0].value = getInterest(necessaryValue.loanValueCalculated, value)
      newState[1].value = necessaryValue.loanValueCalculated

      return newState
    })

    setNecessaryValue((prevState: any) => ({
      ...prevState,
      loanTerm: value,
    }))

    setChartTitle(
      parseInt(necessaryValue.loanValueCalculated) +
        getInterest(necessaryValue.loanValueCalculated, value)
    )
  }
  // ==x== decreases ==x==

  // ===== month =====
  const handleLoanTermMonth = (value: number) => {
    const interestPayable =
      monthlyProfit(bankInfo.interestRate, necessaryValue.loanValueCalculated) *
      value
    setListNote((prev: any) => {
      const newState = [...prev]
      newState[2].amount = {
        string: getUnitCurrency(interestPayable),
        number: interestPayable,
      }
      return newState
    })

    setChartData((prev: any) => {
      const newState = [...prev]
      newState[0].value = interestPayable
      newState[1].value = necessaryValue.loanValueCalculated

      return newState
    })

    setNecessaryValue((prevState: any) => ({
      ...prevState,
      loanTerm: value,
    }))

    setChartTitle(interestPayable + parseInt(necessaryValue.loanValueCalculated))
  }
  // ==x== month ==x==

  // ========x======== thời hạn vay ==========x=========

  const handleChangeRadio = (event: any, key: string) => {
    setRadio({ ...radio, [key]: event.target.value })
    setIsDecreases(!isDecreases)
  }

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

  const handleSelect = (value: string) => {
    lstBank?.map((bank) => {
      if (bank.value === value) {
        setBankInfo({
          loanRate: bank.loanRate / 100,
          interestRate: bank.interestRate / 100,
        })
      }
    })
    setSelect(value)
  }

  const handleRegister = () => {
    let principalAmount = necessaryValue.loanValueCalculated
    let loanTerm = necessaryValue.loanTerm
    let interestAmount = bankInfo.interestRate

    let newList = [...Array(necessaryValue.loanTerm).keys()]?.map((_, idx) => {
      const principal = principalAmount / loanTerm
      const interest = isDecreases
        ? ((principalAmount - principal * idx) * interestAmount) / loanTerm
        : principal * interestAmount
      return {
        month: idx + 1,
        referenceInterest: interestAmount / loanTerm,
        interestAmount: interest,
        balance: principalAmount - principal * (idx + 1),
        monthlyPrincipal: principal,
        monthlyRepayment: interest + principal,
      }
    })

    // setCarState({
    //   ...carState,
    //   merchantId: 'merchant 1', // Nhà phân phối {fake}
    //   saleCode: 'sale code 1', // NV bán hàng
    //   bankCode: select, // Ngân hàng
    //   flagMarkBank: true, // True => Ngân hàng thẩm định, False => F5S thẩm định
    //   productName: name, // Model xe/ Tên xe (SP được chọn khi vay)
    //   productPrice: price.toString, // Giá trị xe
    //   collateral: 'The Chap Nha', // {fake}

    //   loan: {
    //     requestAmount: necessaryValue.loanValueCalculated, // Giá trị khoảng vay
    //     requestTenor: necessaryValue.loanTerm, // Thời hạn vay
    //     interestRate: bankInfo.interestRate, // Lãi xuất
    //     interestRateIncentive: 0.09, // Lãi xuất ưu đãi {fake}
    //     interestRateAfterIncentive: 0.197, // Lãi xuất sau ưu đãi {fake}
    //     tenorIncentive: 6, // Thời gian ưu đãi {fake}
    //     loanPurpose: 'Vay Mua xe', // Nhu cầu vay {fake}
    //   },

    //   offer: {
    //     emi: 10000000, // khoảng tiền trả hàng tháng {fake}
    //     repaymentAmount: listNote[0].amount.number, // Cần trả trước
    //     principalAmount: listNote[1].amount.number, // Số tiền vay
    //     interestAmount: listNote[2].amount.number, // Số tiền lãi
    //     calculationMethod: radio.interest, // phương thức tính lãi (dư nợ giảm dâ || trả đều hàng tháng)
    //     loanRepaymentSchedule: newList,
    //   },
    // })

    let loanInfo = {
      idSupplier: '1',
      idEmployee: '1',
      product: {
        merchantId: 'merchant 1', // Nhà phân phối {fake}
        saleCode: 'sale code 1', // NV bán hàng
        bankCode: select, // Ngân hàng
        flagMarkBank: true, // True => Ngân hàng thẩm định, False => F5S thẩm định
        productName: auto_product?.name, // Model xe/ Tên xe (SP được chọn khi vay)
        productPrice: price.toString(), // Giá trị xe
        collateral: 'The Chap Nha', // {fake}
      },
      loanInformation: {
        loan: {
          requestAmount: necessaryValue.loanValueCalculated, // Giá trị khoảng vay
          requestTenor: necessaryValue.loanTerm, // Thời hạn vay
          interestRate: bankInfo.interestRate, // Lãi xuất
          interestRateIncentive: 0.09, // Lãi xuất ưu đãi {fake}
          interestRateAfterIncentive: 0.197, // Lãi xuất sau ưu đãi {fake}
          tenorIncentive: 6, // Thời gian ưu đãi {fake}
          loanPurpose: 'Vay Mua xe', // Nhu cầu vay {fake}
        },

        offer: {
          emi: 10000000, // khoảng tiền trả hàng tháng {fake}
          repaymentAmount: listNote[0].amount.number, // Cần trả trước
          principalAmount: listNote[1].amount.number, // Số tiền vay
          interestAmount: listNote[2].amount.number, // Số tiền lãi
          calculationMethod: radio.interest, // phương thức tính lãi (dư nợ giảm dâ || trả đều hàng tháng)
          loanRepaymentSchedule: newList,
        },
      },
    }

    localStorage.setItem('info', JSON.stringify(loanInfo))

    router.push('/borrower-info')
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
            {lstRadio?.map((radio: any, idx: number) => {
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
              handleSelect(value)
            }}
          />
        </Grid>

        <Grid className={Style.statisticalItem}>
          <CustomSlider
            label="Giá trị khoảng vay"
            step={1000}
            unit="VNĐ"
            max={necessaryValue.initiallyPaid}
            min={necessaryValue.min}
            value={necessaryValue.loanValueCalculated}
            onChange={(value) =>
              isDecreases
                ? handleLoanValueDecreases(value)
                : handleLoanValueMonth(value)
            }
          />
        </Grid>

        <Grid className={Style.statisticalItem}>
          <CustomSlider
            step={1}
            label="Thời hạn vay"
            unit="tháng"
            max={loanTermMax}
            min={1}
            value={necessaryValue.loanTerm}
            onChange={(value) =>
              isDecreases
                ? handleLoanTermDecreases(value)
                : handleLoanTermMonth(value)
            }
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
            {formatCurrency(
              Math.round(
                necessaryValue.loanValueCalculated / necessaryValue.loanTerm +
                  monthlyProfit(
                    bankInfo.interestRate,
                    necessaryValue.loanValueCalculated
                  )
              )
            )}{' '}
            VNĐ
          </H3>
          <Grid container>
            <Span>Tỉ lệ vay {bankInfo.loanRate * 100}%</Span>

            <Span className={Style.line}>|</Span>

            <Span>{necessaryValue.loanTerm} tháng</Span>

            <Span className={Style.line}>|</Span>

            <Span>{bankInfo.interestRate * 100}%/năm</Span>
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
                  data={chartData}
                  innerRadius={65}
                  outerRadius={75}
                  startAngle={90}
                  endAngle={450}
                >
                  {chartData?.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <Grid className={Style.chartText}>
              {/* <H3>4.35&nbsp;</H3>
              <H3>tỷ</H3> */}
              <H3>{getUnitCurrency(Math.round(chartTitle))}</H3>
            </Grid>
          </Grid>
          <Grid item xs={6} height="100%">
            <Grid container className={Style.noteWrap}>
              {listNote?.map((note, idx) => {
                return (
                  <Grid className={Style.noteItem} key={idx}>
                    <div
                      style={{ background: `${note.color}` }}
                      className={Style.color}
                    ></div>
                    <Span>{note.title}</Span>
                    <Span>{note.amount.string}</Span>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          {/* <Button color="primary" variant="outlined" fullWidth>
            Xem thanh toán từng tháng
          </Button> */}
          <DialogLoanRepaymentSchedule
            principalAmount={necessaryValue.loanValueCalculated}
            loanTerm={necessaryValue.loanTerm}
            interestAmount={bankInfo.interestRate}
            calculationMethod={radio.interest}
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={handleRegister}
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
