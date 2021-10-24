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
      {breadcrumbs.map((item) => {
        return (
          <>
            {!item.isActive ? (
              <Link underline="hover" color="inherit" href={item.link}>
                {item.label}
              </Link>
            ) : (
              <Typography sx={{ fontWeight: 'bold' }} color="text.primary">
                {item.label}
              </Typography>
            )}
          </>
        )
      })}
    </Breadcrumbs>
  )
}

export default BreadcrumbsCustom
