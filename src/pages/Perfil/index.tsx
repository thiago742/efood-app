import FoodProf from '../../models/FoodProf'

import Footer from '../../Components/Footer'
import Header from '../../Components/Profile/Header'
import List from '../../Components/Profile/List'
import Banner from '../../Components/Profile/Banner'
import pizza from '../../assets/image 3.png'

const pratos: FoodProf[] = [
  {
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 1,
    image: pizza,
    quantidade: 0,
    preco: 60.9
  },
  {
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 2,
    image: pizza,
    quantidade: 0,
    preco: 60.9
  },
  {
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 3,
    image: pizza,
    quantidade: 0,
    preco: 60.9
  },
  {
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 4,
    image: pizza,
    quantidade: 0,
    preco: 60.9
  },
  {
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 5,
    image: pizza,
    quantidade: 0,
    preco: 60.9
  },
  {
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 6,
    image: pizza,
    quantidade: 0,
    preco: 60.9
  }
]

const Perfil = () => (
  <>
    <Header />
    <Banner />
    <List foods={pratos} />
    <Footer />
  </>
)

export default Perfil
