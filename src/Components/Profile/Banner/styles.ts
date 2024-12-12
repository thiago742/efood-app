import styled from 'styled-components'

export const Container = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 170px;

  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 32px;
  }

  p {
    color: #fff;
    font-size: 24px;
  }

  img {
    object-fit: cover;
  }
`
