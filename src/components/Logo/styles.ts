import styled from 'styled-components'

export const Wrapper = styled.button`
  border: none;
  background-color: transparent;
`
export const Img = styled.img`
  width: 6rem;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 7rem;
  }

  @media (min-width: 1024px) {
    width: 9rem;
  }
`
