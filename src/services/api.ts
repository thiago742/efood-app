import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

export type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
  }
  delivery: {
    end: string
    cidade: string
    cep: string
    numero: string
    complemento: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
      }
      name?: string
      number?: string
      expires?: {
        month: string
        year: string
      }
      code?: string
    }
    installments: number
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { usePurchaseMutation } = api

export default api
