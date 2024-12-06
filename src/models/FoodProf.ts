class FoodProf {
  id: number
  image: string
  titulo: string
  descricao: string
  quantidade: number
  preco: number

  constructor(
    titulo: string,
    image: string,
    descricao: string,
    id: number,
    quantidade = 1,
    preco: number
  ) {
    this.id = id
    this.preco = preco
    this.titulo = titulo
    this.descricao = descricao
    this.image = image
    this.quantidade = quantidade
  }
}

export default FoodProf
