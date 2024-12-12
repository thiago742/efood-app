import { Link } from 'react-router-dom'
import { Button, Desc, Infos, Li, NomeNota, Nota, RestImg } from './styles'
import star from '../../../assets/estrela.png'

type Props = {
  id: number
  titulo: string
  image: string
  nota: number
  descricao: string
  infos: string[]
}

const Product = ({ descricao, image, infos, nota, titulo, id }: Props) => (
  <Li>
    <RestImg src={image} />
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
    <Link to={`/${id}`}>
      <Button>Saiba mais</Button>
    </Link>
  </Li>
)

export default Product
