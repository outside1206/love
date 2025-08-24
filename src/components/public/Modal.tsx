import styled from '@emotion/styled'
import ReactDOM from 'react-dom'
import { ReactNode } from 'react'

interface ModalProps {
  open: boolean
  onClose: () => void
  overlayChildren: ReactNode
  children: ReactNode
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
`

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 999;
`

const Modal = ({ open, onClose, overlayChildren, children }: ModalProps) => {
  if (!open) {
    return null
  }

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={onClose}>{overlayChildren}</Overlay>
      <Wrapper>{children}</Wrapper>
    </>,
    document.getElementById('global-modal') as HTMLElement,
  )
}

export default Modal
