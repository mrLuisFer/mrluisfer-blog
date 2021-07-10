import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { reactChildren } from 'src/types/reactChildren'

type ModalProps = {
  children: reactChildren | ReactNode
  htmlElement: HTMLElement
}

export default function Modal({ children, htmlElement }: ModalProps) {
  return <>{createPortal(<div>{children}</div>, htmlElement)}</>
}
