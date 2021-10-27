import BazarMenu from '@component/BazarMenu'
import FlexBox from '@component/FlexBox'
import { Box, Card, MenuItem, TextField } from '@material-ui/core'
import TouchRipple from '@material-ui/core/ButtonBase'
import { styled } from '@material-ui/core/styles'
import { debounce } from '@material-ui/core/utils'
import KeyboardArrowDownOutlined from '@material-ui/icons/KeyboardArrowDownOutlined'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import Link from 'next/link'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'

// styled components
// also used in the GrocerySearchBox component
export const SearchOutlinedIcon = styled(SearchOutlined)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginRight: 6,
}))

// also used in the GrocerySearchBox component
export const SearchResultCard = styled(Card)(() => ({
  position: 'absolute',
  top: '100%',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  width: '100%',
  zIndex: 99,
}))

const DropDownHandler = styled(FlexBox)(({ theme }) => ({
  borderTopRightRadius: 300,
  borderBottomRightRadius: 300,
  whiteSpace: 'pre',
  borderLeft: `1px solid ${theme.palette.text.disabled}`,
  [theme.breakpoints.down('xs')]: {
    display: 'none',
  },
}))

const SearchBox: FC = () => {
  const [category, setCategory] = useState('Tất cả')
  const [resultList, setResultList] = useState<string[]>([])
  const parentRef = useRef()

  const handleCategoryChange = (cat: any) => () => {
    setCategory(cat)
  }

  const search = debounce((e) => {
    const value = e.target?.value

    if (!value) setResultList([])
    else setResultList(dummySearchResult)
  }, 200)

  const hanldeSearch = useCallback((event) => {
    event.persist()
    search(event)
  }, [])

  const handleDocumentClick = () => {
    setResultList([])
  }

  useEffect(() => {
    window.addEventListener('click', handleDocumentClick)
    return () => {
      window.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  const categoryDropdown = (
    <BazarMenu
      direction="left"
      handler={
        <DropDownHandler
          alignItems="center"
          bgcolor="grey.100"
          height="100%"
          px={3}
          color="grey.700"
          component={TouchRipple}
        >
          <Box mr={0.5}>{category}</Box>
          <KeyboardArrowDownOutlined fontSize="small" color="inherit" />
        </DropDownHandler>
      }
    >
      {categories.map((item) => (
        <MenuItem key={item} onClick={handleCategoryChange(item)}>
          {item}
        </MenuItem>
      ))}
    </BazarMenu>
  )

  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="670px"
      mx="auto"
      {...{ ref: parentRef }}
    >
      <TextField
        variant="outlined"
        placeholder="Searching for..."
        fullWidth
        onChange={hanldeSearch}
        InputProps={{
          sx: {
            height: 44,
            borderRadius: 300,
            paddingRight: 0,
            color: 'grey.700',
            overflow: 'hidden',
          },
          endAdornment: categoryDropdown,
          startAdornment: <SearchOutlinedIcon fontSize="small" />,
        }}
      />

      {!!resultList.length && (
        <SearchResultCard elevation={2}>
          {resultList.map((item) => (
            <Link href={`/product/search/${item}`} key={item}>
              <MenuItem key={item}>{item}</MenuItem>
            </Link>
          ))}
        </SearchResultCard>
      )}
    </Box>
  )
}

const categories = [
  'Tất cả',
  'Bất động sản',
  'Tiêu dùng',
  'Ô tô',
  'Thẻ tín dụng',
  'Xe máy',
  'Tín chấp',
]

const dummySearchResult = [
  'Cho thuê nhà Nguyễn Thị Định, Kinh doanh, ô tô tránh, Dt 42m, 5 tầng, Giá 25 triệu.',
  'Cho thuê nhà ngõ oto tránh nhau đường Nguyễn Thị Định, 90m2*7 tầng, thang máy',
  'Cho thuê nhà Nguyễn Thị Định, Quận Cầu Giấy phù hợp KD, VP, hộ GĐ 60m2.',
]

export default SearchBox
