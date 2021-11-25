import { DOMAIN } from '@utils/config/domain'
import { getAsync, postAsync } from '@utils/helpers/transportRequestor'

export const getCarDetail = async (id: any): Promise<any> => {
  const apiUrl = `${DOMAIN.URL}/auto-products/${id}`
  return getAsync<any>(apiUrl)
}

export const postLoan = async (data: any): Promise<any> => {
  const apiUrl = `${DOMAIN.URL}/loan-registers`
  return postAsync<any, any>(apiUrl, data)
}
