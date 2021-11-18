import { H3, Span } from '@component/Typography'
import { Button, Container, Grid, Radio } from '@material-ui/core'
import { makeStyles } from '@mui/styles'
import Style from '@styles/pages/product/Detail.module.scss'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
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

const Statistical: FC = () => {
  const router = useRouter()
  const [radio, setRadio] = useState({
    value: 'Giá trị khoản vay',
    endow: 'Theo ngân hàng',
    interest: 'Dư nợ giảm dần',
  })

  const [select, setSelect] = useState(
    'F5Second - Ngân hàng TMCP Xuất Nhập Khẩu Việt Nam'
  )

  // const [slider, setSlider] = useState({
  //   loanValue: 110,
  //   duration: 2,
  //   interest: 1,
  //   time: 3,
  //   later: 4,
  // })

  const [tren, setTren] = useState({
    value: 0,
    max: 10000,
    min: 0,
  })

  const handleTren = (value: number) => {
    setTren((prevState) => ({ ...prevState, value }))
  }

  const handleChange = (event: any, key: string) =>
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

  const renderLeft = () => {
    return (
      <>
        {/* <Grid className={Style.statisticalItem}>
          <CustomSelect
            value={select}
            options={lstBank}
            onChange={(value) => {
              setSelect(value)
            }}
          />
        </Grid> */}

        {/* <Grid className={Style.statisticalItem}>
          <CustomSlide
            min={0}
            max={2000}
            //value={slider.loanValue}
            name="loanValue"
            label="Giá trị khoảng vay"
            unit="tỷ"
          />
        </Grid> */}

        {/* <Grid className={Style.statisticalItem}>
          <CustomSlide
            min={1}
            max={12}
            value={slider.duration}
            name="duration"
            label="Thời hạn vay"
            unit="tháng"
          />
        </Grid>

        <Grid className={Style.haveLabel}>
          {renderGroupRadio(
            lstRadioInterest,
            'Phương thức tính lãi',
            radio.interest,
            'interest'
          )}
        </Grid> */}
      </>
    )
  }

  const renderRight = () => {
    return (
      <>
        <Grid className={Style.firstMonthWrap}>
          <H3>Thanh toán tháng đầu</H3>
          <H3>17.835.447 VNĐ</H3>
          <Grid container>
            <Span>Tỉ lệ vay 70%</Span>

            <Span className={Style.line}>|</Span>

            <Span>25 năm</Span>

            <Span className={Style.line}>|</Span>

            <Span>11%/năm</Span>
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
              {lstNote.map((note, idx) => {
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
            <CustomSlider
              label="nam"
              unit="nam"
              max={tren.max}
              min={tren.min}
              value={tren.value}
              onChange={(value) => handleTren(value)}
            />
          </Grid>
          {/* <Grid item xs={12} md={6}>
            {renderRight()}
          </Grid> */}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Statistical
