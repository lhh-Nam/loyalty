export interface IOperationResult<T> {
  isSuccessful: boolean
  errorMessages: []
  status: number
  successData: T
}
