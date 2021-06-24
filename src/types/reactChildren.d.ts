import { PropsWithChildren, ReactNode, JSX } from 'react'

export type reactChildren = {
  children:
    | JSX.Element
    | JSX.Element[]
    | JSX.ElementChildrenAttribute
    | PropsWithChildren<{}>
    | ReactNode
}
