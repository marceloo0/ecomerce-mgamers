import styled from 'styled-components'

export const Wrapper = styled.div`
  /* background-color: ${({ theme }) => theme.colors.mainBg}; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
`
export const BoxTitle = styled.div`
  position: absolute;
  left: auto;
  top: 4rem;
  z-index: 0;
`
export const Box = styled.div`
  /* position: absolute;
  left: auto;
  top: 4rem; */
  z-index: 2;
`
export const BoxContent = styled.div`
  height: 100vh;
  z-index: 2;
`
export const Flex = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex: 1;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`
export const SiderText = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    left: 0;
    top: 0;
    width: 80px;
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
export const BoxMenu = styled.div`
  width: 100%;
  display: block;
  height: 100%;
  margin-top: 3rem;
`
