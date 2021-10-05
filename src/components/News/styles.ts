import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
  height: 100%;
  position: relative;
`
export const BoxTitle = styled.div`
  position: absolute;
  left: auto;
  top: 4rem;
  z-index: 0;
`
export const BoxNews = styled.div`
  /* max-width: 1024px;
  position: absolute;
  margin-left: 13rem;
  top: 8rem; */
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;

  @media screen and (min-width: 768px) {
    /* max-width: 1024px; */
    width: 100%;
    height: 100%;
    /* position: absolute; */
    /* margin-left: auto; */
    margin-top: 8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* column-gap: 0.8rem; */
  }
  @media screen and (min-width: 1024px) {
    /* max-width: 1024px; */
    width: 100%;
    height: 100%;
    /* position: absolute; */
    /* margin-left: auto; */
    margin-top: 8rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* column-gap: 0.8rem; */
  }
`
export const SiderButtons = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    position: absolute;
    right: 0;
    bottom: 10rem;
    margin-right: 2rem;
    /* width: 100px; */
  }
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
