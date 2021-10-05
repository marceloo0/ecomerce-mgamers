import styled from 'styled-components'

export const BoxUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  bottom: 0;

  @media (min-width: 768px) {
    display: none;
  }
`
export const Flex = styled.div`
  width: 100%;
  height: 100px;
`
export const FlexUser = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 12px;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`
export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.bold};
  margin-left: 12px;
`
export const TotalText = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.font.bold};
`
export const Divider = styled.div`
  width: 0.1rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.text};
  margin: 0 8px;
`
export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
`
export const Description = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
`
