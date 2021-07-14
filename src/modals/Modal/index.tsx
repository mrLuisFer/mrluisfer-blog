import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { reactChildren } from 'src/types/reactChildren'
import { ModalBackground } from './Modal.styles'

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
