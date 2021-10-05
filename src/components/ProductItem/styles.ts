import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`
export const Box = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;

  @media (min-width: 768px) {
    width: 380px;
  }

  @media (min-width: 1024px) {
    width: 600px;
  }
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sizes.large};
  text-align: center;

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
  }
`
export const Price = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.sizes.small};
  text-decoration-line: line-through;

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }
`
export const Promotion = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 13px;

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.font.sizes.large};
  }
`
export const BoxImg = styled.div`
  left: 0;
`
export const Img = styled.img`
  height: 20rem;
  z-index: 2;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 25rem;
  }

  @media (min-width: 1024px) {
    height: 45rem;
  }
`
export const ButtonContent = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`
export const Buttons = styled.div`
  display: flex;
  margin-top: 1.5rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const BoxTitle = styled.div`
  position: absolute;
  left: auto;
  top: -5rem;
  z-index: 0;
`
