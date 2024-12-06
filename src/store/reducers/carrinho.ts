import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import FoodProf from '../../models/FoodProf'

type CarrinhoState = {
  itens: FoodProf[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<FoodProf, 'quantidade'>>) => {
      const comida = action.payload
      const itemExistente = state.itens.find((item) => item.id === comida.id)

      if (itemExistente) {
        itemExistente.quantidade += 1
      } else {
        state.itens.push({ ...comida, quantidade: 1 })
      }
    },

    remover: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.itens = state.itens.filter((item) => item.id !== id)
    }
  }
})

export const { adicionar, remover } = carrinhoSlice.actions
export default carrinhoSlice.reducer
