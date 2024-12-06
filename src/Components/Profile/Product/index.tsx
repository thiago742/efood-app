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
  ModalButton
} from './styles'
import Modal from 'react-modal'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../../store/reducers/carrinho'

export type Props = {
  id: number
  titulo: string
  image: string
  descricao: string
  preco: number
}

Modal.setAppElement('#root')

const Product = ({ id, descricao, image, titulo, preco }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const adicionarAoCarrinho = () => {
    dispatch(adicionar({ id, titulo, image, descricao, preco }))
    closeModal()
  }

  return (
    <Li>
      <img src={image} alt={titulo} />
      <h3>{titulo}</h3>
      <Desc>{descricao}</Desc>
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
                <ModalDescription>
                  A pizza Margherita é uma pizza clássica da culinária italiana,
                  reconhecida por sua simplicidade e sabor inigualável. Ela é
                  feita com uma base de massa fina e crocante, coberta com molho
                  de tomate fresco, queijo mussarela de alta qualidade,
                  manjericão fresco e azeite de oliva extra-virgem. A combinação
                  de sabores é perfeita, com o molho de tomate suculento e
                  ligeiramente ácido, o queijo derretido e cremoso e as folhas
                  de manjericão frescas, que adicionam um toque de sabor
                  herbáceo. É uma pizza simples, mas deliciosa, que agrada a
                  todos os paladares e é uma ótima opção para qualquer ocasião.
                  <br />
                  <br />
                  Serve: de 2 a 3 pessoas
                </ModalDescription>
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
