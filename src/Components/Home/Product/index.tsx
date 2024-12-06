import { Link } from 'react-router-dom'
import { Button, Desc, Infos, Li, NomeNota, Nota } from './styles'

export type Props = {
  titulo: string
  image: string
  nota: number
  descricao: string
  infos: string[]
  star: string
}

const Product = ({ descricao, image, infos, nota, titulo, star }: Props) => (
  <Li>
    <img src={image} />
    <Infos>
      {infos.map((info) => (
        <div key={info}>{info}</div>
      ))}
    </Infos>
    <NomeNota>
      <h3>{titulo}</h3>
      <Nota>
        <h3>{nota}</h3>
        <img src={star} />
      </Nota>
    </NomeNota>
    <Desc>{descricao}</Desc>
    <Link to="/profile">
      <Button>Saiba mais</Button>
    </Link>
  </Li>
)

export default Product
