import { PropsWithChildren, ReactNode, JSX } from 'react'

export type reactChildren = {
  children: JSX.ElementChildrenAttribute | PropsWithChildren<{}> | ReactNode
}
