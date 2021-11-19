import { Span } from '@component/Typography'
import { Box, Grid, Slider, TextField } from '@material-ui/core'
import Style from '@styles/pages/product/Detail.module.scss'
import React from 'react'

interface ICustomSliderProps {
  label?: string
  unit?: string
  onChange: (value: number) => void
  max?: number
  min?: number
  value?: number
  step?: number
}

// const CustomSlider: FC<ICustomSliderProps> = (props) => {

//   const { label, unit, max, min, value, onChange, step } = props

//   const handleOnChange = (e: any) => {
//     onChange(e?.target?.value)
//   }

//   return (
//     <Box className={Style.progressWrap}>
//       <Box width="100%">
//         <Grid container justifyContent="space-between" alignItems="center">
//           <Span color="grey.600">{label}</Span>

//           <Grid container className={Style.unit}>
//             <TextField
//               fullWidth
//               placeholder="RFC"
//               onChange={handleOnChange}
//               value={value || 0}
//               InputProps={{
//                 endAdornment: (
//                   <div>
//                     <Span color="grey.600" pl={1}>
//                       {unit}
//                     </Span>
//                   </div>
//                 ),
//               }}
//             />
//           </Grid>
//         </Grid>
//         <Slider
//           max={max}
//           min={min}
//           step={step}
//           valueLabelDisplay="auto"
//           value={value}
//           onChange={(e) => handleOnChange(e)}
//           classes={{
//             root: Style.root,
//             track: Style.track,
//             rail: Style.rail,
//             thumb: Style.thumb,
//             valueLabel: Style.valueLabel,
//           }}
//         />
//       </Box>
//     </Box>
//   )
// }

// export default CustomSlider

const CustomTextField = React.forwardRef<HTMLInputElement, ICustomSliderProps>(
  (props, ref) => {
    const { label, unit, max, min, value, onChange, step } = props

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
                ref={ref}
                fullWidth
                placeholder="RFC"
                onChange={handleOnChange}
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
            step={step}
            valueLabelDisplay="auto"
            value={value}
            onChange={(e) => handleOnChange(e)}
            classes={{
              root: Style.root,
              track: Style.track,
              rail: Style.rail,
              thumb: Style.thumb,
              valueLabel: Style.valueLabel,
            }}
          />
        </Box>
      </Box>
    )
  }
)

export default CustomTextField
