import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  z-index: 0;

  display: flex;
`
export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.darkGray};
  /* text-transform: uppercase; */

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 7rem;
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.font.sizes.xxxlarge};
  }
`
