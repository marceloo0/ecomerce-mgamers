import styled from 'styled-components'
import Modal from 'react-modal'

export const ModalWrapper = styled(Modal)`
  position: relative;
  background: ${({ theme }) => theme.colors.mainBg};
  width: 50rem;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 106px;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  z-index: 100;
`
export const Wrapper = styled.div`
  /* position: relative;
  background-color: ${({ theme }) => theme.colors.mainBg}; */
  z-index: 100;
`
export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.text};
`
export const Close = styled.button`
  background-color: transparent;
  border: none;

  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${({ theme }) => theme.colors.text};
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  height: 17rem;
`
