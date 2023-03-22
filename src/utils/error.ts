type ErrorMessage = {
  name: string
  message: string
}

export class APIError extends Error {
  status: number
  data?: ErrorMessage[]

  constructor(message: string, status: number, data?: ErrorMessage[]) {
    super(message)
    Object.setPrototypeOf(this, APIError.prototype)

    this.name = 'APIError'
    this.status = status
    if (data) {
      this.data = data
    }
  }
}
