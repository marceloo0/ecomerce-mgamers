import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const Empty = styled.div`
  width: 100%;
  height: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sizes.medium};
`
export const FooterWapper = styled.div`
  width: 100%;
`
export const BoxTitle = styled.div`
  position: absolute;
  left: auto;
  bottom: 5rem;
  z-index: 0;
`
export const Content = styled.div`
  /* z-index: 1; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
