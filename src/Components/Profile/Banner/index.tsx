import { Container } from './styles'

type BannerProps = {
  capa: string
  titulo: string
  tipo: string
}

const Banner = ({ capa, titulo, tipo }: BannerProps) => (
  <Container
    style={{
      backgroundImage: `url(${capa})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}
  >
    <p>{tipo}</p>
    <h2>{titulo}</h2>
  </Container>
)

export default Banner
