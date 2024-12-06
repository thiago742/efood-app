import ProfileProduct from '../Product'
import FoodProf from '../../../models/FoodProf'
import { Container, FoodList } from './styles'

type Props = {
  foods: FoodProf[]
}

const List = ({ foods = [] }: Props) => (
  <Container>
    <FoodList>
      {foods.map((food) => (
        <ProfileProduct
          key={food.id}
          id={food.id}
          image={food.image}
          descricao={food.descricao}
          titulo={food.titulo}
          preco={food.preco}
        />
      ))}
    </FoodList>
  </Container>
)

export default List
