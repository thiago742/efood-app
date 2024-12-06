import Product from '../Product'
import Food from '../../../models/Food'
import { Container, FoodList } from './styles'

type Props = {
  foods: Food[]
}

const List = ({ foods = [] }: Props) => (
  <Container>
    <FoodList>
      {foods.map((food) => (
        <Product
          key={food.id}
          image={food.image}
          star={food.star}
          descricao={food.descricao}
          infos={food.infos}
          nota={food.nota}
          titulo={food.titulo}
        />
      ))}
    </FoodList>
  </Container>
)

export default List
