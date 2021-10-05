import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
  height: 100vh;
`
export const BoxTitle = styled.div``
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 15rem;
`
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
`
