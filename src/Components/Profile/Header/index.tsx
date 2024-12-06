import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import bg from '../../../assets/fundo.png'
import lixeira from '../../../assets/lixeira-de-reciclagem 1.png'
import {
  Container,
  ModalOverlay,
  ModalContent,
  ModalList,
  EmptyCartMessage,
  Lixo,
  PedidoImage,
  Button,
  Input,
  Label,
  Form,
  ContainerMsg
} from './styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { remover } from '../../../store/reducers/carrinho'
import { RootReducer } from '../../../store'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const Header = () => {
  const dispatch = useDispatch()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentModal, setCurrentModal] = useState(1)

  const totalDeItens = useSelector((state: RootReducer) =>
    state.carrinho.itens.reduce((total, item) => total + item.quantidade, 0)
  )

  const itensCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )

  const totalCarrinho = itensCarrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  )

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => {
    setModalIsOpen(false)
    setCurrentModal(1)
  }

  const handleRemoveItem = (id: number) => {
    dispatch(remover(id))
  }

  return (
    <>
      <Container style={{ backgroundImage: `url(${bg})` }}>
        <Link to="/">
          <h2>Restaurantes</h2>
        </Link>

        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <a onClick={openModal} style={{ cursor: 'pointer' }}>
          {totalDeItens} produto(s) no carrinho
        </a>
      </Container>

      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-content"
          overlayClassName="modal-overlay"
          contentLabel="Modal"
        >
          <ModalOverlay>
            <ModalContent>
              {currentModal === 1 && (
                <ModalList>
                  {itensCarrinho.map((item) => (
                    <li key={item.id}>
                      <PedidoImage src={item.image} alt={item.titulo} />
                      <h4>{item.quantidade}x</h4>
                      <h4>{item.titulo}</h4>
                      <h4>R${item.preco.toFixed(2)}</h4>
                      <Lixo
                        src={lixeira}
                        alt="Remover item"
                        onClick={() => handleRemoveItem(item.id)}
                        style={{ cursor: 'pointer' }}
                      />
                    </li>
                  ))}
                  <div>
                    <h3>Valor Total</h3>
                    <h3>R${totalCarrinho.toFixed(2)}</h3>
                  </div>
                  <Button
                    onClick={() => setCurrentModal(2)}
                    disabled={itensCarrinho.length < 1}
                  >
                    Continuar com a entrega
                  </Button>
                  <Button onClick={() => closeModal()}>Sair do carrinho</Button>
                </ModalList>
              )}

              {currentModal === 2 && (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setCurrentModal(3)
                  }}
                >
                  <h2>Entrega</h2>
                  <Label>
                    Quem ira receber:
                    <Input type="text" required />
                  </Label>
                  <Label>
                    Endereço:
                    <Input type="text" required />
                  </Label>
                  <Label>
                    Cidade:
                    <Input type="text" required />
                  </Label>
                  <div>
                    <Label>
                      Cep:
                      <Input type="number" required />
                    </Label>
                    <Label>
                      Número:
                      <Input type="number" required />
                    </Label>
                  </div>
                  <Label>
                    Complemento (opcional):
                    <Input type="text" />
                  </Label>
                  <Button type="submit">Continuar com pagamento</Button>
                  <Button onClick={() => setCurrentModal(1)}>
                    Voltar para o carrinho
                  </Button>
                </Form>
              )}

              {currentModal === 3 && (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setCurrentModal(4)
                  }}
                >
                  <h2>
                    Pagamento - valor a pagar R${totalCarrinho.toFixed(2)}
                  </h2>
                  <Label>
                    Nome no cartão:
                    <Input type="text" required />
                  </Label>
                  <div>
                    <Label>
                      Número do cartão:
                      <Input type="number" required />
                    </Label>
                    <Label>
                      CVV:
                      <Input type="number" required />
                    </Label>
                  </div>
                  <div>
                    <Label>
                      Mês de vencimento:
                      <Input type="number" required />
                    </Label>
                    <Label>
                      Ano de vencimento:
                      <Input type="number" required />
                    </Label>
                  </div>
                  <Button type="submit">Finalizar Pagamento</Button>
                  <Button onClick={() => setCurrentModal(2)}>
                    Voltar para edição de endereço
                  </Button>
                </Form>
              )}

              {currentModal === 4 && (
                <ContainerMsg>
                  <h2>Pedido Realizado</h2>
                  <p>
                    Estamos felizes em inormar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido. Gostaríamos de ressaltar que nossos
                    entregadores não estão autorizados a realizar cobranças
                    extras. Lembre-se da importância de higienizar as mãos após
                    o recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição. Esperamos que desfrute de uma
                    deliciosa e agradável experiência gastronômica. Bom apetite!
                  </p>
                  <Button onClick={() => closeModal()}>Concluir</Button>
                </ContainerMsg>
              )}

              {itensCarrinho.length === 0 && currentModal === 1 && (
                <EmptyCartMessage>O carrinho está vazio.</EmptyCartMessage>
              )}
            </ModalContent>
          </ModalOverlay>
        </Modal>
      )}
    </>
  )
}

export default Header
