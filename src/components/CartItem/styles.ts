import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1060px;
  width: 100%;
  padding: 12px;
  margin: auto;
  z-index: 4;
`
export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 12px;
  margin: auto;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`
export const Price = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  font-weight: ${({ theme }) => theme.font.bold};
`
export const Quantity = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  margin-left: 0.4rem;
`
export const Img = styled.img`
  height: 9rem;
  width: 100%;
`
