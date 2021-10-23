import { SvgIcon, SvgIconProps } from '@material-ui/core'
import React from 'react'

const Send = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      style={{ width: '24px', height: '24px' }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M9.5088 4.22965L18.0688 8.50965C21.9088 10.4296 21.9088 13.5696 18.0688 15.4896L9.5088 19.7696C3.7488 22.6496 1.3988 20.2896 4.2788 14.5396L5.1488 12.8096C5.3988 12.2996 5.3988 11.7096 5.1488 11.1996L4.2788 9.45965C1.3988 3.70965 3.7588 1.34965 9.5088 4.22965Z"
        fill="white"
      />
      <path
        d="M14.839 12.75H9.43896C9.02896 12.75 8.68896 12.41 8.68896 12C8.68896 11.59 9.02896 11.25 9.43896 11.25H14.839C15.249 11.25 15.589 11.59 15.589 12C15.589 12.41 15.249 12.75 14.839 12.75Z"
        fill="white"
      />
    </SvgIcon>
  )
}

export default Send
