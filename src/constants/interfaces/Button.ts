interface Common {
  size?: 'small' | 'medium' | 'large'
}

export interface ButtonProps extends Common {
  icon?: JSX.Element
  children?: React.ReactNode
  onClick?: () => void
}

export interface WrapperProps extends Common {
  hasIcon: boolean
  hasChildren: boolean
}
