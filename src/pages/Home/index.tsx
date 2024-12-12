import { useEffect, useState } from 'react'
import Header from '../../Components/Home/Header'
import Footer from '../../Components/Footer'
import HomeList from '../../Components/Home/List'

export type Food = {
  foto: string
  porcao: string
  preco: number
  nome: string
  image: string
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
      .catch((err) => console.error('Erro ao carregar os dados:', err))
  }, [])

  return (
    <>
      <Header />
      <HomeList foods={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
