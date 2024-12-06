import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram-round-svgrepo-com (1) 1.png'
import facebook from '../../assets/facebook-round-svgrepo-com 1.png'
import twitter from '../../assets/twitter-2-svgrepo-com 1.png'
import { Container, SocialList } from './styles'
import bg from '../../assets/Rectangle 2.png'

const Footer = () => (
  <Container style={{ backgroundImage: `url(${bg})` }}>
    <img src={logo} />

    <SocialList>
      <li>
        <img src={instagram} />
      </li>
      <li>
        <img src={facebook} />
      </li>
      <li>
        <img src={twitter} />
      </li>
    </SocialList>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
)

export default Footer
