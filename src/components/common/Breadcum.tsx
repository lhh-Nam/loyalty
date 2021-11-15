import { Breadcrumbs, Link, Typography } from '@material-ui/core'
import { FC } from 'react'

interface BreadcrumbsCustomProps {
  breadcrumbs: {
    label: string
    link?: string
    isActive: boolean
  }[]
}

const BreadcrumbsCustom: FC<BreadcrumbsCustomProps> = ({ breadcrumbs }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((item, idx) => {
        if (item.isActive) {
          return (
            <Typography key={idx} sx={{ fontWeight: 'bold' }} color="text.primary">
              {item.label}
            </Typography>
          )
        } else {
          return (
            <Link key={idx} underline="hover" color="inherit" href={item.link}>
              {item.label}
            </Link>
          )
        }
      })}
    </Breadcrumbs>
  )
}

export default BreadcrumbsCustom
