import { DOMAIN } from '@utils/config/domain'
import { getAsync } from '@utils/helpers/transportRequestor'

export const getCarDetail = async (id: any): Promise<any> => {
  const apiUrl = `${DOMAIN.URL}/auto-products/${id}`
  return getAsync<any>(apiUrl)
}
