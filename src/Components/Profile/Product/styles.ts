import { styled } from 'styled-components'

export const Li = styled.li`
  max-width: 500px;
  background-color: #e66767;
  margin-bottom: 48px;
  position: relative;
  padding-bottom: 12px;
  max-height: 500px;

  img {
    width: 95%;
    display: block;
    margin: 8px auto;
    height: 167px;
    object-fit: cover;
    padding-top: 8px;
  }

  h3 {
    color: #fff;
    padding: 16px;
  }
`

export const Desc = styled.p`
  padding: 0 16px;
  margin-bottom: 16px;
  color: #fff;
  font-size: 14px;
`

export const Button = styled.button`
  display: block;
  background-color: #fff;
  color: #e66767;
  padding: 8px 6px;
  margin: 0px auto;
  width: 90%;
  text-align: center;
  border: none;
  font-weight: bold;
  cursor: pointer;
`

export const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: #e66767;
  padding: 20px;
  width: 80%;
  height: 344px;
  max-width: 1024px;
  display: flex;
  align-items: center;
  gap: 15px;
`

export const ModalContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  position: relative;
`

export const ModalTitle = styled.h2`
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
`

export const ModalDescription = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 40px 0;
`

export const ModalPorcao = styled.p`
  color: #fff;
  font-size: 14px;
  margin-bottom: 16px;
`

export const ModalImage = styled.img`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ModalX = styled.img`
  height: 16px;
  width: 16px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`

export const ModalButton = styled.button`
  background-color: #fff;
  color: #e66767;
  padding: 10px 20px;
  width: 40%;
  border: none;
  font-weight: bold;
  cursor: pointer;
`
