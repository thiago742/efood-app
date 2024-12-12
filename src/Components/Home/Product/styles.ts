import { styled } from 'styled-components'

export const Li = styled.li`
  max-width: 500px;
  border: 1px solid #e66767;
  margin-bottom: 48px;
  position: relative;
  padding-bottom: 12px;
  max-height: 450px;

  img {
    width: 100%;
  }
`

export const RestImg = styled.img`
  height: 220px;
  object-fit: cover;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;

  div {
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
    background-color: #e66767;
    padding: 6px 4px;
    color: #fff;
  }
`

export const NomeNota = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 7px 16px;
  color: #e66767;
`

export const Nota = styled.div`
  display: flex;
  gap: 8px;
`

export const Desc = styled.p`
  padding: 0 8px;
  padding-bottom: 16px;
  color: #e66767;
  font-size: 14px;
`

export const Button = styled.a`
  background-color: #e66767;
  padding: 4px 6px;
  margin-left: 14px;
  color: #fff;
`
