import styled from 'styled-components'
import { FaShopify } from 'react-icons/fa'

export const Wrapper = styled.button`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  > svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (min-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`
export const Badge = styled.span`
  position: absolute;
  right: 0.4rem;
  top: 0;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.iconCart};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
`
export const Icon = styled(FaShopify)`
  width: 1.5rem;
  height: 1.5rem;

  @media screen and (min-width: 768px) {
    width: 2.3rem;
    height: 2.3rem;
  }
`
