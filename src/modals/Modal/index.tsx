import { createPortal } from 'react-dom'
import { ModalBackground } from './Modal.styles'
import { reactChildren } from 'src/types/reactChildren'
import { ReactNode } from 'react'

type ModalProps = {
  children: reactChildren | ReactNode
  htmlElement: HTMLElement
}

export default function Modal({ children, htmlElement }: ModalProps) {
  document.body.style.overflow = 'hidden'

  return (
    <>
      {createPortal(
        <ModalBackground aria-modal='true' aria-hidden='false'>
          {children}
        </ModalBackground>,
        htmlElement
      )}
    </>
  )
}
