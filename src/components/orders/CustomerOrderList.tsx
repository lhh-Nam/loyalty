import FlexBox from '@component/FlexBox'
import CustomerDashboardNavigation from '@component/layout/CustomerDashboardNavigation'
import DashboardPageHeader from '@component/layout/DashboardPageHeader'
import TableRow from '@component/TableRow'
import { H5 } from '@component/Typography'
import { Pagination } from '@material-ui/core'
import ShoppingBag from '@material-ui/icons/ShoppingBag'
import React, { FC, Fragment } from 'react'
import OrderRow from './OrderRow'

// component props interface
export interface CustomerOrderListProps {}

const CustomerOrderList: FC<CustomerOrderListProps> = () => {
  return (
    <Fragment>
      <DashboardPageHeader
        title="My Orders"
        icon={ShoppingBag}
        navigation={<CustomerDashboardNavigation />}
      />

      <TableRow
        sx={{
          display: { xs: 'none', md: 'flex' },
          padding: '0px 18px',
          background: 'none',
        }}
        elevation={0}
      >
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Order #
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Status
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Date purchased
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Total
        </H5>
        <H5 flex="0 0 0 !important" color="grey.600" px={2.75} py={0.5} my={0}></H5>
      </TableRow>

      {orderList.map((item, ind) => (
        <OrderRow item={item} key={ind} />
      ))}

      <FlexBox justifyContent="center" mt={5}>
        <Pagination
          count={5}
          variant="outlined"
          color="primary"
          onChange={(data) => {
            console.log(data)
          }}
        />
      </FlexBox>
    </Fragment>
  )
}

const orderList = [
  {
    orderNo: '1050017AS',
    status: 'Pending',
    purchaseDate: new Date(),
    price: 350,
    href: '/orders/5452423',
  },
  {
    orderNo: '1050017AS',
    status: 'Processing',
    purchaseDate: new Date(),
    price: 500,
    href: '/orders/5452423',
  },
  {
    orderNo: '1050017AS',
    status: 'Delivered',
    purchaseDate: '2020/12/23',
    price: 700,
    href: '/orders/5452423',
  },
  {
    orderNo: '1050017AS',
    status: 'Delivered',
    purchaseDate: '2020/12/23',
    price: 700,
    href: '/orders/5452423',
  },
  {
    orderNo: '1050017AS',
    status: 'Cancelled',
    purchaseDate: '2020/12/15',
    price: 300,
    href: '/orders/5452423',
  },
]

export default CustomerOrderList
