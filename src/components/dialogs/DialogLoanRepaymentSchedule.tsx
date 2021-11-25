import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { styled } from '@material-ui/styles'
import React, { FC } from 'react'

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#99d6eb',
    color: 'white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#f5f5f5',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const formatNumber = (number: number) =>
  Intl.NumberFormat('it-IT').format(Math.round(number))

interface DialogLoanRepaymentScheduleProps {
  principalAmount: number
  loanTerm: number
  interestAmount: number
  calculationMethod: string
}
const DialogLoanRepaymentSchedule: FC<DialogLoanRepaymentScheduleProps> = ({
  principalAmount,
  loanTerm,
  interestAmount,
  calculationMethod,
}) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button color="primary" variant="outlined" fullWidth onClick={handleClickOpen}>
        Xem Thanh Toán Từng Tháng
      </Button>
      <Dialog
        open={open}
        fullWidth
        maxWidth="lg"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Bảng ước tính khoản vay phải trả theo từng tháng
        </DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Tháng</StyledTableCell>
                  <StyledTableCell align="right">Dư nợ đầu kỳ</StyledTableCell>
                  <StyledTableCell align="right">Trả gốc trong kỳ</StyledTableCell>
                  <StyledTableCell align="right">Trả lãi trong kỳ</StyledTableCell>
                  <StyledTableCell align="right">
                    Số tiền trả trong kỳ
                  </StyledTableCell>
                  <StyledTableCell align="right">Dư nợ cuối kỳ</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {calculationMethod === 'Dư nợ giảm dần'
                  ? [...Array(loanTerm).keys()].map((_, index) => {
                      const principal = principalAmount / loanTerm
                      const interest =
                        ((principalAmount - principal * index) * interestAmount) /
                        loanTerm

                      return (
                        <StyledTableRow key={index}>
                          <StyledTableCell align="center" component="th" scope="row">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(principalAmount - principal * index)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(principal)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(interest)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(principal + interest)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(principalAmount - principal * (index + 1))}
                          </StyledTableCell>
                        </StyledTableRow>
                      )
                    })
                  : [...Array(loanTerm).keys()].map((_, index) => {
                      const principal = principalAmount / loanTerm
                      const interest = principal * interestAmount

                      return (
                        <StyledTableRow key={index}>
                          <StyledTableCell align="center" component="th" scope="row">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(principalAmount - principal * index)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(principal)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(interest)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(principal + interest)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(principalAmount - principal * (index + 1))}
                          </StyledTableCell>
                        </StyledTableRow>
                      )
                    })}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default DialogLoanRepaymentSchedule
