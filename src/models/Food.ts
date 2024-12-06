class Food {
  titulo: string
  image: string
  star: string
  nota: number
  descricao: string
  infos: string[]
  id: number

  constructor(
    titulo: string,
    image: string,
    star: string,
    nota: number,
    descricao: string,
    infos: string[],
    id: number
  ) {
    this.id = id
    this.titulo = titulo
    this.nota = nota
    this.descricao = descricao
    this.image = image
    this.infos = infos
    this.star = star
  }
}

export default Food
