import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ItemCarrinho = {
  id: number
  titulo: string
  preco: number
  quantidade: number
  image: string
}

type CarrinhoState = {
  itens: ItemCarrinho[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ItemCarrinho>) => {
      const comida = action.payload
      const itemExistente = state.itens.find((item) => item.id === comida.id)

      if (itemExistente) {
        itemExistente.quantidade += comida.quantidade
      } else {
        state.itens.push(comida)
      }
    },

    remover: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.itens = state.itens.filter((item) => item.id !== id)
    },

    atualizarQuantidade: (
      state,
      action: PayloadAction<{ id: number; quantidade: number }>
    ) => {
      const { id, quantidade } = action.payload
      const itemExistente = state.itens.find((item) => item.id === id)

      if (itemExistente && quantidade > 0) {
        itemExistente.quantidade = quantidade
      } else if (itemExistente && quantidade === 0) {
        state.itens = state.itens.filter((item) => item.id !== id)
      }
    },

    limparCarrinho: (state) => {
      state.itens = []
    }
  }
})

export const { adicionar, remover, atualizarQuantidade, limparCarrinho } =
  carrinhoSlice.actions
export default carrinhoSlice.reducer
