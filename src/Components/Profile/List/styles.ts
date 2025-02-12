import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 56px 171px;
  display: flex;
  justify-content: center;
  background-color: #fff8f2;
`
export const FoodList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;

  li {
    width: 320px;
    max-height: 400px;
  }
`
