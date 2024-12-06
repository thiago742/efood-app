import logo from '../../../assets/logo.png'
import { Container } from './styles'
import bg from '../../../assets/fundo.png'

const Header = () => (
  <Container style={{ backgroundImage: `url(${bg})` }}>
    <img src={logo} />
    <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
  </Container>
)

export default Header
