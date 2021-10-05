import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  /* padding: 0 1rem; */
`
export const Box = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transition-duration: 1s ease;

  z-index: 2;
`
export const Flex = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  div.slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  div.slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`
export const SiderText = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
`
export const SiderButtons = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    right: 0;
    top: 0;
    width: 100px;
  }
`
export const Buttons = styled.div`
  display: flex;
  margin-top: 1.5rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Title = styled.span`
  transform: rotate(-90deg);
  white-space: nowrap;
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
`
export const BoxIcons = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-top: 9rem;

  > a {
    cursor: pointer;
  }
`
