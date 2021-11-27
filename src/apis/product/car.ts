import { DOMAIN } from '@utils/config/domain'
import { postAsync } from '@utils/helpers/transportRequestor'

export const getCarDetail = async (id: any): Promise<any> => {
  const apiUrl = `${DOMAIN.URL}/product-informations/${id}`
  // return getAsync<any>(apiUrl)
  return fetch(apiUrl).then((res) => res.json())
}

export const postLoan = async (data: any): Promise<any> => {
  const apiUrl = `${DOMAIN.URL}/loan-registers`
  return postAsync<any, any>(apiUrl, data)
}
