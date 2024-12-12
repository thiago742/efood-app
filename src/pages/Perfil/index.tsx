import { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Profile/Header'
import List from '../../Components/Profile/List'
import Banner from '../../Components/Profile/Banner'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) {
      console.error('ID não encontrado na URL')
      setLoading(false)
      return
    }

    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setRestaurante(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Erro ao buscar restaurante:', err)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (!restaurante) {
    return <div>Restaurante não encontrado</div>
  }

  console.log(restaurante)

  return (
    <>
      <Header />
      <Banner
        capa={restaurante.capa}
        titulo={restaurante.titulo}
        tipo={restaurante.tipo}
      />
      <List foods={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
