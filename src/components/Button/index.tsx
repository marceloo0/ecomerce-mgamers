import { ButtonProps } from '../../constants/interfaces/Button'

import * as S from './styles'

export const Button = ({
  children,
  icon,
  size = 'medium',
  onClick,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    hasIcon={!!icon}
    hasChildren={!children}
    onClick={onClick}
    {...props}
  >
    {icon && icon}
    {children && <span>{children}</span>}
  </S.Wrapper>
)
