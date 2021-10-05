import styled from 'styled-components'

export const Wrapper = styled.div`
  /* background-color: ${({ theme }) => theme.colors.mainBg}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  position: relative;
  width: 100%;
  height: 100%;
`
export const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.8rem;
  width: 100%;
  padding: 1rem;

  @media (min-width: 768px) {
    /* max-width: 1224px; */
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.8rem;
    row-gap: 0.8rem;
  }
  @media (min-width: 1024px) {
    /* max-width: 1224px; */
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 0.8rem;
    row-gap: 0.8rem;
  }
`
export const Flex = styled.div`
  padding: 0.8rem;
  display: flex;
  align-items: flex-end;
`
