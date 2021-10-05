import styled from 'styled-components'
// import { CardMenuImgStyle } from '~/constants/interfaces/CardMenu'

export const Wrapper = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  height: 350px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.border.radius};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`
export const Box = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacings.xsmall};
  top: ${({ theme }) => theme.spacings.xsmall};
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Title = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`
export const Price = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
`
export const Img = styled.img`
  height: 360px;
  width: 380px;
  position: absolute;
  right: -100px;
  top: -50px;
  z-index: 1;
  object-fit: contain;
`
export const TitleBackground = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 0;
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  /* text-transform: uppercase; */
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: bold;
`
