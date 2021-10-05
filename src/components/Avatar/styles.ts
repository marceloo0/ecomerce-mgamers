import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.mainBg};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 2.2rem;
    height: 2.2rem;
  }
`
export const Title = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  font-weight: ${({ theme }) => theme.font.bold};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }
`
