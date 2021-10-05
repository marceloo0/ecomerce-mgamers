import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  width: 100%;
  height: 180px;
`
export const Flex = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`
export const Title = styled.span`
  transform: rotate(-90deg);
  white-space: nowrap;
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
`
export const BoxIcons = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-top: 9rem;

  > a {
    cursor: pointer;
  }
`
