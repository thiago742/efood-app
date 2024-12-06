import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 64px 168px;

  h2 {
    font-size: 18px;
    color: #e66767;
  }

  a {
    color: #e66767;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  background-color: #e66767;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  overflow-y: scroll; /* Permite a rolagem vertical */
  padding-bottom: 32px;

  /* Esconde a barra de rolagem nos navegadores baseados em WebKit */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Esconde a barra de rolagem no Firefox */
  scrollbar-width: none; /* Firefox */

  /* Esconde a barra de rolagem no IE/Edge antigo */
  -ms-overflow-style: none; /* IE 10+ */
`

export const ModalList = styled.ul`
  li {
    display: flex;
    background-color: #ffebd9;
    margin: 16px 8px;
    align-items: center;
    color: #e66767;
  }

  h4 {
    margin-left: 24px;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 8px;
  }

  h3 {
    color: #fff;
    font-size: 18px;
  }
`

export const Form = styled.form`
  padding: 16px;
  width: 360px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  h2 {
    margin-bottom: 16px;
    color: #fff;
    font-weight: bold;
  }
`

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 95%;
  padding: 8px;
  border: none;
  background-color: #ffebd9;
  color: #e66767;
  font-weight: bold;
  font-size: 18px;
  margin-top: 16px;
  cursor: pointer;
`

export const Label = styled.label`
  color: #fff;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Input = styled.input`
  border: none;
  background-color: #ffebd9;
  font-weight: bold;
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 32px;
  text-align: center;
  margin-top: 8px;
`

export const PedidoImage = styled.img`
  height: 80px;
  padding: 8px;
`

export const Lixo = styled.img`
  height: 30px;
  width: 30px;
`

export const EmptyCartMessage = styled.p`
  padding: 24px;
  color: #fff;
  font-weight: bold;
`

export const ContainerMsg = styled.div`
  width: 360px;
  padding: 32px;
  color: #fff;

  h2 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
  }
`
