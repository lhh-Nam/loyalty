import BazarCard from '@component/BazarCard'
import BazarImage from '@component/BazarImage'
import Bimmer from '@component/common/Bimmer'
import Contact from '@component/common/Contact'
import { Container, FormControl, Grid, MenuItem, Select } from '@material-ui/core'
import ChevronRight from '@material-ui/icons/ChevronRight'
import { Pagination } from '@material-ui/lab'
import Style from '@styles/pages/car-loan/Product.module.scss'
import { DOMAIN } from '@utils/config/domain'
import { fromImageToURL } from '@utils/imageUrl'
import { formatCurrency } from '@utils/utils'
import Link from 'next/link'
import queryString from 'query-string'
import React, { FC, useState } from 'react'
import { useQuery } from 'react-query'
import { H4, Span } from '../Typography'
const getProducts = async (query: any) => {
  const res = await fetch(`${DOMAIN.URL}/product-informations?${query}`)
  return await res.json()
}
interface ProductProps {
  filter: any
}
const Product: FC<ProductProps> = (props) => {
  const { filter } = props

  const query = queryString.stringify(filter)

  // const [products, setProducts] = useState<any>([])
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize] = useState(6)
  const [sort, setSort] = useState(0)

  const { data: products = [] } = useQuery(['products', query], () =>
    getProducts(query)
  )
  const result = products?.reduce((prev: any, current: any) => {
    return [
      ...prev,
      ...current?.banks
        ?.filter((item: any) =>
          filter['banks.name'] ? item.name === filter['banks.name'] : item
        )
        ?.map((item: any) => ({ ...current, bank: item })),
    ]
  }, [])
  const handleChange = (event: any) => {
    setSort(Number(event.target.value))
  }

  const countPage = Math.ceil(result.length / pageSize)
  // const from = (pageNumber - 1) * pageSize + 1
  // const to = Math.min(from + pageSize - 1, lstProduct.length)

  const handleChangePage = (_: any, newPage: any) => {
    setPageNumber(newPage)
  }

  const comparePriceIncrease = (a: any, b: any) => {
    const priceA = Number(a?.price)
    const priceB = Number(b?.price)
    return priceA < priceB ? -1 : priceA > priceB ? 1 : 0
  }
  const comparePriceDecrease = (a: any, b: any) => {
    const priceA = Number(a?.price)
    const priceB = Number(b?.price)
    return priceA < priceB ? 1 : priceA > priceB ? -1 : 0
  }
  const getContent = () => {
    if (sort === 1) {
      return result
        ?.sort((a: any, b: any) => comparePriceIncrease(a, b))
        ?.slice((pageNumber - 1) * pageSize, (pageNumber - 1) * pageSize + pageSize)
    } else if (sort === 2) {
      return result
        ?.sort((a: any, b: any) => comparePriceDecrease(a, b))
        ?.slice((pageNumber - 1) * pageSize, (pageNumber - 1) * pageSize + pageSize)
    }

    console.log(result)
    return result?.slice(
      (pageNumber - 1) * pageSize,
      (pageNumber - 1) * pageSize + pageSize
    )
  }

  const renderProduct = (product: any, idx: number) => {
    const query = queryString.stringify({
      bank:
        product?.banks?.find((item: any) => item?.name === filter['banks.name'])
          ?.name || product?.banks?.[0]?.name,
    })
    console.log(query)
    return (
      <Grid item xs={12} sm={6} md={4} key={idx}>
        <BazarCard
          sx={{
            p: '1.5rem',
            height: '100%',
            borderRadius: '16px',
          }}
          hoverEffect
        >
          <Grid container flexDirection="column">
            <Grid item xs={12}>
              <Grid container pb={1.5}>
                <Span>
                  L??i su???t&nbsp;
                  <Span color="#0098CE">{product?.auto_product?.interestRate}</Span>%
                </Span>

                <Span color="grey.500" px={1}>
                  |
                </Span>

                <Span>
                  ??u ????i
                  <Span color="#0098CE">&nbsp;12&nbsp;</Span>
                  th??ng
                </Span>
              </Grid>

              <div className={Style.imgGroup}>
                {/* <LazyImage
                  src={product.imgUrl || '/assets/loyalty/car-loan/car-1.png'}
                  width={350}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  borderRadius="8px"
                  // alt={title}
                /> */}

                <BazarImage
                  src={fromImageToURL(product?.auto_product?.avatar?.url)}
                  sx={{
                    width: '100%',
                    height: '200px',
                  }}
                />

                <div className={Style.text}>
                  <span>{product?.autoSupplier?.name || 'Vay ?? t??'}</span>
                  <span>{product?.bank?.name}</span>
                </div>
              </div>

              <Grid
                container
                // flexDirection="column"
                width="100%"
                height="100%"
                justifyContent="space-between"
              >
                <Grid>
                  <H4 mb={0.5} mt={1.5}>
                    {product?.auto_product?.name}
                  </H4>
                  <Span className={Style.des} color="grey.600">
                    {product?.auto_product?.description}
                  </Span>
                  <H4 mb={1.5} mt={1}>
                    {formatCurrency(product.price)} VN??
                  </H4>
                </Grid>

                <Link href={`/product/${product.id}${query ? '?' + query : ''}`}>
                  <Grid
                    container
                    pt={1.5}
                    alignItems="center"
                    className={Style.btnGroup}
                  >
                    <Span color="#0098CE" mr={2}>
                      Xem chi ti???t g??i vay
                    </Span>
                    <ChevronRight fontSize="small" htmlColor="#0098CE" />
                  </Grid>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </BazarCard>
      </Grid>
    )
  }

  return (
    <>
      <Container sx={{ mb: '70px' }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          fontSize="18px"
          pb={1.5}
        >
          <Span>
            C??
            <Span color="#0098CE">&nbsp;{products.length}&nbsp;</Span>
            s???n ph???m vay ph?? h???p
          </Span>

          <FormControl size="small" className={Style.select}>
            <Select value={sort} onChange={handleChange}>
              <MenuItem value={0}>S???p s???p k???t qu???</MenuItem>
              <MenuItem value={1}>Gi?? t??ng d???n</MenuItem>
              <MenuItem value={2}>Gi?? gi???m d???n</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid container justifyContent="center" mt={2}>
          <Grid item xs={12}>
            <Grid container spacing={5}>
              {getContent().map((product: any, idx: any) =>
                renderProduct(product, idx)
              )}
            </Grid>
          </Grid>
        </Grid>
        <div className={Style.pagin}>
          <Pagination
            count={countPage}
            page={pageNumber}
            shape="rounded"
            onChange={handleChangePage}
          />
        </div>
      </Container>
      <Bimmer />
      <Contact />
    </>
  )
}

export default Product
