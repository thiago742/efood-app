import { Container } from './styles'
import bgbanner from '../../../assets/imagem_de_fundo.png'

const Banner = () => (
  <Container style={{ backgroundImage: `url(${bgbanner})` }}>
    <h2>Italiana</h2>
    <h2>
      <b>La Dolce Vita Trattoria</b>
    </h2>
  </Container>
)

export default Banner
