import { PropsWithChildren, ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
  children: JSX.ElementChildrenAttribute | PropsWithChildren<{}> | ReactNode
  htmlElement: HTMLElement
}

export default function Modal({ children, htmlElement }: ModalProps) {
  return <>{createPortal(<div>{children}</div>, htmlElement)}</>
}
