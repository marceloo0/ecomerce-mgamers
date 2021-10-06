import styled from 'styled-components'
import { CgMenuRight } from 'react-icons/cg'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.mainBg};
  z-index: 99;
  position: sticky;
  top: 0;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const BoxUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FlexAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Divider = styled.div`
  width: 0.1rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.text};
  margin: 0 8px;
`
export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
`
export const Description = styled.button`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  background-color: transparent;
  border: none;
`
export const MenuIcon = styled(CgMenuRight)`
  width: 36px;
  height: 36px;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 8px;
`
