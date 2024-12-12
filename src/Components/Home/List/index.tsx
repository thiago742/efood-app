import { Food } from '../../../pages/Home'
import Product from '../Product'
import { Container, FoodList } from './styles'

export type Props = {
  foods: Food[]
}

const List = ({ foods = [] }: Props) => (
  <Container>
    <FoodList>
      {foods.map((food) => (
        <li key={food.id}>
          <Product
            id={food.id}
            image={food.capa}
            descricao={food.descricao}
            titulo={food.titulo}
            nota={food.avaliacao}
            infos={[food.tipo]}
          />
        </li>
      ))}
    </FoodList>
  </Container>
)

export default List
