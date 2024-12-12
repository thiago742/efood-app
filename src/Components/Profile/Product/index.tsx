import {
  Button,
  Desc,
  Li,
  ModalOverlay,
  ModalContent,
  ModalContainer,
  ModalTitle,
  ModalDescription,
  ModalImage,
  ModalButton,
  ModalPorcao
} from './styles'
import Modal from 'react-modal'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../../store/reducers/carrinho'

Modal.setAppElement('#root')

type ProductProps = {
  image: string
  titulo: string
  descricao: string
  porcao: string
  preco: number
  id: number
}

const Product = ({
  image,
  titulo,
  descricao,
  porcao,
  preco,
  id
}: ProductProps) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  console.log('Imagem URL:', image)

  const adicionarAoCarrinho = () => {
    dispatch(
      adicionar({
        id,
        titulo,
        preco,
        quantidade: 1,
        image
      })
    )
    closeModal()
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 150) + '...'
    }
    return descricao
  }

  return (
    <Li>
      <img src={image} alt={titulo} />
      <h3>{titulo}</h3>
      <Desc>{getDescricao(descricao)}</Desc>
      <Button onClick={openModal}>Adicionar ao carrinho</Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <ModalOverlay>
          <ModalContent>
            <ModalContainer>
              <ModalImage src={image} alt={titulo} />
              <div>
                <ModalTitle>{titulo}</ModalTitle>
                <ModalDescription>{descricao}</ModalDescription>
                <ModalPorcao>Serve: de {porcao}</ModalPorcao>
                <ModalButton onClick={adicionarAoCarrinho}>
                  Adicionar ao carrinho - R${preco.toFixed(2)}
                </ModalButton>
              </div>
            </ModalContainer>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Li>
  )
}

export default Product
