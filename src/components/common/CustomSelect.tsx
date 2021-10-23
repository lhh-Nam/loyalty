import { FormControl, MenuItem, Select, Typography } from '@material-ui/core'
import Style from '@styles/components/CustomSelect.module.scss'
import { FC, useState } from 'react'

interface IOption {
  name: string
  value: string | number
  renderItem?: JSX.Element
}

interface ISelectProps {
  value: string | number | null
  label?: string
  options?: IOption[]
  onChange: (value: string) => void
  placeholder?: string
  isCustomDisplayValue?: boolean
}

const CustomSelect: FC<ISelectProps> = (props) => {
  const { label, options, onChange, value, placeholder, isCustomDisplayValue } =
    props

  const [display, setDiplay] = useState(
    options?.filter((e) => e.value === value).shift()?.renderItem
  )

  const handleOnChange = (event: any) => {
    onChange(event.target.value)
    if (isCustomDisplayValue) {
      setDiplay(
        options?.filter((e) => e.value === event.target.value).shift()?.renderItem
      )
    }
  }

  const renderSelectItem = () => {
    return options?.map((option) => {
      return (
        <MenuItem
          value={option.value}
          key={option.value}
          className={Style.optionItem}
        >
          <span>{option.name}</span>
        </MenuItem>
      )
    })
  }

  const renderPlaceholder = () => {
    return <span className={Style.placeholder}>{placeholder}</span>
  }

  return (
    <div className={Style.container}>
      {label && (
        <Typography variant="body1" className={Style.title}>
          {label}
        </Typography>
      )}
      <FormControl variant="outlined" size="small" fullWidth={true}>
        <Select
          color="primary"
          value={value}
          onChange={handleOnChange}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
            },
            // getContentAnchorEl: null,
          }}
          displayEmpty
          renderValue={
            display
              ? () => display
              : value
              ? () => <span>{value}</span>
              : () => renderPlaceholder()
          }
          className={Style.select}
        >
          {options && renderSelectItem()}
        </Select>
      </FormControl>
    </div>
  )
}

export default CustomSelect
