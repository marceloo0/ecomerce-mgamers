import styled from 'styled-components'

interface AvatarProps {
  backgroundImg: string
}

export const DropDown = styled.div`
  position: absolute;
  top: 3rem;
  right: 8rem;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 8px 16px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;

  > span {
    color: #fff;
  }

  @media screen and (max-width: 400px) {
    left: 2rem;
    bottom: 2.2rem;
  }
`

export const Wrapper = styled.div<AvatarProps>`
  width: 2rem;
  height: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-size: contain;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 2.2rem;
    height: 2.2rem;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`
export const Title = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  font-weight: ${({ theme }) => theme.font.bold};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }
`
