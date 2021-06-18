import { PropsWithChildren, ReactNode } from 'react'

export type reactChildren = {
  children: JSX.ElementChildrenAttribute | PropsWithChildren<{}> | ReactNode
}
