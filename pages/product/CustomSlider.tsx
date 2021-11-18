import { Span } from '@component/Typography'
import { Box, Grid, Slider, TextField } from '@material-ui/core'
import Style from '@styles/pages/product/Detail.module.scss'
import { FC, useState } from 'react'

interface ICustomSliderProps {
  label?: string
  unit?: string
  onChange: (value: number) => void
  max?: number
  min?: number
  value?: number
}

const CustomSlider: FC<ICustomSliderProps> = (props) => {
  const { label, unit, max, min, value, onChange } = props
  const [sliderValue, setsliderValue] = useState(15)
  const nam = (e: any) => {
    setsliderValue(parseInt(e.target.value))
  }

  const handleOnChange = (e: any) => {
    onChange(e?.target?.value)
  }

  return (
    <Box className={Style.progressWrap}>
      <Box width="100%">
        <Grid container justifyContent="space-between" alignItems="center">
          <Span color="grey.600">{label}</Span>

          <Grid container className={Style.unit}>
            <TextField
              fullWidth
              placeholder="RFC"
              onChange={(e) => handleOnChange(e)}
              value={value || 0}
              InputProps={{
                endAdornment: (
                  <div>
                    <Span color="grey.600" pl={1}>
                      {unit}
                    </Span>
                  </div>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Slider
          max={max}
          min={min}
          valueLabelDisplay="auto"
          value={value}
          onChange={(e) => handleOnChange(e)}
        />
      </Box>
    </Box>
  )
}

export default CustomSlider
