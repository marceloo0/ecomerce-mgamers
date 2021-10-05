import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`
export const Img = styled.img`
  width: 100%;
  height: 290px;

  left: auto;
  top: 0;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 36px;
`
export const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  width: 200px;
  text-align: center;
  line-height: 18px;
`
export const Price = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  text-decoration-line: line-through;
  line-height: 15px;
`
export const Promotion = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.sizes.large};
  line-height: 13px;
`
export const TitleBackground = styled.span`
  position: absolute;
  left: auto;
  top: 16px;
  z-index: 0;
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  color: ${({ theme }) => theme.colors.darkGray};
  text-transform: uppercase;
`
