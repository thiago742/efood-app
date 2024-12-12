import { Props } from '../../Home/List'
import Product from '../Product'
import { Container, FoodList } from './styles'

const List = ({ foods = [] }: Props) => (
  <Container>
    <FoodList>
      {foods.map((food) => (
        <li key={food.id}>
          <Product
            image={food.foto}
            titulo={food.nome}
            descricao={food.descricao}
            preco={food.preco}
            id={food.id}
            porcao={food.porcao}
          />
        </li>
      ))}
    </FoodList>
  </Container>
)

export default List
