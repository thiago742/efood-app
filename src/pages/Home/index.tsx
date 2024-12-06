import Header from '../../Components/Home/Header'
import Food from '../../models/Food'

import sushi from '../../assets/imagem.png'
import star from '../../assets/estrela.png'
import pasta from '../../assets/image 1.png'
import Footer from '../../Components/Footer'
import HomeList from '../../Components/Home/List'

const pratos: Food[] = [
  {
    titulo: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 1,
    image: pasta,
    infos: ['Destaque da semana', 'Italiana'],
    nota: 4.9,
    star: star
  },
  {
    titulo: 'Sushi Hyoki',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 2,
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    nota: 4.9,
    star: star
  },
  {
    titulo: 'Sushi Hyoki',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 3,
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    nota: 4.9,
    star: star
  },
  {
    titulo: 'Sushi Hyoki',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 4,
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    nota: 4.9,
    star: star
  },
  {
    titulo: 'Sushi Hyoki',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 5,
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    nota: 4.9,
    star: star
  },
  {
    titulo: 'Sushi Hyoki',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 6,
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    nota: 4.9,
    star: star
  }
]

const Home = () => (
  <>
    <Header />
    <HomeList foods={pratos} />
    <Footer />
  </>
)

export default Home
