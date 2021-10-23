import CustomSelect from '@component/common/CustomSelect'
import { Span } from '@component/Typography'
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  LinearProgress,
  Radio,
  RadioGroup,
} from '@material-ui/core'
import { makeStyles } from '@mui/styles'
import Style from '@styles/pages/product/Detail.module.scss'
import clsx from 'clsx'
import { FC, useState } from 'react'

const lstRadioValue = ['Giá trị khoản vay', 'Giá trị ô tô']
const lstRadioEndow = ['Tuỳ chỉnh', 'Theo ngân hàng']
const lstRadioInterest = ['Dư nợ giảm dần', 'trả đều hàng tháng']

const lstBank = [
  {
    name: 'Eximbank - Ngân hàng TMCP Xuất Nhập Khẩu Việt Nam',
    value: 'Eximbank - Ngân hàng TMCP Xuất Nhập Khẩu Việt Nam',
  },
  { name: 'Vietnambank', value: 'Vietnambank' },
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
  const [value, setValue] = useState('female')
  const [select, setSelect] = useState(
    'Eximbank - Ngân hàng TMCP Xuất Nhập Khẩu Việt Nam'
  )

  const handleChange = (event: any) => {
    setValue(event.target.value)
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

  const renderGroupRadio = (lstRadio: any, label?: string) => {
    return (
      <Grid container flexDirection="column" className={Style.radioWrap}>
        {label && <span className={Style.label}>{label}</span>}
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
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

  const LinearProgressLable = (props: any) => {
    const { label, valueProgress, valueNumber, unit } = props
    return (
      <Box className={Style.progressWrap}>
        <Box width="100%">
          <Grid container justifyContent="space-between" alignItems="center">
            <Span color="grey.600" fontWeight="600">
              {label}
            </Span>

            <Grid container className={Style.unit}>
              <Span>{valueNumber}</Span>
              <Span color="grey.600">{unit}</Span>
            </Grid>
          </Grid>
          <LinearProgress
            variant="determinate"
            value={valueProgress}
            classes={{
              root: Style.rootProgress,
              colorPrimary: Style.colorPrimary,
              barColorPrimary: Style.barColorPrimary,
            }}
          />
        </Box>
      </Box>
    )
  }

  const renderLeft = () => {
    return (
      <>
        <Grid className={Style.statisticalItem}>
          {renderGroupRadio(lstRadioValue)}
        </Grid>

        <Grid className={Style.statisticalItem}>
          <LinearProgressLable
            label="Giá trị khoảng vay"
            valueProgress={8}
            valueNumber="1.859"
            unit="tỷ"
          />
        </Grid>

        <Grid className={Style.statisticalItem}>
          <LinearProgressLable
            label="Thời hạn vay"
            valueProgress={83}
            valueNumber="300"
            unit="tháng"
          />
        </Grid>

        <Grid className={Style.haveLabel}>
          {renderGroupRadio(lstRadioEndow, 'Lãi suất ưu đãi')}
        </Grid>

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
          <LinearProgressLable
            label="Lãi suất ưu đãi"
            valueProgress={20}
            valueNumber="7.5"
            unit="%"
          />
        </Grid>

        <Grid className={Style.statisticalItem}>
          <LinearProgressLable
            label="Thời gian ưu đãi"
            valueProgress={22}
            valueNumber="1"
            unit="năm"
          />
        </Grid>

        <Grid className={Style.statisticalItem}>
          <LinearProgressLable
            label="Lãi suất sau ưu đãi"
            valueProgress={25}
            valueNumber="11"
            unit="%"
          />
        </Grid>

        <Grid className={Style.haveLabel}>
          {renderGroupRadio(lstRadioInterest, 'Phương thức tính lãi')}
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
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Statistical
