import styled, { css } from 'styled-components'
import { WrapperProps } from '../../constants/interfaces/Button'

export const Wrapper = styled.button<WrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.font.family};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.border.radius};
  cursor: pointer;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.mainBg};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }

  ${({ theme, size }) =>
    size === 'small' &&
    css`
      padding: ${theme.spacings.xxsmall};
    `}
  ${({ theme, size }) =>
    size === 'medium' &&
    css`
      padding: ${theme.spacings.xsmall};
    `}
  ${({ theme, size }) =>
    size === 'large' &&
    css`
      padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
      font-size: ${theme.font.sizes.small};
      border: 0.2px solid ${({ theme }) => theme.colors.primary};
    `}

  ${({ theme, hasIcon, hasChildren }) =>
    hasIcon &&
    hasChildren &&
    css`
      background-color: transparent;

      > svg {
        color: ${theme.colors.primary};
      }

      &:hover {
        border: 1px solid ${theme.colors.primary};
        background-color: transparent;
      }
    `}

  ${({ theme, hasIcon, hasChildren }) =>
    hasIcon &&
    !hasChildren &&
    css`
      > svg {
        color: ${theme.colors.primary};
        margin-right: ${theme.spacings.xxsmall};
      }
    `}
`
