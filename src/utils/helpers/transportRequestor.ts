import { IOperationResult } from '../IOperationResult'
import { requestAccessToken } from './accessTokenHandler'

const headersWithToken = (token: string | undefined): HeadersInit => {
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
}

const handleResponse = async (response: Response, method: string) => {
  if (!response.ok) return handleErrorResponse(response, method)
  return handleSuccessResponse(response, method)
}

const handleSuccessResponse = async (response: Response, method: string) => {
  if (method === 'GET') return response.json()

  const data = await response.json()
  return {
    isSuccessful: true,
    errorMessages: [],
    status: response.status,
    successData: data,
  }
}

const handleErrorResponse = async (response: Response, method: string) => {
  //const hashHistory = createHashHistory({ basename: '' })
  const isUnauthorizedRequest = response.status === 401 || response.status === 403
  if (isUnauthorizedRequest)
    if (method !== 'GET') {
      // do something

      const error = await response.json()
      return {
        isSuccessful: false,
        errorMessages: [error.errorMessage],
        status: response.status,
        successData: null,
      }
    }

  switch (response.status) {
    case 500:
      //do something...
      break
    case 404:
      //do something...
      break
    case 400:
      //do something...
      break
    default:
      break
  }
}

const getAsync = async <TResponse>(apiUrl: string): Promise<TResponse> => {
  const token = await requestAccessToken()
  const response = await fetch(apiUrl, {
    headers: headersWithToken(token),
  })

  //const response = await fetch(apiUrl)

  return handleResponse(response, 'GET')
}

const postAsync = async <TRequest, TResponse>(
  apiUrl: string,
  data: TRequest
): Promise<IOperationResult<TResponse>> => {
  return handleRequestAsync(apiUrl, data, 'POST')
}

const handleRequestAsync = async <TRequest, TResponse>(
  apiUrl: string,
  data: TRequest,
  method: string
): Promise<TResponse> => {
  const token = await requestAccessToken()
  const response = await fetch(apiUrl, {
    headers: headersWithToken(token),
    method: method,
    body: JSON.stringify(data),
  })

  return handleResponse(response, method)
}

export { getAsync, postAsync }
